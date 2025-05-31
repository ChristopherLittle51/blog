---
layout: post
title: "Markdown Test: Edge Cases and Complex Combinations"
date: 2025-05-28 19:00:00 -0400
categories: [test, markdown, edge-cases, complex]

# Journal-specific front matter
journal_text: "Testing edge cases, complex combinations, and unusual Markdown scenarios"
type: test
---

## Complex Nested Structures

### Lists with Everything

1. **First main item** with *emphasis*
   
   This is a paragraph within a list item. It contains `inline code` and a [link](https://example.com).
   
   ```javascript
   // Code block within a list item
   function listExample() {
       return "Code in lists!";
   }
   ```
   
   > This is a blockquote within a list item.
   > 
   > It can span multiple paragraphs and contain **bold text**.
   
   - Nested unordered item with ~~strikethrough~~
   - Another nested item
     1. Deeply nested ordered item
     2. Another deeply nested item with `code`
        
        | Column 1 | Column 2 |
        |----------|----------|
        | Table in | nested list |
        
     3. Third deeply nested item
   
   Final paragraph in the first main item.

2. **Second main item** 
   
   - [ ] Unchecked task
   - [x] Checked task with **bold** and *italic*
   - [ ] Another task with `code` and [link](https://example.com)

3. **Third main item** with everything:
   
   Math: $E = mc^2$ and complex formula: $\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$
   
   ![Image in list](/assets/favicon-16x16.png "Small icon")
   
   <details>
   <summary>Collapsible section in list</summary>
   This is hidden content within a list item.
   </details>

### Blockquotes with Complex Content

> # Header in Blockquote
> 
> This blockquote contains various elements:
> 
> - List item 1 with **bold**
> - List item 2 with *italic*
> - List item 3 with `code`
> 
> ```python
> # Code block in blockquote
> def quote_function():
>     return "Hello from blockquote!"
> ```
> 
> | Table | In | Blockquote |
> |-------|----|-----------| 
> | Cell  | Content | Here |
> 
> > Nested blockquote within blockquote
> > 
> > This goes even deeper!
> 
> Final paragraph in the main blockquote with [a link](https://example.com).

### Tables with Complex Content

| **Feature** | **Description** | **Example** | **Status** |
|-------------|-----------------|-------------|------------|
| *Basic Text* | Simple text content | Hello World | ✅ |
| **Code** | `Inline code` and blocks | `console.log()` | ✅ |
| ***Links*** | [External](https://example.com) and [internal](#section) | [GitHub](https://github.com) | ✅ |
| ~~Deprecated~~ | Content that's no longer relevant | ~~Old API~~ | ❌ |
| **Math** | Inline: $x^2$ Block: $$\sum_{i=1}^{n} i$$ | $\pi \approx 3.14$ | ⚠️ |
| **Images** | ![Alt](/assets/favicon-16x16.png) | Icon | ✅ |
| **Lists** | • Item 1<br>• Item 2<br>• Item 3 | Bullet points | ✅ |
| **HTML** | <strong>Bold</strong> and <em>italic</em> | <code>Tags</code> | ✅ |

## Escape Sequences and Special Characters

### Escaping Markdown Characters

- Asterisks: \*not italic\* and \*\*not bold\*\*
- Underscores: \_not italic\_ and \_\_not bold\_\_
- Backticks: \`not code\`
- Hash symbols: \# not a header
- Square brackets: \[not a link\]
- Parentheses: \(not part of link\)
- Angle brackets: \<not HTML\>
- Backslashes: \\backslash
- Curly braces: \{not special\}
- Exclamation marks: \! not image
- Plus signs: \+ not list item
- Minus signs: \- not list item
- Periods after numbers: 1\. not ordered list
- Pipes: \| not table separator

### Special Unicode Characters

Symbols: © ® ™ § ¶ † ‡ • ‰ ‱ ° ′ ″ ‴

Math: ∀ ∃ ∄ ∅ ∆ ∇ ∈ ∉ ∊ ∋ ∌ ∍ ∎ ∏ ∐ ∑ √ ∛ ∜ ∝ ∞ ∟ ∠ ∡ ∢ ∣ ∤ ∥ ∦ ∧ ∨ ∩ ∪ ∫ ∬ ∭ ∮ ∯ ∰ ∱ ∲ ∳

Arrows: ← ↑ → ↓ ↔ ↕ ↖ ↗ ↘ ↙ ↚ ↛ ↜ ↝ ↞ ↟ ↠ ↡ ↢ ↣ ↤ ↥ ↦ ↧ ↨ ↩ ↪ ↫ ↬ ↭ ↮ ↯ ↰ ↱ ↲ ↳ ↴ ↵ ↶ ↷ ↸ ↹ ↺ ↻

Emoji: 😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳

### Complex Escape Scenarios

1. Escaped in code: `\*italic\*` vs normal: \*italic\*
2. Escaped in links: [Link with \[brackets\] in text](https://example.com)
3. Escaped in headings: \## Not a heading ##
4. Mixed escapes: \*\*bold with \`code\` inside\*\*

## Edge Cases with Whitespace

### Trailing Spaces for Line Breaks

Line 1 with two trailing spaces  
Line 2 after line break

Line 3 with four trailing spaces    
Line 4 after line break

### Multiple Blank Lines



Three blank lines above (should collapse to one in most processors)

### Indentation Edge Cases

Normal paragraph.

    Indented paragraph (4 spaces)

        Double indented (8 spaces)

            Triple indented (12 spaces)

Back to normal.

## Mixed Language Code Blocks

### Polyglot Code Example

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        /* CSS within HTML */
        .highlight { 
            background-color: yellow; 
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div id="content">Hello World</div>
    <script>
        // JavaScript within HTML
        document.getElementById('content').innerHTML = 
            '<span class="highlight">Updated content!</span>';
    </script>
</body>
</html>
```

### Code with Multiple Languages

**Frontend (React + TypeScript):**

```tsx
interface Props {
    name: string;
    age?: number;
}

const UserCard: React.FC<Props> = ({ name, age }) => {
    return (
        <div className="user-card">
            <h2>{name}</h2>
            {age && <p>Age: {age}</p>}
        </div>
    );
};
```

**Backend (Node.js + Express):**

```javascript
const express = require('express');
const app = express();

app.get('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
```

**Database (SQL):**

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    age INTEGER CHECK (age >= 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Unusual Combinations

### Code in Headers

## Using `Array.map()` for Data Transformation

### Working with `console.log()` Debugging

### Setting Up `.env` Configuration Files

### Links in Code

Check out the [`lodash`](https://lodash.com) library for utility functions.

### Code in Blockquotes

> Remember to always use `try-catch` blocks when working with async operations:
> 
> ```javascript
> try {
>     const result = await riskyOperation();
>     console.log(result);
> } catch (error) {
>     console.error('Operation failed:', error);
> }
> ```

### Math in Lists

1. Pythagorean theorem: $a^2 + b^2 = c^2$
2. Euler's formula: $e^{i\pi} + 1 = 0$
3. Quadratic formula: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

### Images in Tables with Math

| Concept | Formula | Visual | Example |
|---------|---------|---------|---------|
| Circle Area | $A = \pi r^2$ | ![Circle](/assets/favicon-16x16.png) | $A = \pi \cdot 5^2 = 25\pi$ |
| Triangle Area | $A = \frac{1}{2}bh$ | ![Triangle](/assets/favicon-16x16.png) | $A = \frac{1}{2} \cdot 10 \cdot 8 = 40$ |

## Performance Test Content

### Large Table

| Col1 | Col2 | Col3 | Col4 | Col5 | Col6 | Col7 | Col8 | Col9 | Col10 |
|------|------|------|------|------|------|------|------|------|-------|
| A1 | B1 | C1 | D1 | E1 | F1 | G1 | H1 | I1 | J1 |
| A2 | B2 | C2 | D2 | E2 | F2 | G2 | H2 | I2 | J2 |
| A3 | B3 | C3 | D3 | E3 | F3 | G3 | H3 | I3 | J3 |
| A4 | B4 | C4 | D4 | E4 | F4 | G4 | H4 | I4 | J4 |
| A5 | B5 | C5 | D5 | E5 | F5 | G5 | H5 | I5 | J5 |

### Deep Nesting

1. Level 1
   1. Level 2
      1. Level 3
         1. Level 4
            1. Level 5
               1. Level 6
                  1. Level 7
                     1. Level 8
                        1. Level 9
                           1. Level 10 - Maximum depth reached!

### Many Links

Here are many links to test rendering performance: [Link1](https://1.example.com) [Link2](https://2.example.com) [Link3](https://3.example.com) [Link4](https://4.example.com) [Link5](https://5.example.com) [Link6](https://6.example.com) [Link7](https://7.example.com) [Link8](https://8.example.com) [Link9](https://9.example.com) [Link10](https://10.example.com)

## Experimental Features

### GitHub Flavored Markdown Extensions

#### Task Lists in Blockquotes

> **Project Checklist:**
> - [x] Planning phase complete
> - [x] Design mockups approved  
> - [ ] Development in progress
> - [ ] Testing phase
> - [ ] Deployment ready

#### Strikethrough in Different Contexts

- ~~Completed task~~
- **~~Bold strikethrough~~**
- *~~Italic strikethrough~~*
- `~~Code strikethrough~~` (doesn't work)
- [~~Link strikethrough~~](https://example.com)

### Experimental Syntax

#### Highlight Text (if supported)

==This text should be highlighted==

==**Bold highlighted text**==

==*Italic highlighted text*==

#### Subscript and Superscript

H~2~O is water

E = mc^2^ is Einstein's equation

X^2^ + Y^2^ = Z^2^

The chemical formula for caffeine is C~8~H~10~N~4~O~2~

## Stress Test: Everything Combined

Here's a paragraph that combines **bold**, *italic*, ***bold italic***, `inline code`, ~~strikethrough~~, ==highlight==, [links](https://example.com), H~2~O subscript, E=mc^2^ superscript, $math = \sum_{i=1}^{n} i$, and even ![inline images](/assets/favicon-16x16.png) all in one sentence!

> This blockquote contains:
> 
> 1. **Numbered list** with `code`
>    - [x] Nested task list
>    - [ ] With ~~strikethrough~~ items
>    
>    ```python
>    def complex_function():
>        """Complex code in blockquote list"""
>        return {"status": "working", "math": "E=mc²"}
>    ```
>    
>    | Table | In | Blockquote | List |
>    |-------|----|-----------|----- |
>    | With  | **Bold** | *Italic* | `Code` |
> 
> 2. Second item with math: $\int_{0}^{\infty} e^{-x} dx = 1$
> 
> And a final paragraph with ![image](/assets/favicon-16x16.png) and [link](https://example.com).

---

## Final Notes

This comprehensive test file includes:

- ✅ All header levels (H1-H6)
- ✅ Text formatting (bold, italic, strikethrough, highlight)
- ✅ All list types (ordered, unordered, task, definition)
- ✅ Tables with various alignments and complex content
- ✅ Code blocks with multiple languages and syntax highlighting
- ✅ Images (inline, reference, with links, HTML variants)
- ✅ Mathematical expressions (inline and block)
- ✅ Diagrams and flowcharts (Mermaid)
- ✅ Interactive elements (collapsible sections, progress bars)
- ✅ Media embeds (video, audio, iframe)
- ✅ Advanced formatting (keyboard keys, footnotes, abbreviations)
- ✅ Escape sequences and special characters
- ✅ Edge cases and unusual combinations
- ✅ Complex nested structures
- ✅ Performance stress tests

These test posts should thoroughly exercise any Markdown processor and reveal how well it handles various features and edge cases!
