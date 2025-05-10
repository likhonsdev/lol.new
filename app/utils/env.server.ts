function validateEnv() {
  const requiredEnvVars = [
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
    'POSTGRES_URL_NON_POOLING',
    'POSTGRES_URL_UNPOOLED',
    'POSTGRES_URL_NO_SSL',
    
    // Redis/KV
    'KV_URL',
    'KV_REST_API_URL',
    'KV_REST_API_TOKEN',
    'KV_REST_API_READ_ONLY_TOKEN',
    
    // Vercel Blob Storage
    'BLOB_READ_WRITE_TOKEN',
  ] as const;

  const missingEnvVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar] && !getCloudflareEnv()[envVar]
  );

  if (missingEnvVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingEnvVars.join(', ')}`
    );
  }

  // Validate Database URLs
  if (!process.env.POSTGRES_URL?.includes('sslmode=require')) {
    console.warn('Warning: POSTGRES_URL should include sslmode=require for production');
  }

  // Validate Redis/KV URL format
  if (!process.env.KV_URL?.startsWith('rediss://')) {
    console.warn('Warning: KV_URL should use secure Redis connection (rediss://)');
  }
}

function getCloudflareEnv(): Partial<Env> {
  if (typeof process === 'undefined') return {};
  return (process.env as any).CLOUDFLARE_ENV || {};
}

export function getEnvVar(key: keyof Env): string {
  const value = process.env[key] || getCloudflareEnv()[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export { validateEnv };
