# Fixing Sanity Studio CORS Error

If you're seeing a CORS error when accessing Sanity Studio, follow these steps:

## Step 1: Configure CORS in Sanity Project Settings

1. Go to your Sanity project dashboard:
   https://www.sanity.io/manage/project/mrz8n8yd

2. Navigate to **API** → **CORS origins**

3. Click **Add CORS origin**

4. Add the following origins:
   - `http://localhost:3000`
   - `http://localhost:3333` (if using standalone Sanity Studio)
   - `http://127.0.0.1:3000`
   - `http://127.0.0.1:3333`

5. For each origin, make sure:
   - ✅ **Allow credentials** is checked
   - ✅ **Allow extensions** is checked (if available)

6. Click **Save**

## Step 2: Verify Environment Variables

Make sure your `.env.local` has:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=mrz8n8yd
NEXT_PUBLIC_SANITY_DATASET=production
```

## Step 3: Restart Your Dev Server

After updating CORS settings:
```bash
# Stop your current server (Ctrl+C)
npm run dev
```

## Step 4: Clear Browser Cache

Sometimes browsers cache CORS errors. Try:
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux)
- Or open in incognito/private mode

## Alternative: Use Standalone Sanity Studio

If the embedded studio still has issues, you can run Sanity Studio separately:

```bash
npm run sanity
```

Then access it at: `http://localhost:3333`

## Still Having Issues?

1. Check that your Sanity project ID is correct
2. Verify you're logged into Sanity CLI: `npx sanity login`
3. Check browser console for specific error messages
4. Ensure your Sanity project is not in a restricted organization

