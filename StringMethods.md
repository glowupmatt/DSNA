# JavaScript String Methods for Sorting and Comparison

This document covers useful string methods for sorting, comparing, and manipulating strings in JavaScript. These methods are particularly helpful for coding challenges and data manipulation tasks.

## Comparison Methods

### `localeCompare()`
The most powerful method for alphabetical string comparison with proper language support.

```javascript
// Basic usage - alphabetical sorting
array.sort((a, b) => a.name.localeCompare(b.name));

// With locale options
array.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
```

Benefits:
- Handles language-specific characters correctly
- Supports various locale options
- Properly sorts strings with special characters, accents, etc.

## Case Manipulation

### `toLowerCase()` / `toUpperCase()`
For case-insensitive comparisons:

```javascript
// Case-insensitive sorting
array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// Case-insensitive searching
const containsText = str.toLowerCase().includes(searchTerm.toLowerCase());
```

## String Searching

### `startsWith()`
Checks if a string begins with specific characters:

```javascript
// Filter names starting with 'A'
const aNames = names.filter(name => name.startsWith('A'));

// With position parameter
const startsWithVowel = str.startsWith('a', 3); // Check if 4th character is 'a'
```

### `endsWith()`
Checks if a string ends with specific characters:

```javascript
// Filter files ending with '.js'
const jsFiles = files.filter(file => file.endsWith('.js'));
```

### `includes()`
Checks if a string contains a substring:

```javascript
// Filter names containing 'a'
const namesWithA = names.filter(name => name.includes('a'));

// With position parameter
const containsAfterPos = str.includes('a', 5); // Check if 'a' exists after index 5
```

## String Manipulation

### `trim()`, `trimStart()`, `trimEnd()`
Remove whitespace:

```javascript
// Remove all surrounding whitespace
const cleaned = "  hello  ".trim(); // "hello"

// Remove whitespace from just the beginning or end
const noLeadingSpace = "  hello  ".trimStart(); // "hello  "
const noTrailingSpace = "  hello  ".trimEnd(); // "  hello"
```

### `substring()` / `slice()`
Extract parts of a string:

```javascript
// Get characters from index 1 to 3
const part = name.substring(1, 4);

// Sort by second character
array.sort((a, b) => a.slice(1, 2).localeCompare(b.slice(1, 2)));

// Negative indices with slice() (counts from end)
const lastChars = str.slice(-3); // last 3 characters
```

### `split()`
Break strings into arrays:

```javascript
// Sort by last name when names are "First Last"
array.sort((a, b) => {
  const aLastName = a.split(' ')[1];
  const bLastName = b.split(' ')[1];
  return aLastName.localeCompare(bLastName);
});

// Split with limit
const firstTwoWords = str.split(' ', 2);
```

### `padStart()` / `padEnd()`
Pad strings to desired length:

```javascript
// Sort ID numbers with different lengths (e.g., "1", "20", "3" -> "01", "03", "20")
array.sort((a, b) => a.id.padStart(2, '0').localeCompare(b.id.padStart(2, '0')));

// Format time
const hours = "9";
const minutes = "5";
const time = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`; // "09:05"
```

## Practical Examples

### Sorting names alphabetically
```javascript
function sortNames(names) {
  return [...names].sort((a, b) => a.localeCompare(b));
}
```

### Case-insensitive search
```javascript
function search(items, query) {
  const q = query.toLowerCase();
  return items.filter(item => item.toLowerCase().includes(q));
}
```

### Sorting by last name
```javascript
function sortByLastName(fullNames) {
  return [...fullNames].sort((a, b) => {
    const aLast = a.split(' ').pop();
    const bLast = b.split(' ').pop();
    return aLast.localeCompare(bLast);
  });
}
```

### Format consistency
```javascript
function normalizeNames(names) {
  return names.map(name => 
    name.trim().split(' ')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(' ')
  );
}
```