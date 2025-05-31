---
layout: post
title: "Markdown Test: Lists and Tables"
date: 2025-05-28 16:00:00 -0400
categories: [test, markdown, lists, tables]

# Journal-specific front matter
journal_text: "Testing all types of lists and table formatting"
type: test
---

## Unordered Lists

Basic unordered list:

- First item
- Second item
- Third item
  - Nested item 1
  - Nested item 2
    - Deeply nested item
    - Another deeply nested item
- Fourth item

Alternative bullet styles:

* Item with asterisk
* Another item
  * Nested with asterisk
  * More nested items

+ Item with plus sign
+ Another item
  + Nested with plus
  + More nested items

## Ordered Lists

Basic numbered list:

1. First numbered item
2. Second numbered item
3. Third numbered item
   1. Nested numbered item
   2. Another nested numbered item
      1. Deeply nested numbered item
      2. Another deeply nested numbered item
4. Fourth numbered item

Lists with different starting numbers:

10. Starting at ten
11. Eleven
12. Twelve

## Task Lists (GitHub Flavored Markdown)

- [x] Completed task
- [x] Another completed task
- [ ] Incomplete task
- [ ] Another incomplete task
  - [x] Nested completed subtask
  - [ ] Nested incomplete subtask

## Definition Lists

Term 1
: Definition for term 1

Term 2
: Definition for term 2
: Another definition for term 2

Complex Term
: This is a longer definition that spans multiple lines and provides detailed information about the term being defined.

## Mixed Lists

1. First ordered item
   - Unordered subitem
   - Another unordered subitem
2. Second ordered item
   1. Ordered subitem
   2. Another ordered subitem
      - Mixed nested item
      - Another mixed nested item
3. Third ordered item

## Tables

### Basic Table

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1, Col 1 | Row 1, Col 2 | Row 1, Col 3 |
| Row 2, Col 1 | Row 2, Col 2 | Row 2, Col 3 |
| Row 3, Col 1 | Row 3, Col 2 | Row 3, Col 3 |

### Table with Alignment

| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Left text | Center text | Right text |
| More left | More center | More right |
| Even more | Even more center | Even more right |

### Table with Formatting

| Feature | Status | Priority | Notes |
|---------|--------|----------|-------|
| **Bold feature** | ✅ Complete | High | *Working perfectly* |
| `Code feature` | 🔄 In Progress | Medium | Almost done |
| ~~Deprecated~~ | ❌ Removed | Low | No longer needed |
| [Linked feature](https://example.com) | 📝 Planned | High | See documentation |

### Complex Table with Markdown

| Name | Age | Occupation | Skills |
|------|-----|------------|--------|
| **John Doe** | 30 | `Software Engineer` | JavaScript, Python, **React** |
| *Jane Smith* | 28 | Data Scientist | R, Python, ~~MATLAB~~ |
| Bob Johnson | 35 | [Designer](https://example.com) | Photoshop, *Illustrator* |

### Minimal Table

Name | Role
-----|-----
Alice | Developer
Bob | Designer
Carol | Manager

## Lists in Blockquotes

> Here's a list inside a blockquote:
> 
> 1. First quoted item
> 2. Second quoted item
>    - Nested item in quote
>    - Another nested item
> 3. Third quoted item

## Tables in Lists

1. Here's a table as a list item:

   | Column A | Column B |
   |----------|----------|
   | Value 1  | Value 2  |
   | Value 3  | Value 4  |

2. Another list item after the table

## Paragraphs in Lists

1. This is the first item in a numbered list.

   This is a second paragraph within the first list item. Notice how it's indented to align with the text of the first paragraph.

2. This is the second item in the list.

   > This is a blockquote within a list item.
   
   And this is another paragraph in the same list item.

3. This is the third item.

## Code in Lists

- Here's some `inline code` in a list item
- Here's a code block in a list item:

  ```python
  def hello_world():
      print("Hello, World!")
  ```

- Another list item after the code block
