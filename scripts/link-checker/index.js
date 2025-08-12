const fs = require('fs');
const path = require('path');
const glob = require('glob');
const MarkdownIt = require('markdown-it');
const babelParser = require('@babel/parser');
const axios = require('axios');
const chalk = require('chalk');

const md = new MarkdownIt();

// --- Link Extraction Functions (from previous step, unchanged) ---

function extractLinksFromMarkdown(markdownContent, filePath) {
  const tokens = md.parse(markdownContent, {});
  const links = [];
  for (let i = 0; i < tokens.length; i++) {
    const currentToken = tokens[i];
    if (currentToken.type === 'inline' && currentToken.children) {
      currentToken.children.forEach(child => {
        if (child.type === 'link_open') {
          const href = child.attrGet('href');
          if (href) {
            links.push({
              url: href,
              file: filePath,
              line: child.map ? child.map[0] + 1 : undefined
            });
          }
        }
      });
    }
  }
  return links;
}

function extractLinksFromJsx(jsxContent, filePath) {
  const links = [];
  try {
    const ast = babelParser.parse(jsxContent, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
      errorRecovery: true
    });
    function visit(node) {
      if (!node) return;
      if (node.type === 'JSXOpeningElement' && node.name && (node.name.name === 'a' || node.name.name === 'Link')) {
        const hrefAttr = node.attributes.find(attr => attr.type === 'JSXAttribute' && attr.name && attr.name.name === 'href');
        if (hrefAttr && hrefAttr.value) {
          let urlValue = null;
          if (typeof hrefAttr.value.value === 'string') {
            urlValue = hrefAttr.value.value;
          } else if (hrefAttr.value.type === 'JSXExpressionContainer' && hrefAttr.value.expression && typeof hrefAttr.value.expression.value === 'string') {
            urlValue = hrefAttr.value.expression.value;
          }
          if (urlValue) {
            links.push({
              url: urlValue,
              file: filePath,
              line: node.loc ? node.loc.start.line : undefined
            });
          }
        }
      }
      for (const key in node) {
        if (node.hasOwnProperty(key) && typeof node[key] === 'object' && node[key] !== null) {
          if (Array.isArray(node[key])) {
            node[key].forEach(visit);
          } else {
            visit(node[key]);
          }
        }
      }
    }
    visit(ast);
  } catch (error) {
    console.warn(chalk.yellow(`Could not parse JSX/TSX file ${filePath}: ${error.message}. Skipping.`));
  }
  return links;
}

function extractLinksFromJson(jsonContent, filePath) {
  const links = [];
  try {
    const json = JSON.parse(jsonContent);
    function findUrlsInObject(obj) {
        for (const key in obj) {
            if (typeof obj[key] === 'string') {
                const val = obj[key];
                if (val.startsWith('/') || val.startsWith('http://') || val.startsWith('https://')) {
                    links.push({ url: val, file: filePath, line: undefined });
                }
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                findUrlsInObject(obj[key]);
            }
        }
    }
    findUrlsInObject(json);
  } catch (error) {
    console.warn(chalk.yellow(`Could not parse JSON file ${filePath}: ${error.message}. Skipping.`));
  }
  return links;
}

// --- Path and Link Validation Utilities ---
const NEXTJS_PAGE_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];

function checkFileExists(basePath, extensions) {
    for (const ext of extensions) {
        if (fs.existsSync(basePath + ext)) return basePath + ext;
    }
    return null;
}

