# Event Delegation in JavaScript

## Understanding the Concept  

Instead of adding an event listener to each `<button>`, you can attach a **single** event listener to the parent `<ul>`. This is known as **event delegation**.

### Example HTML:
```html
<ul class="user-list">
  <li><button data-userid="user1">User 1</button></li>
  <li><button data-userid="user2">User 2</button></li>
</ul>
```

### JavaScript with Event Delegation:
```javascript
const list = document.querySelector('.user-list');

list.addEventListener('click', event => {
  if (event.target.dataset.userid) {
    console.log(`Clicked user: ${event.target.dataset.userid}`);
  }
});
```

### How It Works:
1. The `click` event bubbles up from the `<button>` to the `<ul>`.
2. The event listener on `<ul>` captures the event.
3. It checks if `event.target` (the clicked element) has a `data-userid` attribute.
4. If yes, it logs the corresponding user ID.

## Why Use Event Delegation?
✅ **Efficiency** – Only **one** event listener instead of multiple, reducing memory usage.  
✅ **Handles Dynamic Elements** – If new buttons are added dynamically, they will still work without needing additional event listeners.  

# Multiple Elements in a Parent

## Execution

Instead of creating individual variables like: 
```javascript
      const $parentDiv = document.createElement("div");
      $parentDiv.classList.add("parent-div");
      const $btnContainer = document.createElement("div");
      $btnContainer.classList.add("btn-container");
      const $descContainer = document.createElement("div");
      $descContainer.classList.add("desc-container");
```
We can create an object like:

```javascript
      const $parentDiv = document.createElement("div");
      const DOM = {
        $tabBar: document.createElement('div'),
        $tabpanels: document.createElement('div'),
      };
      $parentDiv.appendChild(DOM.$tabBar);
      $parentDiv.appendChild(DOM.$tabpanels);
```


# 📌 Observer Pattern in Vanilla JavaScript Tabs Component

## 🚀 What is the Observer Pattern?
The **Observer Pattern** is a design pattern where an **observable object** maintains a list of dependents (**observers**) and notifies them of any state changes. It promotes **loose coupling**, making it easier to extend and maintain code.

In **JavaScript**, this is commonly used in event-driven programming where multiple components need to react to a single event.

---

## 🛠 Implementing the Observer Pattern in a Tabs Component

### 🔹 **Step 1: Create an Observable Class**
We define an `Observable` class that allows objects to **subscribe** and **react** when the state changes.

```js
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(sub => sub !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer(data));
  }
}
```

- `subscribe(observer)`: Adds a new observer (callback function).
- `unsubscribe(observer)`: Removes an observer.
- `notify(data)`: Calls all subscribed observers with the provided data.

---

### 🔹 **Step 2: Modify the Tabs Component to Use Observers**
We integrate the `Observable` class into our **tabs component** to notify observers whenever the active tab changes.

```js
(() => {
  function tabs($rootEl, { defaultValue, items: itemsParam }) {
    const DOM = {
      $tabBar: document.createElement("div"),
      $tabpanels: document.createElement("div"),
    };

    const items = itemsParam;
    const state = {
      value: defaultValue || items[0].value,
    };

    // Create an observable instance
    const tabObservable = new Observable();

    function update() {
      const $tabsFragment = document.createDocumentFragment();
      items.forEach(({ label, value: itemValue }) => {
        const $tabEl = document.createElement("button");
        const isTabActive = itemValue === state.value;

        $tabEl.textContent = label;
        $tabEl.type = "button";
        $tabEl.setAttribute("data-value", itemValue);
        $tabEl.classList.add("tabs-list-item");

        if (isTabActive) {
          $tabEl.classList.add("tabs-list-item--active");
        }

        $tabsFragment.appendChild($tabEl);
      });

      DOM.$tabBar.innerHTML = "";
      DOM.$tabBar.appendChild($tabsFragment);

      const $tabpanelsFragment = document.createDocumentFragment();
      items.forEach(({ panel, value: itemValue }) => {
        const isTabActive = itemValue === state.value;

        const $tabpanelEl = document.createElement("div");
        $tabpanelEl.textContent = panel;
        $tabpanelEl.hidden = !isTabActive;

        $tabpanelsFragment.appendChild($tabpanelEl);
      });

      DOM.$tabpanels.innerHTML = "";
      DOM.$tabpanels.appendChild($tabpanelsFragment);

      // 🔥 Notify observers when the tab changes
      tabObservable.notify(state.value);
    }

    function attachEvents() {
      // Use Event Delegation
      DOM.$tabBar.addEventListener("click", (event) => {
        if (event.target.tagName !== "BUTTON") {
          return;
        }

        state.value = event.target.getAttribute("data-value");
        update();
      });
    }

    function init() {
      $rootEl.classList.add("tabs");

      DOM.$tabBar.className = "tabs-list";
      $rootEl.appendChild(DOM.$tabBar);
      $rootEl.appendChild(DOM.$tabpanels);
    }

    init();
    update();
    attachEvents();

    return {
      subscribe: tabObservable.subscribe.bind(tabObservable),
      unsubscribe: tabObservable.unsubscribe.bind(tabObservable),
    };
  }

  // 🔹 Initialize Tabs
  const tabComponent = tabs(document.getElementById("tabs"), {
    items: [
      {
        value: "html",
        label: "HTML",
        panel:
          "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
      },
      {
        value: "css",
        label: "CSS",
        panel:
          "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
      },
      {
        value: "javascript",
        label: "JavaScript",
        panel:
          "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
      },
    ],
  });

  // 🔥 Subscribe an external function to listen for tab changes
  tabComponent.subscribe((newTab) => {
    console.log(`Tab changed to: ${newTab}`);
  });

})();
```

---

## 🎯 **How the Observer Pattern Improves the Tabs Component**
✔ **Decouples UI logic** – External functions can listen for tab changes without modifying the component.  
✔ **Easier to extend** – If we later want to track analytics or update another UI element when a tab changes, we simply **subscribe a new function**.  
✔ **Real-time updates** – Components dynamically react to changes without modifying the original `tabs` function.  

---

## 🔥 **Example: Subscribing Another Component**
You can easily subscribe a function to track tab changes and update the UI dynamically.

```js
tabComponent.subscribe((newTab) => {
  document.getElementById("log").textContent = `Current Tab: ${newTab}`;
});
```

This will update a `<div id="log"></div>` element every time the user switches tabs.

---

## 🚀 **Final Thoughts**
By integrating the **Observer Pattern**, your tabs component becomes **more modular, maintainable, and extensible**.  
Now, other parts of your app can react to tab changes **without modifying the core component**! 🎯  
