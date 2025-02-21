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

# State Manipulation

Create a State object that will hold all the data
```javascript
const state = {
  value: defaultValue,
};
```
Now we can manipulate the value in the object and make the code more dynamic.


