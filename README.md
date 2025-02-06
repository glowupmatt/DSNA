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

# Two Pointers

## **Valid Palindrome**

**Given a string s, return `true` if it is a palindrome, otherwise return `false`.**

**A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.**

- We need to check if the start and end are the same charaters.
- Split the string and remove all vlues that aren't a number or letter.
- Create pointers that have the left side and the right side.
- Iterate through the string and check if the left index and right index match.

