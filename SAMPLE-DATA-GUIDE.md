# Quick Start: Add Sample Data to See Your Website

The easiest way to see your website with content is to add sample data directly in Sanity Studio.

## Step 1: Start Your Development Server

```bash
npm run dev
```

## Step 2: Open Sanity Studio

Go to: **http://localhost:3000/studio**

## Step 3: Add Sample Data

### First, Create Authors (3 authors)

1. Click **"Author"** in the left sidebar
2. Click **"Create new"**
3. Add:
   - **Name**: Sarah Johnson
   - **Slug**: sarah-johnson (auto-generated)
   - **Bio**: Award-winning journalist with 10+ years of experience
4. Click **"Publish"**
5. Repeat for:
   - **Michael Chen** - Tech enthusiast and blogger
   - **Emily Rodriguez** - Community manager

### Then, Create Categories (4 categories)

1. Click **"Category"** in the left sidebar
2. Create:
   - **Technology** (slug: technology, color: blue)
   - **Business** (slug: business, color: green)
   - **Lifestyle** (slug: lifestyle, color: purple)
   - **News** (slug: news, color: red)

### Finally, Create Content

1. Click **"Content"** in the left sidebar
2. Create a **Featured Article**:
   - **Title**: The Future of Artificial Intelligence: What to Expect in 2025
   - **Slug**: future-of-artificial-intelligence-2025
   - **Type**: Article
   - **Excerpt**: Explore the cutting-edge developments in AI technology
   - **Content**: Add some paragraphs about AI
   - **Author**: Select Sarah Johnson
   - **Category**: Select Technology
   - **Tags**: AI, Technology, Future
   - **Published**: ✅ Check this
   - **Featured**: ✅ Check this
   - Click **"Publish"**

3. Create a **News Article**:
   - **Title**: Tech Giants Announce Major Sustainability Initiative
   - **Type**: News
   - **Excerpt**: Leading technology companies join forces
   - **Author**: Sarah Johnson
   - **Category**: News
   - **Published**: ✅
   - Click **"Publish"**

4. Create a **Blog Post**:
   - **Title**: 10 Tips for Building a Successful Online Community
   - **Type**: Blog
   - **Excerpt**: Learn essential strategies
   - **Author**: Emily Rodriguez
   - **Category**: Lifestyle
   - **Published**: ✅
   - Click **"Publish"**

## Step 4: View Your Website

Go to: **http://localhost:3000**

You should now see:
- Featured article in the hero section
- News articles in the "Latest News" section
- Blog posts in the "Recent Articles" section
- All content organized by category

## Quick Tips

- **Add Featured Images**: Click on the image field and upload or use an image URL
- **Rich Content**: Use the content editor to add formatted text, headings, and more
- **Social Media Posts**: Create content with type "Facebook", "YouTube", or "Twitter" to see social media embeds

## Need More Content?

Just keep creating more content in Sanity Studio! All published content will automatically appear on your website.

