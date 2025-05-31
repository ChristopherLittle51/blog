---
layout: post
title: "Markdown Test: Code Blocks and Syntax Highlighting"
date: 2025-05-28 17:00:00 -0400
categories: [test, markdown, code, programming]

# Journal-specific front matter
journal_text: "Testing all types of code formatting and syntax highlighting"
type: test
---

## Inline Code

Use `backticks` for inline code. Here are some examples:

- Variable names: `userName`, `totalCount`, `isActive`
- Function calls: `getData()`, `console.log()`, `Math.random()`
- File paths: `/usr/local/bin`, `./src/components`, `package.json`
- Terminal commands: `npm install`, `git commit`, `docker run`

You can escape backticks in inline code: `` `backtick` ``

## Basic Code Blocks

Simple code block without language specification:

```
function hello() {
    console.log("Hello, World!");
}
```

Indented code block (4 spaces):

    def python_function():
        return "This is indented code"

## Language-Specific Syntax Highlighting

### JavaScript

```javascript
// ES6 Classes and async/await
class UserManager {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        this.users = new Map();
    }

    async fetchUser(id) {
        try {
            const response = await fetch(`${this.apiUrl}/users/${id}`);
            const user = await response.json();
            this.users.set(id, user);
            return user;
        } catch (error) {
            console.error('Failed to fetch user:', error);
            throw error;
        }
    }

    // Arrow function with destructuring
    getUserInfo = ({ name, email, age = 'Unknown' }) => {
        return `Name: ${name}, Email: ${email}, Age: ${age}`;
    };
}

// Modern JavaScript features
const userManager = new UserManager('https://api.example.com');
const [first, second, ...rest] = [1, 2, 3, 4, 5];
const config = { timeout: 5000, retries: 3 };
const mergedConfig = { ...config, debug: true };
```

### Python

```python
# Python with type hints and decorators
from typing import List, Dict, Optional
import asyncio
from dataclasses import dataclass
from functools import wraps

@dataclass
class User:
    id: int
    name: str
    email: str
    age: Optional[int] = None

def retry(max_attempts: int = 3):
    def decorator(func):
        @wraps(func)
        async def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return await func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise e
                    await asyncio.sleep(2 ** attempt)
        return wrapper
    return decorator

class UserService:
    def __init__(self, database_url: str):
        self.db_url = database_url
        self.users: Dict[int, User] = {}

    @retry(max_attempts=3)
    async def get_users(self) -> List[User]:
        # Simulated async database call
        await asyncio.sleep(0.1)
        return list(self.users.values())

    def add_user(self, user_data: dict) -> User:
        user = User(**user_data)
        self.users[user.id] = user
        return user

# List comprehensions and lambda functions
numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers if x % 2 == 0]
filtered_users = list(filter(lambda u: u.age and u.age > 18, users))
```

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modern HTML5 Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav aria-label="Main navigation">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="hero">
            <h1>Welcome to Our Site</h1>
            <p>This is a semantic HTML5 example with modern best practices.</p>
        </section>

        <article>
            <header>
                <h2>Article Title</h2>
                <time datetime="2025-05-28">May 28, 2025</time>
            </header>
            <p>Article content goes here...</p>
        </article>
    </main>

    <aside>
        <h3>Related Links</h3>
        <ul>
            <li><a href="#link1">Resource 1</a></li>
            <li><a href="#link2">Resource 2</a></li>
        </ul>
    </aside>

    <footer>
        <p>&copy; 2025 Example Company. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

### CSS

```css
/* Modern CSS with Grid, Flexbox, and Custom Properties */
:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --font-family: 'Inter', sans-serif;
    --border-radius: 8px;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: var(--font-family);
    line-height: 1.6;
    color: var(--secondary-color);
}

.container {
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
        "header header"
        "main sidebar"
        "footer footer";
    min-height: 100vh;
    gap: 1rem;
    padding: 1rem;
}

header {
    grid-area: header;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 2rem;
    border-radius: var(--border-radius);
}

nav ul {
    display: flex;
    list-style: none;
    gap: 1rem;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    transition: background-color 0.3s ease;
}

nav a:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.hero {
    background: var(--primary-color);
    color: white;
    padding: 3rem;
    text-align: center;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
        grid-template-areas: 
            "header"
            "main"
            "sidebar"
            "footer";
    }
}
```

