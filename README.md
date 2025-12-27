# FANO - Premium Content Management Platform

A state-of-the-art content management website built with Next.js 14, Sanity.io CMS, Firebase, and Cloudinary. Inspired by premium news sites like Wall Street Journal, The Sun, and The Guardian.

## 🚀 Technology Stack

| Layer | Technology | Purpose | Free Tier |
|-------|-----------|---------|-----------|
| Frontend | Next.js 14 + React 18 | SSR, ISR, Fast performance | ✅ Unlimited |
| CMS | Sanity.io | Content management | ✅ 100K API calls |
| Database | Firebase Firestore | User data, comments, likes | ✅ 1GB storage |
| Authentication | Firebase Auth | User management | ✅ 50K users |
| Media Storage | Cloudinary | Image optimization | ✅ 25GB bandwidth |
| Embed Storage | Pinterest/YouTube | External media hosting | ✅ Unlimited |
| Deployment | Vercel | Hosting & CDN | ✅ 100GB bandwidth |
| Styling | Tailwind CSS | Utility-first CSS | ✅ Open source |
| Type Safety | TypeScript | Static typing | ✅ Open source |
| Analytics | Google Analytics | Traffic monitoring | ✅ Free tier |

## ✨ Features

- 📝 **Multiple Content Types**: Articles, Blogs, News, Updates, and Social Media Posts (Facebook, YouTube, Twitter)
- 🎨 **Modern Design**: Beautiful, responsive UI with premium news site aesthetics
- 🖼️ **Image Optimization**: Automatic image optimization with Cloudinary
- 📊 **Sanity Studio**: Professional CMS interface at `/studio`
- 🔐 **Firebase Integration**: User authentication and real-time data
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- 🚀 **Fast**: Built with Next.js 14 for optimal performance
- 📈 **Analytics**: Google Analytics integration
- 🎯 **SEO Friendly**: Optimized for search engines

## 📋 Prerequisites

- Node.js 18+ installed
- A Firebase project set up
- A Sanity.io project set up
- A Cloudinary account
- Google Analytics account (optional)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd fano
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or use an existing one
   - Enable Firestore Database
   - Enable Firebase Authentication
   - Get your Firebase configuration

4. **Set up Sanity.io**
   - Go to [Sanity.io](https://www.sanity.io/)
   - Create a new project
   - Get your Project ID and Dataset name
   - Run `npm run sanity` to start Sanity Studio locally

5. **Set up Cloudinary**
   - Go to [Cloudinary](https://cloudinary.com/)
   - Create a free account
   - Get your Cloud Name, API Key, and API Secret

6. **Set up Google Analytics** (Optional)
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a property
   - Get your Measurement ID (G-XXXXXXXXXX)

7. **Configure environment variables**

   Update `.env.local` with your credentials:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Sanity.io Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production

   # Cloudinary Configuration
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret

   # Google Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

8. **Set up Firestore Security Rules**

   For development, you can use these rules (update for production):
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /content/{document=**} {
         allow read: if true;
         allow write: if request.auth != null;
       }
     }
   }
   ```

9. **Run the development server**
   ```bash
   npm run dev
   ```

10. **Open Sanity Studio** (in a new terminal)
    ```bash
    npm run sanity
    ```

11. **Open your browser**
    - Main site: [http://localhost:3000](http://localhost:3000)
    - Sanity Studio: [http://localhost:3333](http://localhost:3333)

## 📁 Project Structure

```
fano/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── upload/        # Cloudinary upload endpoint
│   ├── category/          # Category pages
│   ├── content/           # Content detail pages
│   ├── studio/            # Sanity Studio
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ArticleCard.tsx   # Article card component
│   ├── CloudinaryImage.tsx # Optimized image component
│   ├── Footer.tsx         # Footer component
│   ├── GoogleAnalytics.tsx # Analytics component
│   ├── Header.tsx         # Header/Navigation
│   └── HeroSection.tsx   # Hero section component
├── lib/                   # Utility functions
│   ├── cloudinary.ts     # Cloudinary configuration
│   ├── content-sanity.ts # Sanity content queries
│   ├── firebase.ts       # Firebase configuration
│   └── sanity.ts         # Sanity client & queries
├── sanity/                # Sanity configuration
│   └── schemas/          # Content schemas
│       ├── author.ts     # Author schema
│       ├── category.ts  # Category schema
│       └── contentType.ts # Content schema
└── types/                 # TypeScript types
    └── content.ts        # Content type definitions
```

## 🎯 Usage

### Creating Content with Sanity Studio

1. Navigate to `http://localhost:3333` (Sanity Studio)
2. Click "Create new" → "Content"
3. Fill in the form:
   - Select content type (Article, Blog, News, Update, or Social Media)
   - Enter title, content, and other details
   - Upload featured image (automatically optimized with Cloudinary)
   - Set category and tags
   - Choose publish status and featured flag
4. Click "Publish"

### Viewing Content

- **Homepage**: `/` - Shows featured content and recent posts
- **Category Pages**: `/category/[slug]` - Filter by category
- **Content Detail**: `/content/[slug]` - View full post
- **Sanity Studio**: `/studio` - Content management interface

## 📝 Content Types

- **Article**: Long-form articles and editorials
- **Blog**: Blog posts and personal updates
- **News**: News articles and breaking news
- **Update**: Community updates and announcements
- **Facebook**: Facebook post embeds
- **YouTube**: YouTube video embeds
- **Twitter**: Twitter post embeds

## 🎨 Customization

### Styling

The project uses Tailwind CSS. You can customize:
- Colors in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Component styles in individual component files

### Sanity Schemas

Update content schemas in `sanity/schemas/`:
- `contentType.ts` - Main content schema
- `category.ts` - Category schema
- `author.ts` - Author schema

### Categories

Update categories in `components/Header.tsx`:
```typescript
const categories = [
  { name: 'News', slug: 'news' },
  // Add your categories here
];
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables
4. Deploy!

### Sanity Studio Deployment

Deploy Sanity Studio separately:
```bash
npm run sanity deploy
```

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔒 Security Considerations

- **Firestore Rules**: Update security rules for production
- **Sanity Tokens**: Use environment variables for Sanity tokens
- **Cloudinary**: Secure your API keys
- **Environment Variables**: Never commit `.env.local` to version control
- **Authentication**: Implement Firebase Auth for user access

## 📊 Analytics

Google Analytics is integrated and will automatically track:
- Page views
- User interactions
- Traffic sources
- User demographics

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] Comments system with Firebase
- [ ] Rich text editor enhancements
- [ ] Search functionality
- [ ] Newsletter subscription
- [ ] Social sharing buttons
- [ ] Advanced analytics dashboard
- [ ] SEO optimization
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Progressive Web App (PWA)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Support

For issues and questions, please open an issue on GitHub.

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using Next.js 14, Sanity.io, Firebase, and Cloudinary
