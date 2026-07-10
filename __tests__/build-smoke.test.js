const path = require('path');
const nextConfigPath = path.join(__dirname, '..', 'next.config.js');
const pkg = require(nextConfigPath.replace('next.config.js', 'package.json'));

const maybeConfig = require(nextConfigPath);
const config = maybeConfig && maybeConfig.default ? maybeConfig.default : maybeConfig;

describe('build smoke checks', () => {
  test('next config exports a config object with static export', () => {
    expect(config && typeof config).toBe('object');
    expect(config.output).toBe('export');
  });
  test('package build script is present and string', () => {
    expect(typeof pkg.scripts.build).toBe('string');
    expect(pkg.scripts.build).toMatch(/next build/);
  });
});
