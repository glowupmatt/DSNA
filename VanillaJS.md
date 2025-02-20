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

