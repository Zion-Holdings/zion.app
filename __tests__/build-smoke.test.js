const nextConfigPath = 'C:/Users/Zion/zion-support.github.io/next.config.js';
const pkg = require('C:/Users/Zion/zion-support.github.io/package.json');

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
