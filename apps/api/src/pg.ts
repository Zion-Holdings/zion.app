// import { Pool, PoolClient } from 'pg';

let pool: any = null;

export function getPool(): any {
  if (!pool) {
    // pool = new Pool({ connectionString: (globalThis as any).process?.env?.DATABASE_URL });
    pool = null;
  }
  return pool;
}

export async function withUser<T>(userId: string, fn: (client: any) => Promise<T>): Promise<T> {
  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    await client.query(`SELECT set_config('app.current_user_id', $1, true)`, [userId]);
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
  } catch (err: any) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}