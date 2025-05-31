---
layout: post
title: "Markdown Test: Jekyll Features and Liquid Templates"
date: 2025-05-28 20:00:00 -0400
categories: [test, markdown, jekyll, liquid]
tags: [static-site, templating, frontmatter, showcase]
author: Test Author
excerpt: "Testing Jekyll-specific features, Liquid templating, and advanced frontmatter options"
image: /assets/android-chrome-144x144.png
featured: true
comments: true
toc: true

# Custom frontmatter variables
difficulty: intermediate
reading_time: 15
last_modified_at: 2025-05-28 20:30:00 -0400
series: "Markdown Testing Series"
part: 5

# Journal-specific front matter
journal_text: "Testing Jekyll and Liquid template features in Markdown"
type: test

# SEO and social media
description: "Comprehensive test of Jekyll features, Liquid templating, and Markdown integration"
keywords: [jekyll, liquid, markdown, static-site-generator, templating]
og_image: /assets/android-chrome-144x144.png
twitter_card: summary_large_image
---

<!-- This post tests Jekyll-specific features and Liquid templating -->

## Jekyll Frontmatter Features

This post demonstrates various Jekyll frontmatter variables and how they can be used:

- **Title**: {{ page.title }}
- **Date**: {{ page.date | date: "%B %d, %Y at %I:%M %p" }}
- **Categories**: {{ page.categories | join: ", " }}
- **Tags**: {{ page.tags | join: " • " }}
- **Author**: {{ page.author }}
- **Reading Time**: {{ page.reading_time }} minutes
- **Series**: {{ page.series }}, Part {{ page.part }}

{% if page.featured %}
<div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0;">
  <strong>⭐ Featured Post:</strong> This post is marked as featured content.
</div>
{% endif %}

## Liquid Template Examples

### Basic Liquid Tags

Current time: {{ "now" | date: "%Y-%m-%d %H:%M:%S" }}

Site information:
- Site title: {{ site.title }}
- Site description: {{ site.description }}
- Total posts: {{ site.posts | size }}

### Conditional Logic

{% if page.difficulty == "beginner" %}
📚 **Difficulty**: Beginner - Perfect for getting started!
{% elsif page.difficulty == "intermediate" %}
🎯 **Difficulty**: Intermediate - Some experience recommended.
{% elsif page.difficulty == "advanced" %}
🚀 **Difficulty**: Advanced - For experienced users.
{% else %}
❓ **Difficulty**: Not specified
{% endif %}

### Loops and Iteration

{% assign related_posts = site.posts | where: "categories", "test" | limit: 3 %}
{% if related_posts.size > 0 %}
#### Related Test Posts:
{% for post in related_posts %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%B %d, %Y" }}
{% endfor %}
{% endif %}

### String Manipulation

Original title: "{{ page.title }}"
- Upcase: {{ page.title | upcase }}
- Downcase: {{ page.title | downcase }}
- Truncate: {{ page.title | truncate: 20 }}
- Replace: {{ page.title | replace: "Test", "Demo" }}
- Slugify: {{ page.title | slugify }}

### Array Operations

Categories as array:
{% assign cats = page.categories %}
- First category: {{ cats.first }}
- Last category: {{ cats.last }}
- Array size: {{ cats.size }}
- Joined: {{ cats | join: " → " }}

### Number Formatting

{% assign number = 1234.5678 %}
- Original: {{ number }}
- Rounded: {{ number | round }}
- Rounded to 2 places: {{ number | round: 2 }}
- Plus 100: {{ number | plus: 100 }}
- Times 2: {{ number | times: 2 }}

### Date Formatting

{% assign post_date = page.date %}
- ISO format: {{ post_date | date: "%Y-%m-%d" }}
- Long format: {{ post_date | date: "%A, %B %d, %Y" }}
- Short format: {{ post_date | date: "%m/%d/%y" }}
- Time format: {{ post_date | date: "%I:%M %p" }}
- Custom: {{ post_date | date: "Published on %B %e, %Y" }}

## Jekyll Includes and Layouts

### Simulated Include

<!-- In a real Jekyll site, you might have an include like this: -->
<!-- { % include callout.html type="info" content="This is an info callout" % } -->
<!-- (Remove spaces around % to use) -->

<div class="callout callout-info">
  <strong>ℹ️ Info:</strong> This simulates what an include might look like.
</div>

### Layout Variables

This post uses the `{{ page.layout }}` layout.

{% if layout.name %}
Layout name: {{ layout.name }}
{% endif %}

## Advanced Liquid Features

### Capture and Assign

{% capture current_year %}{{ "now" | date: "%Y" }}{% endcapture %}
{% assign copyright_year = current_year | minus: 0 %}

Copyright notice: © {{ copyright_year }} Test Blog

### Where and Map Filters

{% assign test_posts = site.posts | where: "categories", "test" %}
Number of test posts: {{ test_posts | size }}

{% assign all_post_titles = site.posts | map: "title" %}
{% assign post_titles = all_post_titles | slice: 0, 5 %}
Recent post titles:
{% for title in post_titles %}
- {{ title }}
{% endfor %}

### Group By

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year_group in posts_by_year limit: 2 %}
**{{ year_group.name }}** ({{ year_group.items | size }} posts)
{% for post in year_group.items limit: 3 %}
  - {{ post.title }}
{% endfor %}
{% endfor %}

