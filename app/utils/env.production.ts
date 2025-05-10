import type { Env } from '../../worker-configuration';

export function validateProductionEnv() {
  const requiredVars = [
    // AI API Keys
    'COHERE_API_KEY',
    'TOGETHER_API_KEY',
    'GROQ_API_KEY',
    'GEMINI_API_KEY',

    // Database Configuration
    'POSTGRES_HOST',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DATABASE',
    'POSTGRES_URL',
    'POSTGRES_PRISMA_URL',
    
    // Redis/KV Configuration
    'KV_URL',
    'KV_REST_API_URL',
    'KV_REST_API_TOKEN',
    
    // Vercel Blob Storage
    'BLOB_READ_WRITE_TOKEN',
  ] as const;

  const missingVars = requiredVars.filter((name) => {
    const value = process.env[name];
    return !value || value.length === 0;
  });

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables in production: ${missingVars.join(', ')}`
    );
  }

  // Validate database URL format
  if (!process.env.POSTGRES_URL?.includes('sslmode=require')) {
    console.warn('Warning: POSTGRES_URL should include sslmode=require for production');
  }

  // Validate Redis URL format
  if (!process.env.KV_URL?.startsWith('rediss://')) {
    console.warn('Warning: KV_URL should use secure Redis connection (rediss://)');
  }
}

export function getEnvVar<K extends keyof Env>(key: K): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}
