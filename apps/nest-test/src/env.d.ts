/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DB_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
