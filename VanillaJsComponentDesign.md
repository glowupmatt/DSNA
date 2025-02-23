## **Understanding Component Creation with IIFE and Observer Pattern**  

When creating a component, we follow a structured approach using an **Immediately Invoked Function Expression (IIFE)** to encapsulate the logic. This helps maintain a clean and modular structure similar to how React components function.  

### **1️⃣ Component Structure**  
A component consists of three main functions:  
1. **`init()`** → Creates the initial DOM elements.  
2. **`event()`** → Handles event listeners (e.g., `onClick`).  
3. **`update()`** → Rerenders elements when the state changes.  

If our component has state, we use the **Observer Pattern**, which mimics **React's `useState` and `useEffect` hooks**.

---

## **2️⃣ Implementing the Observer Pattern**  
The **Observer Pattern** allows our component to react to state changes dynamically. The idea is:  
- Components subscribe to state updates.  
- When the state changes, all subscribers are notified and re-render.  

---

## **3️⃣ Full Example: Counter Component**  

```js
(() => {
  class Observer {
    constructor(defaultValue) {
      this.value = defaultValue;
      this.observers = new Set();
    }

    subscribe(observer) {
      this.observers.add(observer);
    }

    setValue(value) {
      this.value = value;
    }

    getValue() {
      return this.value;
    }

    notify() {
      this.observers.forEach((observer) => observer()); // Mimics useEffect()
    }
  }

  function createCounter($rootEl) {
    const count = new Observer(0);
    $rootEl.classList.add("counter-container");

    const $display = document.createElement("p");
    $display.innerText = count.getValue();
    $rootEl.append($display);

    function update() {
      $display.innerText = count.getValue(); // Updates only the number
    }

    function event() {
      $rootEl.addEventListener("click", (event) => {
        if (event.target.dataset.action === "increment") {
          count.setValue(count.getValue() + 1);
        }
        if (event.target.dataset.action === "decrement") {
          count.setValue(count.getValue() - 1);
        }
      count.notify() // triggers the reRender like useEffect as the notify calls all the functions subscribed to the class
      });
    }

    function init() {
      const $buttonContainer = document.createElement("div");

      const $incrementButton = document.createElement("button");
      $incrementButton.dataset.action = "increment";
      $incrementButton.innerText = "Increment +";

      const $decrementButton = document.createElement("button");
      $decrementButton.dataset.action = "decrement";
      $decrementButton.innerText = "Decrement -";

      $buttonContainer.append($incrementButton, $decrementButton);
      $rootEl.append($buttonContainer);
    }

    init();
    event();
    update();
    count.subscribe(update); // Subscribes to state changes
  }

  createCounter(document.querySelector("#counter"));
})();
```

---

## **4️⃣ How This Mimics React’s `useState` & `useEffect`**
| **React Hook**  | **Our Implementation** |
|-----------------|-----------------------|
| `useState(0)`   | `const count = new Observer(0);` |
| `useEffect()`   | `count.subscribe(update);` |
| `setCount(n + 1)` | `count.setValue(count.getValue() + 1);` |

---

## **5️⃣ Summary**
✅ **Encapsulate the component inside an IIFE.**  
✅ **Use three main functions:**  
   - `init()` → Sets up the initial DOM.  
   - `event()` → Adds event listeners.  
   - `update()` → Rerenders elements when state changes.  
✅ **Use the Observer Pattern** to manage state changes, mimicking React’s `useState` & `useEffect`.  

---

This pattern is a great way to structure modular JavaScript components efficiently. 🚀 Let me know if you'd like refinements!
