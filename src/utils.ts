import 'https://deno.land/std@0.176.0/dotenv/load.ts';

export function getEnv(key: string): string {
  const value = Deno.env.get(key);
  if (value == undefined) {
    throw new Error(`Key ${key} is not set`);
  }
  return value;
}
