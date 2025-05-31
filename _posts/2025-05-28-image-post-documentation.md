---
layout: post
title: "Enhanced Image Post Documentation"
date: 2025-05-28 21:00:00 -0400
categories: [documentation, features]

# Journal-specific front matter
journal_text: "How to use the new vintage photo feature"
type: note
---

# Enhanced Image Post Type

The blog now supports a special "image" post type that displays photos as vintage, taped photos that randomly appear on the left or right side of the page, outside the main bullet list.

## Features

### Random Positioning
- Photos randomly appear on the left or right side of the page
- Each photo has a unique random rotation (-6° to +6°)
- Random horizontal offset for natural placement
- Slight 3D tilt effect for depth

### Vintage Effects
- **Photo aging**: 3 levels of aging with different color tints and damage
- **Tape variations**: 4 different tape styles with varying wear and damage
- **Paper texture**: Realistic paper background with fiber patterns and foxing
- **Edge wear**: Corner damage, stains, and aging marks
- **Variable tape placement**: Some photos use 2 pieces of tape, others use 4

### Interactive Effects
- Hover to lift and slightly rotate the photo
- Smooth animations when photos come into view
- Enhanced shadows and lighting on hover

## How to Create Image Posts

Create a new post with the following frontmatter:

```yaml
---
layout: post
title: "Your Photo Title"
date: 2025-05-28 14:00:00 -0400
categories: [personal, photography]

# Journal-specific front matter
journal_text: "Caption that appears under the photo"
type: image                    # This makes it an image post
image_url: /images/your-photo.jpg
image_alt: "Alt text for accessibility"
post_only: true               # Optional: makes it display only on home page
---

Optional content that appears if you click through to the full post.
```

## Styling Details

The system uses a hash of the post date and position to ensure consistent randomization - the same post will always appear in the same position and style, but different posts will have varied appearances.

### Aging Levels
- **Level 1**: Minimal aging, clean appearance
- **Level 2**: Medium aging with light yellowing
- **Level 3**: Heavy aging with significant foxing and damage

### Tape Styles
- **Style 1**: Two corner pieces, heavy yellowing
- **Style 2**: Two opposite corners, peeling effects
- **Style 3**: Four corners, wider tape pieces
- **Style 4**: Four corners, rounded tape, heavy damage

Photos are automatically sorted by date and spaced appropriately to prevent overlapping while maintaining the natural journal aesthetic.