function validateInternalLink(linkUrl, projectRoot) {
    let targetPath = linkUrl.split('?')[0].split('#')[0]; // Remove query params and hash

    // Handle known redirect from next.config.js: /m/:path* -> /mobile/pwa/:path*
    if (targetPath.startsWith('/m/')) {
        targetPath = targetPath.replace('/m/', '/mobile/pwa/');
    }

    // Handle edge case of empty path or just '/'
    if (targetPath === '' || targetPath === '/') {
        targetPath = '/index';
    }

    let pageFilePath = path.join(projectRoot, 'pages', targetPath);

    // Check for file (e.g., /about -> pages/about.js)
    let foundPath = checkFileExists(pageFilePath, NEXTJS_PAGE_EXTENSIONS);
    if (foundPath) return { status: 'internal_ok', resolvedPath: foundPath };

    // Check for directory index (e.g., /about -> pages/about/index.js)
    foundPath = checkFileExists(path.join(pageFilePath, 'index'), NEXTJS_PAGE_EXTENSIONS);
    if (foundPath) return { status: 'internal_ok', resolvedPath: foundPath };

    // Check for dynamic routes (e.g. /blog/[slug].js)
    // This is a simplified check: if any part of the path contains square brackets,
    // we check if the parent directory and a file with brackets exist.
    const pathSegments = targetPath.substring(1).split('/'); // remove leading /
    let currentPathForDynamicCheck = path.join(projectRoot, 'pages');
    for (let i = 0; i < pathSegments.length; i++) {
        const segment = pathSegments[i];
        const nextPathPart = path.join(currentPathForDynamicCheck, segment);
        if (fs.existsSync(nextPathPart) && fs.lstatSync(nextPathPart).isDirectory()) {
            currentPathForDynamicCheck = nextPathPart;
        } else {
            // Check if a file with dynamic pattern exists in currentPathForDynamicCheck
            try {
                const filesInDir = fs.readdirSync(currentPathForDynamicCheck);
                const dynamicMatch = filesInDir.find(f => f.startsWith('[') && f.endsWith(']') && NEXTJS_PAGE_EXTENSIONS.some(ext => f.endsWith(ext)));
                if (dynamicMatch && i === pathSegments.length -1) { // Dynamic part must be the last segment checked here
                    return { status: 'internal_dynamic_route_exists', resolvedPath: path.join(currentPathForDynamicCheck, dynamicMatch) };
                }
            } catch (e) {
                // directory might not exist or not be readable, proceed to next check
            }
            // If not the last segment or no dynamic match, break and consider it broken by later checks
            break;
        }
    }
    // A more specific check for dynamic routes if previous one failed to resolve
    const parts = pageFilePath.split(path.sep);
    for (let i = parts.length - 1; i >= 0; i--) {
        const part = parts[i];
        if (part.includes('[')) { // e.g. pages/blog/[slug]
            const dynamicRoutePatternBase = parts.slice(0, i+1).join(path.sep);
            foundPath = checkFileExists(dynamicRoutePatternBase, NEXTJS_PAGE_EXTENSIONS);
            if (foundPath) return { status: 'internal_dynamic_route_exists', resolvedPath: foundPath };
        }
    }

    return { status: 'internal_broken', reason: `No corresponding file or dynamic route pattern found for ${linkUrl} (checked around ${pageFilePath})` };
}


// --- Link Checking ---
async function checkLink(link, projectRoot) {
  const originalUrl = link.url;

  if (originalUrl.startsWith('mailto:') || originalUrl.startsWith('#') || originalUrl.startsWith('tel:')) {
    return { ...link, status: 'skipped (special_protocol)' };
  }

  // Internal link validation
  if (originalUrl.startsWith('/') && !originalUrl.startsWith('//')) {
    const validationResult = validateInternalLink(originalUrl, projectRoot);
    return { ...link, ...validationResult };
  }

  // External link validation
  try {
    const response = await axios.get(originalUrl, {
        timeout: 8000,
        headers: { 'User-Agent': 'ZionLinkChecker/1.0' },
        maxRedirects: 5
    });
    return { ...link, status: response.status }; // Final status after redirects
  } catch (error) {
    if (error.response) {
      return { ...link, status: error.response.status, error: `Server responded with ${error.response.status}` };
    } else if (error.request) {
      return { ...link, status: 'error_no_response', error: 'No response received (timeout or network issue)' };
    } else {
      return { ...link, status: 'error_generic', error: error.message };
    }
  }
}

