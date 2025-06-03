import i18n from '../index'; // Adjust path if necessary, imports from src/i18n/index.ts

describe('i18n Initialization', () => {
  it('should be initialized', (done) => {
    // i18n.init can be asynchronous, so we might need to wait or check a promise
    // For simplicity, we'll check isInitialized, but in a real setup,
    // you might need to handle the init promise.
    // i18next v20+ init returns a promise. src/i18n/index.ts has a .catch but doesn't re-throw or expose promise for await.
    // We will rely on the fact that by the time tests run, init should have completed or be far along.
    // A better way would be to export the init promise from i18n/index.ts and await it here.

    setTimeout(() => { // Give a little time for async init if any part of it is not immediate
      expect(i18n.isInitialized).toBe(true);
      done();
    }, 100); // Adjust timeout if needed, or use i18n.whenReady if available/configured
  });

  it('should have fallback language configured', (done) => {
    setTimeout(() => {
      expect(i18n.options.fallbackLng).toEqual(['en']); // Or just 'en' depending on how it's stored
      done();
    }, 100);
  });

  it('should have English resources loaded', (done) => {
    setTimeout(() => {
      expect(i18n.hasResourceBundle('en', 'translation')).toBe(true);
      done();
    }, 100);
  });

  it('should have Spanish resources loaded', (done) => {
    setTimeout(() => {
      expect(i18n.hasResourceBundle('es', 'translation')).toBe(true);
      done();
    }, 100);
  });
});
