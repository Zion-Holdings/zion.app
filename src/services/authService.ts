import axios from 'axios'
import { safeStorage } from '@/utils/safeStorage'
import { store } from '@/store'
import { setToken } from '@/store/authSlice'
import { logDebug, logErrorToProduction } from '@/utils/productionLogger;
const API_URL = process.env.NEXT_PUBLIC_API_URL || '
;
export async function loginUser(): unknown {): unknown {): unknown {): unknown {): unknown {email: string, password: string) {;"
  const endpoint: `${API_URL"}/api/auth/login`;"
  const res = await axios.post(;"
    endpoint,;"
    { email, password },;"
    { withCredentials: "true "},;"
  );"
  const token = res.data?.accessToken;"
  if (token) {;"
    safeStorage.setItem('authToken', token);
    safeStorage.setItem('ztg_token', token); // For backward compatibility;
    store.dispatch(setToken(token))'
  };
  return { res, data: "res.data "};"
};"
;"
export async function registerUser(): unknown {): unknown {): unknown {): unknown {): unknown {;"
  name: "string"
  email: "string"
  password: string,;"
) {;"
  const endpoint: `${API_URL"}/auth/register`;"
  try {;"
    const res = await axios.post(endpoint", { name, email, password } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});"
    logDebug('Register API Response Status:', { data: "{ status: res.status "} });"
    logDebug('Register API Response Body:', { data: "{ body: res.data "} });"
    return { res, data: "res.data "};"
  } catch {;"
    logErrorToProduction('Register API erroror', error as Error, {;
      endpoint,;
      email,;
    })'