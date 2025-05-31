---
layout: post
title: "A Comprehensive Guide to Using This Jekyll Blog with Front Matter CMS and Markdown"
date: 2025-05-30 10:00:00 -0400
categories: [documentation, jekyll, frontmatter, markdown, vscode]
journal_text: "A comprehensive guide to using this blog's setup with Jekyll, Front Matter CMS, and Markdown in VS Code."
type: note
---

Welcome to your Jekyll-powered blog, enhanced with Front Matter CMS for a streamlined content creation experience within Visual Studio Code! This guide will walk you through everything you need to know to create, manage, and publish posts using Jekyll, Front Matter CMS, and Markdown.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [1. Understanding the Tools](#1-understanding-the-tools)
  - [Jekyll](#jekyll)
  - [Front Matter CMS](#front-matter-cms)
  - [Markdown](#markdown)
  - [Visual Studio Code (VS Code)](#visual-studio-code-vs-code)
- [2. Jekyll Basics](#2-jekyll-basics)
  - [Project Structure](#project-structure)
  - [Creating Posts](#creating-posts)
  - [Essential Front Matter](#essential-front-matter)
  - [Running the Blog Locally](#running-the-blog-locally)
- [3. Using Front Matter CMS in VS Code](#3-using-front-matter-cms-in-vs-code)
  - [Opening the Front Matter Panel](#opening-the-front-matter-panel)
  - [The Dashboard](#the-dashboard)
  - [Creating and Managing Content](#creating-and-managing-content)
  - [Editing Front Matter](#editing-front-matter)
  - [Media Management](#media-management)
  - [Previewing Content](#previewing-content)
  - [Git Integration](#git-integration)
- [4. Markdown Essentials](#4-markdown-essentials)
  - [Headers](#headers)
  - [Text Formatting](#text-formatting)
  - [Lists (Unordered and Ordered)](#lists-unordered-and-ordered)
  - [Links](#links)
  - [Images](#images)
  - [Code Blocks](#code-blocks)
  - [Blockquotes](#blockquotes)
  - [Horizontal Rules](#horizontal-rules)
- [5. Your Content Creation Workflow](#5-your-content-creation-workflow)
- [6. Conclusion](#6-conclusion)

## 1. Understanding the Tools

### Jekyll

Jekyll is a simple, blog-aware, static site generator. It takes your content (written in Markdown), applies layouts, and generates a complete, static website ready to be served. This blog uses Jekyll to build and structure its pages.

### Front Matter CMS

Front Matter CMS is a powerful headless Content Management System that runs directly within VS Code. It simplifies managing your Markdown-based content by providing a user interface for front matter, content creation, media management, and more, without needing an external database or service. This blog is configured to use Front Matter CMS (see `frontmatter.json`).

### Markdown

Markdown is a lightweight markup language with plain-text formatting syntax. It's designed to be easy to read and write, and it converts easily to HTML. All your blog posts will be written in Markdown.

### Visual Studio Code (VS Code)

VS Code is a popular, free source code editor. With extensions like Front Matter CMS, it becomes a powerful environment for managing and writing your blog content.

## 2. Jekyll Basics

### Project Structure

Familiarize yourself with these key directories:

- `_posts/`: This is where your blog post files (Markdown) reside.
- `_layouts/`: HTML templates that define the structure of your pages and posts (e.g., `default.html`, `post.html`).
- `_includes/`: Reusable HTML snippets that can be included in layouts or posts.
- `assets/`: A common directory for assets like CSS and JavaScript. For this blog, `assets/images/` is specifically configured for media storage (see `frontmatter.json`).
- `_config.yml`: The main Jekyll configuration file. Contains site-wide settings.
- `Gemfile`: Manages Ruby gems (dependencies) for your Jekyll site, including Jekyll itself.

### Creating Posts

Posts are Markdown files (`.md`) located in the `_posts` directory. They must follow a specific naming convention:
`YYYY-MM-DD-your-post-title.md`
Example: `2025-05-30-my-first-post.md`

The date in the filename is the publication date.

### Essential Front Matter

Each post file begins with a "front matter" block, written in YAML, enclosed by triple-dashed lines (`---`). This block contains metadata for the post. Key fields for this blog include:

```yaml
---
layout: post
title: "Your Amazing Post Title"
date: YYYY-MM-DD HH:MM:SS +/-TTTT 
# Example: 2025-05-30 10:00:00 -0400
categories: [category1, category2] # Helps organize posts
tags: [tag1, tag2] # Optional, for more granular organization
# Journal-specific front matter for this theme:
journal_text: "A short, catchy description for the homepage bullet list."
type: note # Determines the bullet symbol (e.g., note: —, task: •, image: special photo display)
# For image posts:
# image_url: /assets/images/your-image.jpg
# image_alt: "Description of your image"
# post_only: true # If true, might only appear as a post, not in other listings (theme-dependent)
---
```

- `layout`: Specifies which layout from `_layouts/` to use (usually `post`).
- `title`: The title of your post.
- `date`: The publication date and time.
- `categories`: A list of categories for the post.
- `journal_text`: A short summary displayed on the homepage list.
- `type`: Affects how the post is displayed in lists (e.g., `note`, `task`, `image`).

Front Matter CMS will help you manage these fields easily.

### Running the Blog Locally

To preview your blog as you make changes:

1. Open your terminal in the blog's root directory.
2. Ensure you have Ruby and Bundler installed.
3. Run `bundle install` once to install dependencies from the `Gemfile`.
4. Start the Jekyll server: `bundle exec jekyll serve`
5. Open your browser to `http://localhost:4000` (as specified in `frontmatter.json`).

Jekyll will watch for changes and automatically rebuild your site.

## 3. Using Front Matter CMS in VS Code

Front Matter CMS is integrated into your VS Code environment, making content management seamless.

### Opening the Front Matter Panel

1. Ensure you have the "Front Matter" extension installed in VS Code.
2. Open your blog project in VS Code.
3. You should see a Front Matter icon in the VS Code activity bar (usually on the left). Click it to open the panel.

### The Dashboard

The Front Matter dashboard provides an overview of your content, recent activities, and quick actions like creating new posts.

### Creating and Managing Content

- **Create New Post**: Use the "Create Content" button in the Front Matter panel. It will prompt you for a title, and Front Matter will create the correctly named Markdown file in `_posts/` with pre-filled front matter based on your content type settings (see `frontmatter.json`).
- **View Posts**: The panel lists all your posts, allowing you to easily open and edit them.

### Editing Front Matter

When you open a Markdown post, Front Matter CMS provides a UI to edit its front matter fields.

- Click on a post in the Front Matter panel.
- The editor will open the Markdown file.
- The Front Matter panel will display the metadata fields for that post. You can edit them directly in the UI, and the changes will be saved to the YAML block in the file.
- This is especially helpful for fields like `date`, `categories`, `tags`, and the custom `journal_text` and `type`.

### Media Management

- The `frontmatter.json` file configures `assets/images` as the selected folder for media.
- **Uploading Images**: You can drag and drop images into the Front Matter panel's media section or use the upload functionality. Front Matter CMS will place the image in the configured folder (`assets/images/`) and can help you insert the Markdown for the image into your post.
- **Image Paths**: When linking images, use paths relative to your site root, specifically starting with `/assets/images/` for this blog's setup (e.g., `/assets/images/my-photo.jpg`).

### Previewing Content

Front Matter CMS often provides a preview command or integrates with Jekyll's server.

- Start your Jekyll server (`bundle exec jekyll serve`).
- Front Matter CMS might have a "Open in Browser" or "Preview" button that opens the current post or the site at `http://localhost:4000`.

### Git Integration

Since `frontMatter.git.enabled` is `true` in your `frontmatter.json`, Front Matter CMS integrates with Git.

- You can see Git status indicators.
- You might be able to commit changes directly through the Front Matter UI or use VS Code's built-in Git features.

## 4. Markdown Essentials

Markdown is used for writing the body of your posts. Here are the basics:

### Headers

```markdown
# Header 1 (Largest)
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6 (Smallest)
```

### Text Formatting

- **Bold**: `**bold text**` or `__bold text__`
- *Italic*: `*italic text*` or `_italic text_`
- ***Bold and Italic***: `***bold and italic***`
- ~~Strikethrough~~: `~~strikethrough text~~`
- `Inline code`: `` `code snippet` ``

### Lists (Unordered and Ordered)

**Unordered List:**

```markdown
- Item 1
- Item 2
  - Sub-item 2.1
  - Sub-item 2.2
* Another item
+ Yet another item
```

**Ordered List:**

```markdown
1. First item
2. Second item
   1. Nested item
3. Third item
```

### Links

```markdown
[Link text](https://www.example.com "Optional link title")
```

Example: `[Visit Google](https://www.google.com)`

### Images

```markdown
![Alt text for image](/assets/images/your-image.jpg "Optional image title")
```

Example: `![A cute cat](/assets/images/cat.jpg "My Cat")`
Remember to place your images in the `assets/images/` directory.

### Code Blocks

For multi-line code snippets, use triple backticks. You can specify the language for syntax highlighting:

**Generic Code Block:**

```code
function greet() {
  console.log("Hello!");
}
```

**Language-Specific (e.g., JavaScript):**

```javascript
function greet() {
  console.log("Hello, JavaScript!");
}
```

### Blockquotes

```markdown
> This is a blockquote.
> It can span multiple lines.
```

### Horizontal Rules

To create a thematic break or horizontal line:

```markdown
---
***
___
```

## 5. Your Content Creation Workflow

Here’s a typical workflow:

1. **Open Project**: Launch VS Code and open your blog project folder.
2. **Open Front Matter Panel**: Access the Front Matter CMS tools.
3. **Create Post**:
    - Click "Create Content" in the Front Matter panel.
    - Enter a title for your new post.
4. **Edit Front Matter**:
    - The new Markdown file will open.
    - Use the Front Matter UI to fill in or adjust `layout`, `date`, `categories`, `journal_text`, `type`, etc.
5. **Write Content**: Write your post content in the Markdown editor using the syntax described above.
6. **Add Media**:
    - If you have images, drag them into the Front Matter media library or upload them.
    - Insert the images into your post using the Markdown image syntax, ensuring correct paths (e.g., `/assets/images/your-image.png`).
7. **Preview**:
    - Start the Jekyll server if it's not already running: `bundle exec jekyll serve`.
    - Use Front Matter CMS's preview feature or navigate to `http://localhost:4000` to see your post live.
8. **Review and Iterate**: Check for typos, formatting issues, and broken links. Make edits as needed.
9. **Commit Changes**: Once satisfied, commit your changes using VS Code's Git integration or the terminal:

    ```bash
    git add .
    git commit -m "Added new post: [Your Post Title]"
    git push
    ```

    (This assumes your blog is hosted somewhere like GitHub Pages and deployed via Git).

## 6. Conclusion

You now have a solid understanding of how to use Jekyll, Front Matter CMS, and Markdown to manage and grow your blog directly from VS Code. This setup offers a powerful yet straightforward way to focus on your content.

Explore the features of Front Matter CMS further, experiment with Markdown, and enjoy the process of sharing your thoughts and ideas! If you have questions, refer to the official documentation for [Jekyll](https://jekyllrb.com/docs/), [Front Matter CMS](https://frontmatter.codes/docs), and [Markdown](https://www.markdownguide.org/basic-syntax/).

Happy blogging!
