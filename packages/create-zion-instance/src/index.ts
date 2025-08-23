#!/usr/bin/env node
import { Command } from 'commander';
import path from 'path';
import fs from 'fs-extra';
import ora from 'ora';
import { cyan, green, yellow, red } from 'kolorist';

const program = new Command();

program
  .name('create-zion-instance')
  .description('Scaffold a new Zion OS instance')
  .option('-t, --template <name>', 'Template to use (nextjs | express-webhooks | flutter-firebase | dao-cli)', 'nextjs')
  .option('-d, --dir <path>', 'Directory to create', 'zion-app')
  .parse(process.argv);

const opts = program.opts<{ template: string; dir: string }>();

async function main() {
  const template = opts.template as string;
  const dir = path.resolve(process.cwd(), opts.dir);
  const templateDir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../templates', template);

  const spinner = ora(`Creating ${cyan(template)} in ${cyan(dir)}...`).start();
  try {
    if (!(await fs.pathExists(templateDir))) {
      throw new Error(`Template not found: ${template}`);
    }
    await fs.ensureDir(dir);
    await fs.copy(templateDir, dir, { overwrite: false, errorOnExist: false });

    // Rename _gitignore to .gitignore if present
    const gi = path.join(dir, '_gitignore');
    if (await fs.pathExists(gi)) await fs.move(gi, path.join(dir, '.gitignore'), { overwrite: true });

    spinner.succeed(`Project created at ${green(dir)}`);
    console.log(`\nNext steps:`);
    console.log(`  1. cd ${opts.dir}`);
    console.log(`  2. Install deps: ${yellow('npm i')} or ${yellow('pnpm i')}`);
    console.log(`  3. Set env vars (see .env.example) and run: ${yellow('npm run dev')}`);
  } catch (e: any) {
    spinner.fail(red(e.message || String(e)));
    process.exit(1);
  }
}

main();