### SQL

```sql
-- Advanced SQL with CTEs, Window Functions, and JSON
WITH user_stats AS (
    SELECT 
        u.id,
        u.name,
        u.email,
        COUNT(o.id) as total_orders,
        SUM(o.total_amount) as lifetime_value,
        AVG(o.total_amount) as avg_order_value,
        ROW_NUMBER() OVER (ORDER BY SUM(o.total_amount) DESC) as value_rank
    FROM users u
    LEFT JOIN orders o ON u.id = o.user_id
    WHERE u.created_at >= DATE_SUB(NOW(), INTERVAL 1 YEAR)
    GROUP BY u.id, u.name, u.email
),
top_customers AS (
    SELECT *
    FROM user_stats
    WHERE value_rank <= 100
)
SELECT 
    tc.name,
    tc.email,
    tc.total_orders,
    tc.lifetime_value,
    tc.avg_order_value,
    JSON_ARRAYAGG(
        JSON_OBJECT(
            'product_name', p.name,
            'category', p.category,
            'quantity', oi.quantity
        )
    ) as purchased_products
FROM top_customers tc
JOIN orders o ON tc.id = o.user_id
JOIN order_items oi ON o.id = oi.order_id
JOIN products p ON oi.product_id = p.id
GROUP BY tc.id, tc.name, tc.email, tc.total_orders, tc.lifetime_value, tc.avg_order_value
ORDER BY tc.lifetime_value DESC;
```

### Shell Scripts

```bash
#!/bin/bash

# Advanced Bash script with error handling and logging
set -euo pipefail

# Configuration
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly LOG_FILE="${SCRIPT_DIR}/deploy.log"
readonly CONFIG_FILE="${SCRIPT_DIR}/config.env"

# Colors for output
readonly RED='\033[0;31m'
readonly GREEN='\033[0;32m'
readonly YELLOW='\033[1;33m'
readonly NC='\033[0m' # No Color

# Logging function
log() {
    local level="$1"
    shift
    echo -e "[$(date +'%Y-%m-%d %H:%M:%S')] [${level}] $*" | tee -a "${LOG_FILE}"
}

info() { log "INFO" "${GREEN}$*${NC}"; }
warn() { log "WARN" "${YELLOW}$*${NC}"; }
error() { log "ERROR" "${RED}$*${NC}"; }

# Error handling
cleanup() {
    local exit_code=$?
    if [[ $exit_code -ne 0 ]]; then
        error "Script failed with exit code: $exit_code"
    fi
    # Cleanup temporary files
    rm -f /tmp/deploy_*.tmp
}
trap cleanup EXIT

# Load configuration
if [[ -f "$CONFIG_FILE" ]]; then
    source "$CONFIG_FILE"
else
    warn "Config file not found, using defaults"
    APP_NAME="myapp"
    ENVIRONMENT="staging"
fi

# Function definitions
deploy_application() {
    local app_name="$1"
    local environment="$2"
    
    info "Starting deployment of $app_name to $environment"
    
    # Build application
    if ! npm run build; then
        error "Build failed"
        return 1
    fi
    
    # Run tests
    if ! npm test; then
        error "Tests failed"
        return 1
    fi
    
    # Deploy based on environment
    case "$environment" in
        "production")
            info "Deploying to production..."
            docker build -t "$app_name:latest" .
            docker push "$app_name:latest"
            ;;
        "staging")
            info "Deploying to staging..."
            rsync -avz --delete ./dist/ user@staging-server:/var/www/html/
            ;;
        *)
            error "Unknown environment: $environment"
            return 1
            ;;
    esac
    
    info "Deployment completed successfully"
}

# Main execution
main() {
    info "Starting deployment script"
    
    # Validate prerequisites
    command -v npm >/dev/null 2>&1 || { error "npm is required but not installed"; exit 1; }
    command -v docker >/dev/null 2>&1 || { warn "docker not found, some features may not work"; }
    
    # Execute deployment
    deploy_application "$APP_NAME" "$ENVIRONMENT"
    
    info "Script completed successfully"
}

# Run main function if script is executed directly
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi
```

### JSON

