# Array and Dictionary Operations in Python

---

### **1. No `.contains()` or `.has()` method like in JavaScript**

- In **JavaScript**, to check if an item exists in an array or object, you can use `.contains()` for arrays and `.has()` for objects.
- In **Python**, there is **no `.contains()` or `.has()`** method for these operations. Instead, you can use the `in` keyword to check if an item exists in a list, dictionary, or other collections.

  **Example:**
  ```python
  nums = [1, 2, 3]
  if 2 in nums:  # Checks if 2 is in the list `nums`
      print("Found")
  ```

---

### **2. `if num in nums`**

- The `in` keyword is used in Python to check membership. For example, `num in nums` checks if the value `num` exists in the list or dictionary `nums`.
- This is equivalent to checking if an element exists in an array in JavaScript (`nums.includes(num)`).

  **Example:**
  ```python
  nums = [1, 2, 3]
  if 2 in nums:
      print("Found")  # This will print "Found"
  ```

---

### **3. Don't use `.update()` method for adding new values**

- The `.update()` method in Python is used for **merging dictionaries**, not adding a single value.
- If you want to add a new key-value pair to a dictionary, use the assignment method (`dict[key] = value`), not `.update()`.

  **Example (Incorrect usage):**
  ```python
  my_dict = {'a': 1}
  my_dict.update('b', 2)  # This will raise an error, as `.update()` expects a dict, not individual key-value pairs.
  ```

  **Correct way:**
  ```python
  my_dict = {'a': 1}
  my_dict['b'] = 2  # Correct way to add a new key-value pair
  ```

---

### **4. Get the length of an item using `range()` and `len()`**

- **`len()`**: Used to get the length of an object (like a list or string).
- **`range()`**: Used to generate a sequence of numbers, commonly used with `for` loops. When you use it in combination with `len()`, it generates indices for the items in an iterable.

  **Example:**
  ```python
  nums = [1, 2, 3]
  for i in range(len(nums)):  # Iterate through the indices of the list
      print(i, nums[i])  # Prints index and value: 0 1, 1 2, 2 3
  ```

---

### **5. Dictionaries in Python are unordered collections (before Python 3.7)**

- **Dictionaries** in Python are **unordered** collections of key-value pairs. Before Python 3.7, dictionaries did not maintain insertion order. Starting with Python 3.7, dictionaries **do** preserve the order of insertion.
  
- The `==` operator compares two dictionaries by checking:
  - **If the keys are the same**: The dictionaries must have the same keys.
  - **If the values for each key match**: Each key's corresponding value must be the same.
  - The **order of key-value pairs** doesn't matter in the comparison.

  **Example:**
  ```python
  dict1 = {'a': 1, 'b': 2}
  dict2 = {'b': 2, 'a': 1}
  print(dict1 == dict2)  # True, because they have the same keys and values, even though the order is different
  ```

---

### **6. For loop to get the index: `for i in range(len())`**

- To iterate through the indices of a collection like a list, you can use the `range(len())` pattern. `len()` gets the length of the collection, and `range()` generates a sequence of numbers (indices).

  **Example:**
  ```python
  nums = [10, 20, 30]
  for i in range(len(nums)):  # This will iterate through the indices 0, 1, 2
      print(i, nums[i])  # Prints index and value: 0 10, 1 20, 2 30
  ```

---

### **7. `.push()` in JavaScript → `.append()` in Python**

- In **JavaScript**, you can use `.push()` to add an element to the end of an array.
- In **Python**, you use `.append()` to add an item to the end of a list.

  **Example (in Python):**
  ```python
  nums = [1, 2, 3]
  nums.append(4)  # Adds 4 to the end of the list
  print(nums)  # Output: [1, 2, 3, 4]
  ```

---

### **8. `range()` method has `start`, `stop`, and `step`**

- The **`range()`** method in Python can take three arguments:
  - **start**: The starting value (default is 0).
  - **stop**: The end value (exclusive).
  - **step**: The step between each number (default is 1).

  **Example:**
  ```python
  for i in range(1, 10, 2):  # Starts at 1, ends before 10, steps by 2
      print(i)  # Output: 1, 3, 5, 7, 9

  arr = [1,2,3,4,5]
  
  for i in range(len(arr) -1, 0, -1):
      print(i)  # Output: 5, 4, 3, 2, 1
  ```

---

### **9. `reversed()` method**

