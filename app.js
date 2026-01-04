/**
 * AI Prompt Playground - Application Logic
 * Demo mode with pre-generated mock responses
 */

// ==========================================
// Mock Response Data
// ==========================================

const MOCK_RESPONSES = {
    "Write a Python function to merge two sorted lists": {
        type: "code",
        language: "python",
        content: `def merge_sorted_lists(list1, list2):
    """
    Merge two sorted lists into a single sorted list.
    
    Args:
        list1: First sorted list
        list2: Second sorted list
    
    Returns:
        A new sorted list containing all elements from both lists
    
    Time Complexity: O(n + m) where n and m are lengths of the lists
    Space Complexity: O(n + m) for the result list
    """
    result = []
    i, j = 0, 0
    
    # Compare elements from both lists and add the smaller one
    while i < len(list1) and j < len(list2):
        if list1[i] <= list2[j]:
            result.append(list1[i])
            i += 1
        else:
            result.append(list2[j])
            j += 1
    
    # Add remaining elements from list1 (if any)
    while i < len(list1):
        result.append(list1[i])
        i += 1
    
    # Add remaining elements from list2 (if any)
    while j < len(list2):
        result.append(list2[j])
        j += 1
    
    return result


# Example usage:
list_a = [1, 3, 5, 7, 9]
list_b = [2, 4, 6, 8, 10]
merged = merge_sorted_lists(list_a, list_b)
print(merged)  # Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`
    },

    "Explain async/await in simple terms": {
        type: "text",
        content: `## Understanding Async/Await: The Coffee Shop Analogy ☕

Imagine you're at a busy coffee shop. Here's how different programming approaches work:

### Synchronous (Blocking)
You order coffee, then **stand at the counter waiting** until it's ready. Nothing else happens - you can't check your phone, talk to friends, or do anything else. The whole shop freezes waiting for your coffee!

### Asynchronous with Callbacks (Old Way)
You order coffee and give them your number. You can sit down, but you're constantly checking "Did they call? Did they call?" - messy and confusing!

### Async/Await (Modern Way) ✨
You order coffee and get a **promise** (a receipt with a number). You sit down and do other things. When your coffee is ready, you're notified and pick it up. Clean and simple!

---

### In Code Terms:

\`\`\`javascript
// Async function - can pause and wait for things
async function getMorningCoffee() {
    console.log("Ordering coffee...");
    
    // await = "wait here until this finishes, but let others work"
    const coffee = await orderFromBarista("latte");
    
    console.log("Got my coffee!");
    return coffee;
}
\`\`\`

### Key Points:
- **\`async\`** - marks a function that can pause
- **\`await\`** - pauses until a Promise resolves
- **Non-blocking** - other code can run while waiting
- **Readable** - looks like normal synchronous code!

Think of \`await\` as saying: *"I'll wait here for this, but everyone else can keep working!"*`
    },

    "Create a React component for a todo list": {
        type: "code",
        language: "jsx",
        content: `import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;
        
        setTodos([
            ...todos,
            {
                id: Date.now(),
                text: inputValue.trim(),
                completed: false
            }
        ]);
        setInputValue('');
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id 
                ? { ...todo, completed: !todo.completed }
                : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="todo-container">
            <h1>📝 My Todo List</h1>
            
            <form onSubmit={addTodo} className="todo-form">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="What needs to be done?"
                    className="todo-input"
                />
                <button type="submit" className="add-btn">
                    Add
                </button>
            </form>

            <ul className="todo-list">
                {todos.map(todo => (
                    <li 
                        key={todo.id} 
                        className={\`todo-item \${todo.completed ? 'completed' : ''}\`}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span className="todo-text">{todo.text}</span>
                        <button 
                            onClick={() => deleteTodo(todo.id)}
                            className="delete-btn"
                        >
                            ✕
                        </button>
                    </li>
                ))}
            </ul>

            {todos.length > 0 && (
                <p className="todo-count">
                    {todos.filter(t => !t.completed).length} items remaining
                </p>
            )}
        </div>
    );
}

export default TodoList;`
    },

    "Generate a commit message for adding dark mode": {
        type: "text",
        content: `## Suggested Commit Message

\`\`\`
feat(ui): add dark mode theme support

- Add theme toggle component in header
- Implement CSS custom properties for color schemes
- Store user preference in localStorage
- Add prefers-color-scheme media query detection
- Update all components to use theme variables

Closes #142
\`\`\`

---

### Breakdown (Conventional Commits Format):

| Part | Meaning |
|------|---------|
| \`feat\` | Type: A new feature |
| \`(ui)\` | Scope: UI/visual changes |
| \`add dark mode...\` | Subject: Short description |
| Body | Detailed list of changes |
| \`Closes #142\` | Footer: Links to issue |

### Alternative Options:

**Shorter version:**
\`\`\`
feat: add dark mode toggle with localStorage persistence
\`\`\`

**With breaking change:**
\`\`\`
feat(ui)!: add dark mode (requires CSS variable support)

BREAKING CHANGE: Drops IE11 support due to CSS custom properties
\`\`\``
    }
};

