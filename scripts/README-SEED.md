# Seeding Sample Data

To seed sample data into your Sanity project, you need a Sanity API token with write permissions.

## Option 1: Get a Sanity API Token (Recommended)

1. Go to your Sanity project: https://www.sanity.io/manage/project/mrz8n8yd
2. Navigate to **API** → **Tokens**
3. Click **Add API token**
4. Give it a name (e.g., "Seed Script")
5. Set permissions to **Editor** (or **Admin** for full access)
6. Copy the token
7. Add it to your `.env.local` file:
   ```env
   SANITY_API_TOKEN=your_token_here
   ```
8. Run the seed script:
   ```bash
   npm run seed
   ```

## Option 2: Add Data Manually in Sanity Studio

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Open Sanity Studio:
   - Go to http://localhost:3000/studio

3. Create the following in order:
   - **Authors** (create 3 authors)
   - **Categories** (create 4 categories)
   - **Content** (create multiple content pieces)

## Sample Data Structure

### Authors
- Sarah Johnson - Award-winning journalist
- Michael Chen - Tech enthusiast and blogger
- Emily Rodriguez - Community manager

### Categories
- Technology (blue)
- Business (green)
- Lifestyle (purple)
- News (red)

### Content
- 1 Featured Article (AI Future)
- 2 News Articles
- 2 Blog Posts
- 1 Update
- 2 Social Media Posts

