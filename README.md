# 🚀 DevStack Builder

A modern and interactive web application where users can explore different technologies and build their own personalized tech stack. Users can browse technology cards, select the technologies they want to learn or use, and manage their selected stack through an interactive interface.


## 🛠️ Technologies Used

- **React.js** — For building the user interface and components.
- **TypeScript / JavaScript (ES6+)** — For application logic and type-safe code.
- **Tailwind CSS / DaisyUI** — For styling and responsive UI.
- **React-Toastify** — For displaying toast notifications.
- **React Icons** — For using icons throughout the interface.
- **JSON** — For storing technology data.
- **Vite** — As the build tool and development server.
- **Netlify** — For deployment.



## ✨ Features

### 1. Explore Technologies
- User can explore 10+ technologies with details like category, difficulty, rating, description, and badge.
- Clean and user-friendly card layout.

### 2. Dynamic Stack Management
- Add technologies to your personal stack with real-time count updates.
- Remove individual items or clear the entire stack with a single click.
- Users cannot add the same technology twice as the `✓ Added to Stack` button becomes disabled.

### 3. Notifications, Loading & Responsiveness
- Instant Toast messages when adding, removing, or clearing items.
- Smooth loading spinner while fetching project data. 
- Fully responsive design optimized for Mobile, Tablet, and Desktop screens.




💡React Questions and Answers

### 1. What is JSX, and why is it used in React?
- JSX (JavaScript XML) allows me to write HTML-like elements directly inside JavaScript code.
- I use JSX in React because it makes building UI components easier to read, write, and maintain.

---

### 2. What is the difference between props and state?
- **Props:** Data that I pass from a parent component to a child component, which is read-only.
- **State:** Internal data that I manage inside a component to handle dynamic user interactions and UI updates.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
- The `useState` hook lets me manage dynamic data within a component.
- In this project, I used it to store the technology list fetched from JSON, track items added to Your Stack, and handle the loading state.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
- The `useEffect` hook allows me to perform side effects in components.
- I used it here to fetch the technology data from a local JSON file when the app first loads.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
- I assign a unique `key` prop so React can efficiently track which items in the list change, get added, or get removed.
- This helps React update the UI correctly and efficiently.

---

### 6. What is conditional rendering? Show one place you used it.
- Conditional rendering means rendering different UI elements based on a specific condition.
- Example: I used a ternary operator to show an empty stack message when no technologies are selected:

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackList items={stack} />
)}
```

---

### 7. How do you pass data from parent to child, and how does a child send data back?
- **Parent to Child:** I pass data down directly using custom Props.
- **Child to Parent:** I pass a callback function from the parent to the child as a prop, which the child calls to send data back to the parent.