# Arrays

## Contains Duplicate

**Given an integer array** `nums`**, return** `true` **if any value appears more than once in the array, otherwise return** `false`**.**

- Duplicate problems normally require a MAP or a SET
- If the question is asking to see if there is a certain amount or if you need to maintain a count for the  items in an array it is most likely going to need an object to dynamically keep count.

## **Valid Anagram**

**Given two strings `s` and `t`, return `true` if the two strings are anagrams of each other, otherwise return `false`.**

**An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.**

- We need to keep count of the values in the string. If the count is zero then we return true.
- Create a Map that will make a key of the char in the str and the value is the frequency of each str.
- Loop through chars then subtract the value from the map to see if it goes to zero

Absolutely! Here's a **Markdown-formatted explanation** that breaks down the skills tested in the `canPlaceFlowers` problem and how they transfer to other problems:

---

## 🌻 `canPlaceFlowers` Problem – Skill Breakdown & Transferability

### 🧠 Problem Summary

You are given a flowerbed represented by an array of `0`s (empty) and `1`s (already planted flowers). The goal is to determine if you can plant `n` new flowers without violating the no-adjacent-flowers rule.

---

## 🛠️ Core Skills Used

### 1. **Array Traversal**

* **What it is:** Iterating through an array using a loop.
* **How it's used here:** You scan each element to determine if it’s a valid planting spot.
* **Where else it helps:**

  * Checking for duplicate values
  * Finding peaks/valleys
  * Sliding window problems (e.g., maximum sum of subarrays)

---

### 2. **Boundary Checking**

* **What it is:** Safely accessing neighboring elements in an array.
* **How it's used here:** Prevents index out-of-bounds errors when accessing `i - 1` or `i + 1`.
* **Where else it helps:**

  * 2D grid traversal (e.g., islands in a matrix)
  * String pattern matching
  * Any problem involving adjacent comparisons

---

### 3. **Greedy Strategy**

* **What it is:** Making the optimal choice at each step without reconsideration.
* **How it's used here:** You plant a flower as soon as it's valid, without backtracking.
* **Where else it helps:**

  * Interval scheduling (e.g., activity selection)
  * Coin change (greedy version)
  * Merging overlapping intervals

---

### 4. **State Mutation (In-place Update)**

* **What it is:** Changing the array during iteration.
* **How it's used here:** You modify `flowerbed[i] = 1` after planting a flower.
* **Where else it helps:**

  * In-place sorting
  * Marking visited cells in grid-based DFS/BFS
  * Memory-efficient algorithms

---

### 5. **Early Exit Optimization**

* **What it is:** Returning as soon as a condition is met to avoid unnecessary computation.
* **How it's used here:** If `n` reaches 0, the loop stops early.
* **Where else it helps:**

  * Searching problems (e.g., finding the first match)
  * Real-time processing (e.g., input validation)
  * Recursive backtracking

---

## 💡 Transferable Pattern

> **General Rule:**
> If a problem involves scanning through a data structure while checking neighbors and updating state, the skills in this problem will be useful.

---

## ✨ Takeaway

Mastering `canPlaceFlowers` helps build your:

* **Comfort with arrays**
* **Confidence in edge-case handling**
* **Efficiency-first mindset**

These are foundational in competitive programming, interviews, and real-world systems (like simulating game boards or scheduling tasks).

---
# Understanding the Code Snippet

The code snippet uses the `reduce` method to process an array (`args`) and calculate a specific result. Let's break it down step by step:

---

## The Code

```javascript
const seen = args.reduce((map, currVal) => {
  return map.set(currVal, (map.get(currVal) || 0) + 1)
}, new Map())

return [...seen.entries()]
  .filter(([_, value]) => value === 1)
  .reduce((sum, [key, _]) => sum += key, 0)
```

---

## Step-by-Step Breakdown

### 1. **Reducing to a Map of Frequencies**

```javascript
const seen = args.reduce((map, currVal) => {
  return map.set(currVal, (map.get(currVal) || 0) + 1)
}, new Map())
```

- **Purpose:** This step creates a `Map` (`seen`) where:
  - Each key is a unique value from the `args` array.
  - Each value is the count (frequency) of that key in the `args` array.

- **Explanation:**
  - `map` is the accumulator (initially an empty `Map`).
  - `currVal` is the current value being processed from the `args` array.
  - `map.get(currVal)` retrieves the current count of `currVal` in the `Map`. 
    - If `currVal` is not yet in the `Map`, `map.get(currVal)` returns `undefined`, so `(map.get(currVal) || 0)` ensures it defaults to `0`.
  - `(map.get(currVal) || 0) + 1` increments the count of `currVal`.
  - `map.set(currVal, <new_count>)` updates the `Map` with the new count for `currVal`.

- **Result:** After this step, the `Map` contains all unique values from `args` with their respective frequencies.

---

### 2. **Converting the Map to an Array of Entries**

```javascript
[...seen.entries()]
```

- **Purpose:** Converts the `Map` into an array of `[key, value]` pairs (entries).
- **Result:** You now have an array where each entry represents a unique value (`key`) and its frequency (`value`).

---

### 3. **Filtering Unique Values**

```javascript
.filter(([_, value]) => value === 1)
```

- **Purpose:** Filters the array to include only entries where the frequency (`value`) is `1`.
  - These are the unique values in the `args` array.
- **Explanation:**
  - `filter` iterates over each `[key, value]` pair.
  - `value === 1` checks if the frequency of a value is exactly `1`.
- **Result:** An array of `[key, value]` pairs where `value === 1`.

---

### 4. **Reducing to a Sum of Unique Keys**

```javascript
.reduce((sum, [key, _]) => sum += key, 0)
```

- **Purpose:** Sums up the `key` values from the filtered array (i.e., the unique values).
- **Explanation:**
  - `sum` is the accumulator (initially `0`).
  - `[key, _]` destructures each `[key, value]` pair (the `_` ignores the `value` since it's not needed).
  - `sum += key` adds the `key` to the running total (`sum`).
- **Result:** The sum of all unique values from the `args` array.

---

## Example Walkthrough

Imagine the input `args` is:

```javascript
const args = [3, 1, 2, 3, 4, 2];
```

1. **Step 1 (Map of Frequencies):**
   - `seen` becomes:
     ```javascript
     Map(4) { 3 => 2, 1 => 1, 2 => 2, 4 => 1 }
     ```

2. **Step 2 (Array of Entries):**
   - `[...seen.entries()]` becomes:
     ```javascript
     [[3, 2], [1, 1], [2, 2], [4, 1]]
     ```

3. **Step 3 (Filter Unique Values):**
   - `.filter(([_, value]) => value === 1)` results in:
     ```javascript
     [[1, 1], [4, 1]]
     ```

4. **Step 4 (Sum Unique Keys):**
   - `.reduce((sum, [key, _]) => sum += key, 0)` computes:
     ```javascript
     0 + 1 + 4 = 5
     ```

---

## Final Output

For the input `args = [3, 1, 2, 3, 4, 2]`, the output is:

```javascript
5
```

---

## Summary

This code:
1. Creates a frequency map of the array.
2. Filters for unique values (frequency = 1).
3. Sums up the unique values.

The combination of `reduce`, `filter`, and `Map` makes the approach efficient and concise.
---

# Two Pointers

## **Valid Palindrome**

**Given a string s, return `true` if it is a palindrome, otherwise return `false`.**

**A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.**

- We need to check if the start and end are the same charaters.
- Split the string and remove all vlues that aren't a number or letter.
- Create pointers that have the left side and the right side.
- Iterate through the string and check if the left index and right index match.

