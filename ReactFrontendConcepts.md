# Frontend Development

---

### **1. Create Progress Bars with React that Auto-Fill Within 2000ms**

#### **Main Concept:**
- All animations are handled through **CSS** using the `transform` property.
- Conditionally render `classNames` using **state** to trigger the animation in **CSS**.
- Maintain a count using **state**:
  - Convert the count into an array using `Array(count).fill(null)`.
  - This allows us to map through the array in JSX.
- Create a **Progress Bar** component that is instantiated each time the user clicks "Add".
- Conditionally add a CSS class to animate the progress bar.

---
### **How It Works:**
1. **CSS Animation:**
   - The `.inner-bar` starts with `scaleX(0)`, making it invisible.
   - The `.inner-bar--filled` class applies `scaleX(1)`, smoothly filling the bar in **2000ms**.

2. **State Management:**
   - `bars` stores the list of progress bars.
   - `startTransition` triggers the animation.

3. **Rendering New Bars:**
   - When "Add Progress Bar" is clicked, a new bar is added to the list.
   - A slight delay (`setTimeout`) ensures the class transition is applied.

---
