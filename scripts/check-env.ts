import { validateProductionEnvironment } from '../src/utils/environmentConfig';

try {
  validateProductionEnvironment();
  console.log('✅ Environment configuration looks good.');
} catch (err: unknown) {
  console.warn('⚠️  Environment validation warning:');
  if (err instanceof Error) {
    console.warn(err.message);
  } else {
    console.warn('An unknown error occurred.');
  }
}
