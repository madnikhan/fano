# Troubleshooting YouTube Embeds

If your YouTube embeds aren't showing up, follow these steps:

## Step 1: Verify the Content Structure in Sanity

1. Go to Sanity Studio: `http://localhost:3000/studio`
2. Open the content item with the YouTube embed
3. Check the "Content" field
4. Make sure you see a block with type "YouTube Embed" (not just text)

## Step 2: Check How You Added the Embed

### ✅ Correct Way:
1. In the Content field, click the **"+"** button
2. Select **"YouTube Embed"** from the block types
3. Paste the YouTube URL in the URL field
4. Save and Publish

### ❌ Wrong Way:
- Don't paste the iframe code directly in a text block
- Don't use the "Embed Code" field (that's for YouTube Post type only)

## Step 3: Verify the Content is Published

1. Make sure the content has **"Published"** checked
2. Click **"Publish"** button
3. Wait a few seconds for the changes to sync

## Step 4: Check the Browser Console

1. Open your website: `http://localhost:3000/content/your-slug`
2. Open browser DevTools (F12)
3. Check the Console tab for any errors
4. Look for messages about YouTube embeds

## Step 5: Verify the URL Format

The YouTube URL should be in one of these formats:
- ✅ `https://www.youtube.com/watch?v=VIDEO_ID`
- ✅ `https://youtu.be/VIDEO_ID`
- ✅ `https://www.youtube.com/embed/VIDEO_ID`

## Step 6: Clear Cache and Restart

1. Stop your dev server (Ctrl+C)
2. Clear browser cache
3. Restart: `npm run dev`
4. Hard refresh the page (Cmd+Shift+R or Ctrl+Shift+R)

## Step 7: Check if Content is Array Format

The content should be an array of blocks. If it's a string, the YouTube embed won't work.

To verify, you can temporarily add this to see what's being received:
- Check the browser console for content structure logs

## Common Issues

### Issue: "YouTube embed missing URL"
**Solution**: Make sure you pasted the URL in the "YouTube Embed" block, not in a text field.

### Issue: Video shows as invalid URL
**Solution**: Check that the URL is a valid YouTube URL format.

### Issue: Nothing shows up at all
**Solution**: 
1. Make sure you selected "YouTube Embed" block type (not just text)
2. Verify the content is published
3. Check browser console for errors

## Still Not Working?

1. Check that `@portabletext/react` is installed: `npm list @portabletext/react`
2. Verify the PortableText component is being used in the content page
3. Make sure the Sanity query is fetching the full content array (not converting it to string)