// --- Main Function ---
async function main(projectRoot = '.') {
  console.log(chalk.blue(`Scanning project at ${path.resolve(projectRoot)}...`));
  const absoluteProjectRoot = path.resolve(projectRoot);

  const filePatterns = [
    path.join(absoluteProjectRoot, 'src/config/variables/default.json'),
    path.join(absoluteProjectRoot, 'pages/**/*.{jsx,tsx}'),
    path.join(absoluteProjectRoot, 'src/components/**/*.{jsx,tsx}'),
    path.join(absoluteProjectRoot, 'src/pages/**/*.{jsx,tsx}'),
    path.join(absoluteProjectRoot, 'content/**/*.md')
  ];

  let files = [];
  filePatterns.forEach(pattern => {
    files = files.concat(glob.sync(pattern, { nodir: true, ignore: ['**/node_modules/**'] }));
  });
  files = [...new Set(files)];

  if (files.length === 0) {
    console.log(chalk.yellow('No relevant files found. Check patterns/paths. Ensure script is run from project root.'));
    return;
  }
  console.log(chalk.green(`Found ${files.length} file(s) to scan.`));

  let allLinks = [];
  files.forEach(filePath => {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativeFilePath = path.relative(absoluteProjectRoot, filePath);
    const ext = path.extname(filePath);
    let extracted = [];
    if (ext === '.md') {
      extracted = extractLinksFromMarkdown(content, relativeFilePath);
    } else if (ext === '.jsx' || ext === '.tsx') {
      extracted = extractLinksFromJsx(content, relativeFilePath);
    } else if (path.basename(filePath) === 'default.json' && filePath.includes(path.join('src','config', 'variables'))) {
      extracted = extractLinksFromJson(content, relativeFilePath);
    }
    if (extracted.length > 0) {
        console.log(chalk.cyan(`Found ${extracted.length} links in ${relativeFilePath}`));
        allLinks = allLinks.concat(extracted);
    }
  });

  if (allLinks.length === 0) {
    console.log(chalk.yellow('No links found in any files.'));
    return;
  }
  console.log(chalk.green(`Found ${allLinks.length} total links. Checking status (this might take a while)...`));

  const CONCURRENT_CHECKS = 5;
  let results = [];
  let brokenInternal = 0, brokenExternal = 0, operationalErrors = 0;

  for (let i = 0; i < allLinks.length; i += CONCURRENT_CHECKS) {
    const chunk = allLinks.slice(i, i + CONCURRENT_CHECKS);
    // Pass projectRoot to checkLink for internal link validation context
    const chunkResults = await Promise.all(chunk.map(linkObj => checkLink(linkObj, absoluteProjectRoot)));
    results = results.concat(chunkResults);

    chunkResults.forEach(result => {
      const location = `${result.file}${result.line ? ':'+result.line : ''}`;
      if (result.status === 'skipped (special_protocol)') {
        console.log(chalk.gray(`SKIPPED: ${result.url} (in ${location})`));
      } else if (result.status === 'internal_ok') {
        console.log(chalk.green(`OK (Internal): ${result.url} -> ${path.relative(absoluteProjectRoot,result.resolvedPath)} (in ${location})`));
      } else if (result.status === 'internal_dynamic_route_exists') {
        console.log(chalk.cyan(`OK (Internal Dynamic): ${result.url} -> ${path.relative(absoluteProjectRoot,result.resolvedPath)} (in ${location})`));
      } else if (result.status === 'internal_broken') {
        brokenInternal++;
        console.log(chalk.red.bold(`BROKEN (Internal): ${result.url} (in ${location})`));
        if (result.reason) console.log(chalk.red(`  Reason: ${result.reason}`));
      } else if (result.status === 200) {
        console.log(chalk.green(`OK (200 External): ${result.url} (in ${location})`));
      } else if (typeof result.status === 'number' && result.status >= 400) {
        brokenExternal++;
        console.log(chalk.red.bold(`BROKEN (${result.status} External): ${result.url} (in ${location})`));
        if (result.error) console.log(chalk.red(`  Error: ${result.error}`));
      } else { // Operational errors for external links
        operationalErrors++;
        console.log(chalk.yellow(`ERROR (${result.status} External): ${result.url} (in ${location})`));
        if (result.error) console.log(chalk.yellow(`  Issue: ${result.error}`));
      }
    });
  }

  console.log("\n--- Summary ---");
  if (brokenInternal > 0) {
    console.log(chalk.red.bold(`Found ${brokenInternal} broken internal link(s).`));
  } else {
    console.log(chalk.green('No broken internal links found!'));
  }
  if (brokenExternal > 0) {
    console.log(chalk.red.bold(`Found ${brokenExternal} broken external link(s) (4xx/5xx status).`));
  } else {
    console.log(chalk.green('No broken external links (4xx/5xx status) found!'));
  }
  if (operationalErrors > 0) {
    console.log(chalk.yellow.bold(`Encountered ${operationalErrors} operational issues (e.g., timeouts, DNS errors) for external links.`));
  }

  const totalBroken = brokenInternal + brokenExternal;
  if (totalBroken > 0) {
    process.exitCode = 1;
  } else {
    console.log(chalk.green.bold("\nOverall: No definitively broken links detected!"));
  }
}

main('.').catch(error => {
  console.error(chalk.red.bold(`\nAn unexpected error occurred in the script: ${error.message}`));
  console.error(error.stack);
  process.exitCode = 1;
});
