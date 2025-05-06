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

Would you like me to create a cheat sheet version of this?


# Two Pointers

## **Valid Palindrome**

**Given a string s, return `true` if it is a palindrome, otherwise return `false`.**

**A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.**

- We need to check if the start and end are the same charaters.
- Split the string and remove all vlues that aren't a number or letter.
- Create pointers that have the left side and the right side.
- Iterate through the string and check if the left index and right index match.