// Example prompts for dropdown
const EXAMPLE_PROMPTS = Object.keys(MOCK_RESPONSES);

// Default response for unrecognized prompts
const DEFAULT_RESPONSE = {
    type: "text",
    content: `## Demo Mode Response

Thanks for trying the AI Prompt Playground! 🎉

This is a demonstration interface. In a real implementation, your prompt would be sent to an AI model like:
- **GPT-4** for general tasks
- **Claude** for analysis and coding
- **Codex** for code generation

### Try These Example Prompts:
${EXAMPLE_PROMPTS.map(p => `- "${p}"`).join('\n')}

Select one from the dropdown above to see realistic AI responses!`
};

// ==========================================
// DOM Elements
// ==========================================

const elements = {
    exampleSelect: document.getElementById('example-select'),
    promptInput: document.getElementById('prompt-input'),
    generateBtn: document.getElementById('generate-btn'),
    resultsSection: document.getElementById('results-section'),
    resultsContent: document.getElementById('results-content'),
    copyBtn: document.getElementById('copy-btn'),
    copyText: document.getElementById('copy-text'),
    howToggle: document.getElementById('how-toggle'),
    howContent: document.getElementById('how-content')
};

// ==========================================
// Initialize Application
// ==========================================

function init() {
    populateExampleDropdown();
    attachEventListeners();
}

// Populate dropdown with example prompts
function populateExampleDropdown() {
    EXAMPLE_PROMPTS.forEach((prompt, index) => {
        const option = document.createElement('option');
        option.value = prompt;
        option.textContent = `${index + 1}. ${prompt}`;
        elements.exampleSelect.appendChild(option);
    });
}

// Attach all event listeners
function attachEventListeners() {
    // Example select change
    elements.exampleSelect.addEventListener('change', handleExampleSelect);
    
    // Generate button click
    elements.generateBtn.addEventListener('click', handleGenerate);
    
    // Enter key in textarea (Ctrl+Enter or Cmd+Enter to submit)
    elements.promptInput.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            handleGenerate();
        }
    });
    
    // Copy button click
    elements.copyBtn.addEventListener('click', handleCopy);
    
    // How It Works toggle
    elements.howToggle.addEventListener('click', handleHowToggle);
}

// ==========================================
// Event Handlers
// ==========================================

// Handle example prompt selection
function handleExampleSelect() {
    const selectedValue = elements.exampleSelect.value;
    if (selectedValue) {
        elements.promptInput.value = selectedValue;
        elements.promptInput.focus();
    }
}

// Handle generate button click
async function handleGenerate() {
    const prompt = elements.promptInput.value.trim();
    
    if (!prompt) {
        elements.promptInput.focus();
        return;
    }
    
    // Set loading state
    setLoadingState(true);
    
    // Simulate API delay (1-2 seconds)
    const delay = 1000 + Math.random() * 1000;
    await sleep(delay);
    
    // Get response
    const response = getResponse(prompt);
    
    // Display results
    displayResults(response);
    
    // Remove loading state
    setLoadingState(false);
}

