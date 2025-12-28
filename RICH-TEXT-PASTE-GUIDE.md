# Rich Text Paste Guide - Word/Pages to Sanity CMS

Your Sanity CMS content editor now supports **rich text paste** from Microsoft Word and Mac Pages! When you copy formatted text and paste it into the editor, it will automatically preserve the formatting.

## ✅ Supported Formatting

When you paste from Word or Pages, the following formatting will be preserved:

### Text Styles
- **Bold** (Strong)
- *Italic* (Emphasis)
- <u>Underline</u>
- ~~Strikethrough~~
- `Code` (inline code)

### Headings
- Heading 1 (H1)
- Heading 2 (H2)
- Heading 3 (H3)
- Heading 4 (H4)
- Normal paragraph text

### Lists
- Bulleted lists
- Numbered lists
- Nested lists

### Other
- Blockquotes
- Links (with URLs)
- Line breaks

## 📋 How to Use

### Step 1: Format Your Content
1. Open Microsoft Word or Mac Pages
2. Create your content with formatting:
   - Use **Bold** and *Italic*
   - Add headings (Heading 1, 2, 3, etc.)
   - Create bulleted or numbered lists
   - Add links
   - Use blockquotes if needed

### Step 2: Copy the Content
1. Select all the formatted text
2. Copy it (`Cmd+C` on Mac, `Ctrl+C` on Windows)

### Step 3: Paste in Sanity Studio
1. Go to Sanity Studio: `http://localhost:3000/studio`
2. Open or create a content item
3. Click in the **"Content"** field
4. Paste your content (`Cmd+V` or `Ctrl+V`)

### Step 4: Verify Formatting
- The formatting should appear automatically
- You can see:
  - Bold and italic text
  - Headings at different levels
  - Lists (bulleted or numbered)
  - Links (clickable)
  - Blockquotes

## 🎨 Formatting Toolbar

After pasting, you can use the formatting toolbar to:
- Make text **bold** or *italic*
- Add headings
- Create lists
- Add links
- Format as blockquote

## 💡 Tips

### Best Practices
1. **Clean Up After Pasting**: Sometimes Word/Pages adds extra formatting. Review and clean up if needed.
2. **Use the Toolbar**: After pasting, you can adjust formatting using the editor toolbar.
3. **Test First**: Paste a small sample first to see how it converts.

### What Gets Converted
- ✅ **Bold** → Strong text
- ✅ *Italic* → Emphasis
- ✅ Headings → H1, H2, H3, H4
- ✅ Lists → Bulleted or numbered lists
- ✅ Links → Clickable links
- ✅ Blockquotes → Styled quotes

### What Might Need Manual Adjustment
- Complex tables (may need to recreate)
- Custom fonts (will use default)
- Complex layouts (may need restructuring)
- Embedded images (paste images separately)

## 🔧 Troubleshooting

### Formatting Not Preserved?
1. Make sure you're pasting into the **Content** field (not Excerpt)
2. Try pasting as plain text first, then format manually
3. Check that the text was actually formatted in Word/Pages

### Lists Not Working?
1. Make sure lists are properly formatted in Word/Pages
2. Try creating lists manually in Sanity Studio

### Links Not Working?
1. Links should be automatically detected
2. You can also add links manually using the link button in the toolbar

## 📝 Example

**In Word/Pages:**
```
Heading 1: Introduction
This is a paragraph with bold text and italic text.

• Bullet point 1
• Bullet point 2

1. Numbered item 1
2. Numbered item 2
```

**After Pasting in Sanity:**
- Heading 1 will be styled as H1
- Paragraph with bold and italic preserved
- Bullet list converted to bulleted list
- Numbered list converted to numbered list

## 🚀 Advanced Features

### Custom Formatting
After pasting, you can:
- Add more formatting using the toolbar
- Insert images
- Add YouTube embeds
- Create custom blocks

### Keyboard Shortcuts
- `Cmd/Ctrl + B` - Bold
- `Cmd/Ctrl + I` - Italic
- `Cmd/Ctrl + K` - Add link

Your content editor is now ready to handle rich text paste from Word and Pages! 🎉

