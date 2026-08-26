const nextConfigPath = require.resolve('../next.config.js');
const pkg = require(require.resolve('./package.json'));

const maybeConfig = require(nextConfigPath);
const config = maybeConfig && typeof maybeConfig === 'object' && maybeConfig.default ? maybeConfig.default : maybeConfig;

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