```json
{
  "name": "markdown-test-project",
  "version": "1.0.0",
  "description": "A comprehensive test project for Markdown code highlighting",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "build": "webpack --mode production",
    "test": "jest",
    "lint": "eslint src/**/*.js",
    "format": "prettier --write \"src/**/*.{js,json,css,md}\""
  },
  "dependencies": {
    "express": "^4.18.0",
    "lodash": "^4.17.21",
    "axios": "^1.4.0",
    "moment": "^2.29.4"
  },
  "devDependencies": {
    "jest": "^29.0.0",
    "nodemon": "^2.0.20",
    "eslint": "^8.45.0",
    "prettier": "^2.8.8",
    "webpack": "^5.88.0"
  },
  "keywords": ["test", "markdown", "code", "highlighting"],
  "author": {
    "name": "Test Author",
    "email": "test@example.com",
    "url": "https://example.com"
  },
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/example/markdown-test.git"
  },
  "bugs": {
    "url": "https://github.com/example/markdown-test/issues"
  },
  "engines": {
    "node": ">=16.0.0",
    "npm": ">=8.0.0"
  }
}
```

## Code with Line Numbers and Highlighting

Some Markdown processors support line numbers and line highlighting:

```javascript {linenos=true,hl_lines=[3,7]}
function calculateTotal(items) {
    let total = 0;
    for (const item of items) {  // This line is highlighted
        if (item.price && item.quantity) {
            total += item.price * item.quantity;
        } else {
            console.warn('Invalid item:', item);  // This line is highlighted
        }
    }
    return total;
}
```

## Diff Syntax

```diff
  function oldFunction() {
-     return "old implementation";
+     return "new improved implementation";
  }

+ function newFunction() {
+     return "brand new feature";
+ }

- function deprecatedFunction() {
-     return "this will be removed";
- }
```

## Configuration Files

### YAML

```yaml
# Docker Compose configuration
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@db:5432/myapp
    depends_on:
      - db
      - redis
    volumes:
      - ./uploads:/app/uploads
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:

networks:
  default:
    name: myapp_network
```

### XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <appSettings>
        <add key="ApiUrl" value="https://api.example.com" />
        <add key="Timeout" value="30000" />
        <add key="RetryCount" value="3" />
    </appSettings>
    
    <connectionStrings>
        <add name="DefaultConnection" 
             connectionString="Server=localhost;Database=MyApp;Trusted_Connection=true;" />
    </connectionStrings>
    
    <system.web>
        <compilation debug="false" targetFramework="4.8" />
        <httpRuntime targetFramework="4.8" maxRequestLength="10240" />
    </system.web>
</configuration>
```

## Code with Comments and Documentation

```typescript
/**
 * Represents a generic API client for making HTTP requests
 * @template T The type of data returned by the API
 */
interface ApiClient<T> {
    /**
     * Fetches data from the specified endpoint
     * @param endpoint - The API endpoint to call
     * @param options - Optional request configuration
     * @returns Promise resolving to the API response
     */
    get(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>>;
    
    /**
     * Sends data to the specified endpoint
     * @param endpoint - The API endpoint to call
     * @param data - The data to send
     * @param options - Optional request configuration
     * @returns Promise resolving to the API response
     */
    post(endpoint: string, data: T, options?: RequestOptions): Promise<ApiResponse<T>>;
}

// Implementation with error handling and type safety
class HttpClient<T> implements ApiClient<T> {
    private readonly baseUrl: string;
    private readonly defaultHeaders: Record<string, string>;

    constructor(baseUrl: string, headers: Record<string, string> = {}) {
        this.baseUrl = baseUrl.replace(/\/+$/, ''); // Remove trailing slashes
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            ...headers
        };
    }

    async get(endpoint: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
        // TODO: Implement caching mechanism
        // FIXME: Handle network timeouts properly
        /* NOTE: This method supports query parameters in the endpoint */
        return this.makeRequest('GET', endpoint, undefined, options);
    }

    async post(endpoint: string, data: T, options: RequestOptions = {}): Promise<ApiResponse<T>> {
        return this.makeRequest('POST', endpoint, data, options);
    }

    private async makeRequest(
        method: string, 
        endpoint: string, 
        data?: T, 
        options: RequestOptions = {}
    ): Promise<ApiResponse<T>> {
        // Implementation details...
        throw new Error('Not implemented yet'); // HACK: Temporary placeholder
    }
}
```