### Complex Conditionals

{% assign is_recent = false %}
{% assign days_old = "now" | date: "%s" | minus: page.date | divided_by: 86400 %}
{% if days_old < 7 %}
  {% assign is_recent = true %}
{% endif %}

{% if is_recent %}
🆕 **New Post**: This was published {{ days_old }} day{% if days_old != 1 %}s{% endif %} ago!
{% else %}
📅 **Archive**: This post is {{ days_old }} days old.
{% endif %}

## Jekyll Data Files

<!-- In a real site, you might have data files like _data/features.yml -->

### Simulated Data Usage

{% assign features = site.data.features %}
{% if features %}
Available features:
{% for feature in features %}
- **{{ feature.name }}**: {{ feature.description }}
{% endfor %}
{% else %}
*No features data available*
{% endif %}

## Jekyll Collections

{% if site.collections %}
### Available Collections:
{% for collection in site.collections %}
- **{{ collection.label }}**: {{ collection.docs | size }} documents
{% endfor %}
{% endif %}

## Jekyll Plugins and Extensions

### Syntax Highlighting with Rouge

```ruby
# Jekyll configuration example
module Jekyll
  class CustomTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup.strip
    end

    def render(context)
      site = context.registers[:site]
      page = context.registers[:page]
      
      case @markup
      when 'reading_time'
        content = page['content']
        words = content.split.size
        reading_time = (words / 200.0).ceil
        "#{reading_time} min read"
      when 'post_count'
        site.posts.docs.size.to_s
      else
        "Unknown tag: #{@markup}"
      end
    end
  end
end

Liquid::Template.register_tag('custom', Jekyll::CustomTag)
```

### SEO and Meta Tags

<!-- These would typically be in the head of your layout -->

```html
<!-- SEO Meta Tags -->
<meta name="description" content="{{ page.description | default: site.description }}">
<meta name="keywords" content="{{ page.keywords | join: ', ' }}">
<meta name="author" content="{{ page.author | default: site.author }}">

<!-- Open Graph -->
<meta property="og:title" content="{{ page.title | default: site.title }}">
<meta property="og:description" content="{{ page.excerpt | default: site.description }}">
<meta property="og:image" content="{{ page.og_image | default: '/assets/default-og-image.png' | absolute_url }}">
<meta property="og:url" content="{{ page.url | absolute_url }}">

<!-- Twitter Card -->
<meta name="twitter:card" content="{{ page.twitter_card | default: 'summary' }}">
<meta name="twitter:title" content="{{ page.title | default: site.title }}">
<meta name="twitter:description" content="{{ page.excerpt | default: site.description }}">
```

## Performance and Optimization

### Lazy Loading Images

{% for image in page.images %}
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
     data-src="{{ image.src }}" 
     alt="{{ image.alt }}" 
     loading="lazy"
     class="lazy-load">
{% endfor %}

### Minification and Compression