The **`reversed()`** function in Python returns a **reversed iterator** of a given sequence (like a list, tuple, or string) **without modifying the original sequence**.

### **Syntax:**
```python
reversed(sequence)
```

### **Example with a List:**
```python
arr = [1, 2, 3, 4, 5]
rev_arr = list(reversed(arr))
print(rev_arr)  
```
**Output:**
```
[5, 4, 3, 2, 1]
```

### **Example with a String:**
```python
s = "hello"
rev_s = "".join(reversed(s))
print(rev_s)  
```
**Output:**
```
"olleh"
```

### **Key Differences Between `reverse()` and `reversed()`:**
| Feature        | `reverse()` (Method)  | `reversed()` (Function) |
|---------------|----------------------|-------------------------|
| Modifies original list? | ✅ Yes | ❌ No |
| Returns a new list? | ❌ No (modifies in place) | ✅ Yes (returns an iterator) |
| Works on strings? | ❌ No | ✅ Yes |
| Syntax | `list.reverse()` | `reversed(iterable)` |

---
### **10. `defaultdict()`**

Using `defaultdict(int)` is helpful in cases where you need to count occurrences of elements or handle missing keys gracefully, but it’s not always the best approach for every array problem that involves a hashmap. The best approach depends on the specific problem.  

### **When `defaultdict(int)` is Useful**  
1. **Counting Frequencies**  
   - Problems like finding duplicates, majority elements, or counting occurrences benefit from `defaultdict(int)`.  
   - Example:
     ```python
     from collections import defaultdict
     
     nums = [1, 2, 2, 3, 3, 3]
     count = defaultdict(int)
     for num in nums:
         count[num] += 1
     print(count)  # {1: 1, 2: 2, 3: 3}
     ```
  
2. **Checking for Missing Keys**  
   - When checking if an element exists without manually handling `KeyError`.  
   - Example: Checking if a complementary number exists in a two-sum problem.

### **When a Regular `dict` is Better**  
1. **Explicit Key Presence Handling**  
   - If missing keys should raise an error, a regular `dict` forces you to handle cases explicitly, making the logic clearer.  

2. **Hashmaps with More Complex Default Values**  
   - If you need a complex default value (e.g., an object or function return), using `setdefault()` or manually initializing keys might be clearer.  
   - Example (avoiding `defaultdict` when an initial computation is needed):  
     ```python
     hash_map = {}
     for num in nums:
         if num not in hash_map:
             hash_map[num] = expensive_computation(num)
     ```

### **When `Counter` is Better**  
If the goal is purely counting elements, `collections.Counter` is often a better alternative:  
```python
from collections import Counter
nums = [1, 2, 2, 3, 3, 3]
count = Counter(nums)
print(count)  # Counter({3: 3, 2: 2, 1: 1})
```
`Counter` is optimized for this use case and provides useful methods like `.most_common()`.

### **Best Practices for Array Problems Using HashMaps**  
- **If counting elements → `Counter` is usually best.**  
- **If handling missing keys with a default integer → `defaultdict(int)`.**  
- **If simply mapping keys to values without needing a default → Regular `dict`.**  
- **If needing a default list/set → `defaultdict(list)` or `defaultdict(set)`.**

----

### **11. `enumerate()`**

#### **Example 3: Using `enumerate()`**
Your original approach used:

```python
for i in range(len(nums)):
    num = nums[i]
```

✅ **Better with `enumerate()`:**
```python
for i, num in enumerate(nums):
```

This improves readability by:
- Avoiding `range(len(nums))`
- Making `num` directly available

---

### **12. Using f-strings (Python 3.6+)**

```python
num = 456
num_str = f"{num}"

print(num_str)  # Output: '456'
```
---

### **13. The `//` operator in Python is **floor division**, which ensures the result is always an **integer**.**

### Difference Between `/` and `//`:  
1. `/` (regular division) returns a **floating-point number**  
   ```python
   mid = (5 + 10) / 2
   print(mid)  # Output: 7.5 (float)
   ```
2. `//` (floor division) returns an **integer**  
   ```python
   mid = (5 + 10) // 2
   print(mid)  # Output: 7 (int)
   ```

### Why Use `//` in Binary Search?  
Binary search relies on integer indices, so `mid` must always be an integer. Using `/` could result in a float, which would cause errors when accessing list indices.  

So, always use `//` when calculating the midpoint in binary search! 🚀


