import { defineCliConfig } from 'sanity/cli';

// Hardcode the project ID since we know it
// This ensures Sanity CLI works even if env vars aren't loaded
export default defineCliConfig({
  api: {
    projectId: 'mrz8n8yd',
    dataset: 'production',
  },
});
