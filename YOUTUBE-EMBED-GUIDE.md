# How to Embed YouTube Videos in Sanity CMS

There are **two ways** to embed YouTube videos in your Sanity CMS:

## Method 1: Create a YouTube Post (Recommended for Social Media Content)

This is best for standalone YouTube videos that you want to feature as social media posts.

### Steps:

1. **Go to Sanity Studio**: `http://localhost:3000/studio`

2. **Click "Content"** in the left sidebar

3. **Click "Create new"**

4. **Fill in the form**:
   - **Title**: Give your video a title (e.g., "Product Demo Video")
   - **Type**: Select **"YouTube Post"**
   - **Slug**: Auto-generated from title
   - **Excerpt**: Brief description of the video
   - **Content**: Add any additional text about the video

5. **YouTube-Specific Fields** (these appear when you select "YouTube Post"):
   - **Platform**: Select **"YouTube"**
   - **Social Media URL**: Paste the YouTube video URL
     - Example: `https://www.youtube.com/watch?v=VIDEO_ID`
   - **Embed Code**: Paste the YouTube embed iframe code
     - Get it from YouTube: Click "Share" → "Embed" → Copy the iframe code
     - Example:
       ```html
       <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       ```

6. **Fill other fields**:
   - **Author**: Select an author
   - **Category**: Select a category
   - **Tags**: Add relevant tags
   - **Published**: ✅ Check to publish
   - **Featured**: Optional - check if you want it featured

7. **Click "Publish"**

## Method 2: Embed YouTube in Regular Content (Articles, Blogs, etc.) ✨ NEW!

You can now embed YouTube videos directly in articles, blogs, or news posts! This is perfect for adding videos within your content.

### Steps:

1. **Create or edit any content** (Article, Blog, News, etc.)

2. **In the "Content" field**, click the **"+"** button to add a new block

3. **Select "YouTube Embed"** from the block types

4. **Paste the YouTube URL**:
   - Just paste the YouTube video URL (e.g., `https://www.youtube.com/watch?v=VIDEO_ID`)
   - The system will automatically convert it to an embed
   - Optionally add a caption below the video

5. **Continue writing** your content around the video

6. **Publish** your content

### Example:
- Write some text
- Add a YouTube embed block
- Write more text after the video
- The video will appear inline with your content!

## How to Get YouTube Embed Code

1. Go to the YouTube video you want to embed
2. Click the **"Share"** button below the video
3. Click **"Embed"**
4. Copy the iframe code provided
5. Paste it into the **"Embed Code"** field in Sanity

### Example YouTube Embed Code:
```html
<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>
```

## Quick YouTube URL to Embed Conversion

If you have a YouTube URL like:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`

Convert it to embed format:
- `https://www.youtube.com/embed/VIDEO_ID`

## Tips

- **Responsive Videos**: The embed code will automatically be responsive on your website
- **Video Thumbnails**: You can add a featured image that will show as a thumbnail
- **Multiple Videos**: You can create multiple YouTube posts for different videos
- **Categories**: Organize YouTube videos by category (e.g., "Tutorials", "Product Demos")

## Where Videos Appear on Your Website

- **YouTube Posts** appear in:
  - The main content feed
  - Category pages (if you filter by "Social Media")
  - Individual video pages at `/content/video-slug`

- **Embedded Videos** in articles appear:
  - Within the article content
  - On the article detail page

## Need Help?

If you need to embed videos in regular content fields (not just YouTube posts), we can enhance the schema to support that. Let me know!

