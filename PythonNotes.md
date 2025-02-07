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
  ```

---

### **Summary:**
- In Python, use the `in` keyword to check for membership instead of `.contains()` or `.has()`.
- Use `.append()` to add elements to a list, and `dict[key] = value` to add new key-value pairs to a dictionary.
- Use `range(len())` to iterate over indices.
- Python dictionaries are unordered collections (before 3.7) and use `==` to compare key-value pairs, not the order.
- `range()` has three arguments: `start`, `stop`, and `step` for more control over iteration.