// Handle copy to clipboard
async function handleCopy() {
    const content = elements.resultsContent.innerText;
    
    try {
        await navigator.clipboard.writeText(content);
        
        // Show success state
        elements.copyText.textContent = 'Copied!';
        elements.copyBtn.classList.add('copy-success');
        
        // Reset after 2 seconds
        setTimeout(() => {
            elements.copyText.textContent = 'Copy';
            elements.copyBtn.classList.remove('copy-success');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
        elements.copyText.textContent = 'Failed';
        setTimeout(() => {
            elements.copyText.textContent = 'Copy';
        }, 2000);
    }
}

// Handle How It Works toggle
function handleHowToggle() {
    const isExpanded = elements.howToggle.getAttribute('aria-expanded') === 'true';
    
    elements.howToggle.setAttribute('aria-expanded', !isExpanded);
    elements.howContent.hidden = isExpanded;
}

// ==========================================
// Helper Functions
// ==========================================

// Set loading state on generate button
function setLoadingState(isLoading) {
    elements.generateBtn.disabled = isLoading;
    elements.generateBtn.classList.toggle('loading', isLoading);
    elements.promptInput.disabled = isLoading;
    elements.exampleSelect.disabled = isLoading;
}

// Get response for a prompt
function getResponse(prompt) {
    // Check for exact match first
    if (MOCK_RESPONSES[prompt]) {
        return MOCK_RESPONSES[prompt];
    }
    
    // Check for partial matches (case-insensitive)
    const promptLower = prompt.toLowerCase();
    for (const [key, value] of Object.entries(MOCK_RESPONSES)) {
        if (promptLower.includes(key.toLowerCase()) || 
            key.toLowerCase().includes(promptLower)) {
            return value;
        }
    }
    
    // Return default response
    return DEFAULT_RESPONSE;
}

// Display results in the results section
function displayResults(response) {
    let html = '';
    
    if (response.type === 'code') {
        // Code response with syntax highlighting
        html = `<pre><code class="language-${response.language}">${escapeHtml(response.content)}</code></pre>`;
    } else {
        // Text/markdown response
        html = formatMarkdown(response.content);
    }
    
    elements.resultsContent.innerHTML = html;
    elements.resultsSection.hidden = false;
    
    // Apply syntax highlighting to code blocks
    elements.resultsContent.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightElement(block);
    });
    
    // Scroll to results
    elements.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Simple markdown formatter
function formatMarkdown(text) {
    let html = text;
    
    // Escape HTML first
    html = escapeHtml(html);
    
    // Code blocks (```)
    html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
        const language = lang || 'plaintext';
        return `<pre><code class="language-${language}">${code.trim()}</code></pre>`;
    });
    
    // Inline code (`)
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    // Headers
    html = html.replace(/^### (.+)$/gm, '<h4>$1</h4>');
    html = html.replace(/^## (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^# (.+)$/gm, '<h2>$1</h2>');
    
    // Bold
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    
    // Lists
    html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');
    
    // Tables (simple)
    html = html.replace(/\|(.+)\|/g, (match, content) => {
        const cells = content.split('|').map(c => c.trim());
        if (cells.every(c => c.match(/^-+$/))) {
            return ''; // Skip separator row
        }
        const cellTags = cells.map(c => `<td>${c}</td>`).join('');
        return `<tr>${cellTags}</tr>`;
    });
    html = html.replace(/(<tr>.*<\/tr>\n?)+/g, '<table>$&</table>');
    
    // Horizontal rules
    html = html.replace(/^---$/gm, '<hr>');
    
    // Paragraphs (double newlines)
    html = html.replace(/\n\n/g, '</p><p>');
    html = `<p>${html}</p>`;
    
    // Clean up empty paragraphs
    html = html.replace(/<p>\s*<\/p>/g, '');
    html = html.replace(/<p>(<h[234]>)/g, '$1');
    html = html.replace(/(<\/h[234]>)<\/p>/g, '$1');
    html = html.replace(/<p>(<ul>)/g, '$1');
    html = html.replace(/(<\/ul>)<\/p>/g, '$1');
    html = html.replace(/<p>(<pre>)/g, '$1');
    html = html.replace(/(<\/pre>)<\/p>/g, '$1');
    html = html.replace(/<p>(<table>)/g, '$1');
    html = html.replace(/(<\/table>)<\/p>/g, '$1');
    html = html.replace(/<p>(<hr>)<\/p>/g, '$1');
    
    return html;
}

// Escape HTML special characters
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, char => map[char]);
}

// Sleep utility
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ==========================================
// Start Application
// ==========================================

document.addEventListener('DOMContentLoaded', init);