```liquid
{% comment %}
In production, Jekyll can minify HTML, CSS, and JS:
{% endcomment %}

{% if jekyll.environment == "production" %}
  {% assign css_files = site.static_files | where: "extname", ".css" %}
  {% for file in css_files %}
    <link rel="stylesheet" href="{{ file.path | relative_url }}">
  {% endfor %}
{% else %}
  <link rel="stylesheet" href="{{ '/assets/main.css' | relative_url }}">
{% endif %}
```

## Jekyll Hooks and Plugins

### Custom Filters

```ruby
# _plugins/custom_filters.rb
module Jekyll
  module CustomFilters
    def reading_time(content)
      words = content.split.size
      (words / 200.0).ceil
    end

    def excerpt_length(text, length = 100)
      if text.length > length
        text[0...length] + "..."
      else
        text
      end
    end

    def post_by_category(posts, category)
      posts.select { |post| post.data['categories'].include?(category) }
    end
  end
end

Liquid::Template.register_filter(Jekyll::CustomFilters)
```

Usage in templates:
```liquid
Reading time: {{ content | reading_time }} minutes
Short excerpt: {{ post.excerpt | excerpt_length: 50 }}
```

## Jekyll Development vs Production

### Environment-Specific Content

{% if jekyll.environment == "development" %}
<div style="background-color: #ffe6e6; border: 1px solid #ff9999; padding: 10px; margin: 10px 0;">
  🚧 <strong>Development Mode:</strong> This content only shows during development.
</div>
{% endif %}

{% unless jekyll.environment == "production" %}
<pre>
Debug Info:
- Environment: {{ jekyll.environment }}
- Version: {{ jekyll.version }}
- Build time: {{ site.time }}
</pre>
{% endunless %}

### Configuration Variables

Site configuration values:
- URL: {{ site.url }}
- Base URL: {{ site.baseurl }}
- Timezone: {{ site.timezone }}
- Markdown: {{ site.markdown }}
- Highlighter: {{ site.highlighter }}

## Advanced Jekyll Features

### Pagination

```liquid
{% comment %}
Pagination example (requires jekyll-paginate plugin):
{% endcomment %}

{% if paginator %}
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}">&laquo; Previous</a>
  {% endif %}

  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <span class="current">{{ page }}</span>
    {% else %}
      <a href="{{ site.paginate_path | replace: ':num', page }}">{{ page }}</a>
    {% endif %}
  {% endfor %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}">Next &raquo;</a>
  {% endif %}
</div>
{% endif %}
```

### Multi-language Support

```liquid
{% assign lang = page.lang | default: site.lang | default: "en" %}
{% case lang %}
  {% when "en" %}
    {% assign greeting = "Hello" %}
  {% when "es" %}
    {% assign greeting = "Hola" %}
  {% when "fr" %}
    {% assign greeting = "Bonjour" %}
  {% else %}
    {% assign greeting = "Hello" %}
{% endcase %}

{{ greeting }}, welcome to our site!
```

## Testing Jekyll Features

### Build Information

- Jekyll version: {{ jekyll.version }}
- Environment: {{ jekyll.environment }}
- Build time: {{ site.time | date: "%Y-%m-%d %H:%M:%S %Z" }}

### Site Statistics

{% assign total_words = 0 %}
{% for post in site.posts %}
  {% assign words = post.content | number_of_words %}
  {% assign total_words = total_words | plus: words %}
{% endfor %}

- Total posts: {{ site.posts | size }}
- Total words: {{ total_words }}
- Average words per post: {{ total_words | divided_by: site.posts.size | round }}

### Performance Metrics

```liquid
{% assign start_time = "now" | date: "%s" %}
<!-- Content rendering happens here -->
{% assign end_time = "now" | date: "%s" %}
{% assign render_time = end_time | minus: start_time %}

Page render time: {{ render_time }} seconds
```

---

## Summary

This post demonstrates:

✅ **Frontmatter Variables**: Custom fields, SEO data, and metadata  
✅ **Liquid Templating**: Tags, filters, and control structures  
✅ **Jekyll Features**: Collections, data files, and plugins  
✅ **Performance**: Optimization techniques and build processes  
✅ **Development Workflow**: Environment-specific content and debugging  
✅ **Advanced Features**: Pagination, i18n, and custom extensions  

{% if page.toc %}
*This post includes a table of contents for easier navigation.*
{% endif %}

{% if page.comments %}
*Comments are enabled for this post.*
{% endif %}
