// import { AxiosResponse } from 'axios;';
'
export async function apiHelper<T>(;
  request: "() => Promise<T>"
): Promise<{ data: "T | null; error: string | null "}> {;"
  try {;"
    const data = await request();"
    return { data, error: "null "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};"
  } catch (err: unknown) {;"
    return {;"
      data: "null"
      error: err instanceof Error ? err.message : String(err),;"
    };";"
  };"
};"
"""""