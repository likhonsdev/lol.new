interface Env {
  // AI API Keys
  COHERE_API_KEY: string;
  TOGETHER_API_KEY: string;
  GROQ_API_KEY: string;
  GEMINI_API_KEY: string;

  // Database Configuration
  POSTGRES_URL: string;
  POSTGRES_PRISMA_URL: string;
  POSTGRES_URL_NON_POOLING: string;
  POSTGRES_URL_UNPOOLED: string;
  POSTGRES_URL_NO_SSL: string;
  POSTGRES_HOST: string;
  POSTGRES_HOST_UNPOOLED: string;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_DATABASE: string;
  PGUSER: string;
  PGPASSWORD: string;
  PGDATABASE: string;
  PGHOST: string;
  PGHOST_UNPOOLED: string;

  // Redis/KV Configuration
  KV_URL: string;
  REDIS_URL: string;
  KV_REST_API_URL: string;
  KV_REST_API_TOKEN: string;
  KV_REST_API_READ_ONLY_TOKEN: string;

  // Vercel Blob Storage
  BLOB_READ_WRITE_TOKEN: string;
}
