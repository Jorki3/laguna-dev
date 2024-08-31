/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
  readonly SUPABASE_OAUTH_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
