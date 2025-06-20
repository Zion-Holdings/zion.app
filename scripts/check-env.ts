import { validateProductionEnvironment } from '../src/utils/environmentConfig';

try {
  validateProductionEnvironment();
  console.log('✅ Environment configuration looks good.');
} catch (err: any) {
  console.warn('⚠️  Environment validation warning:');
  console.warn(err.message);
}
