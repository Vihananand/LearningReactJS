## ReactJS Notes

### 1. In React there are ***two*** types of components

- #### *Class based components*

- #### *Function based components*

---

### 2. While rendering a list from an array in jsx we need to provide a unique *key* for each *li* tag. For example

```jsx
const dummyProductData = ["Product1", "Product2", "Product3"]

function ProductList(){
    return(
        <div>
            <h2>E-Commerce Website</h2>
            <ul>
                {
                    dummyProductData.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    );
}
```

### The key tag inside li tag keep the track of index of the array

---

### 3. **Interview Question:** Why should not we keep indexes as the keys for li tag??

### Ans: Using indexes as keys in React's list rendering is generally discouraged because it can lead to performance issues and bugs, especially when the list is dynamic (items are added, removed, or reordered). Here’s why

- ### **1. Incorrect DOM Reconciliation:** React uses keys to determine which elements in a list have changed, been added, or been removed. If you use indexes as keys

    - ### When the list changes (e.g., items are inserted or deleted), React may not correctly identify which items have changed.

    - ### React may incorrectly reuse the DOM elements associated with the wrong data. This can result in incorrect behavior, like maintaining state or DOM properties for the wrong item.

  ### **Example:** Imagine a list of items

    ```jsx
    ["Apple", "Banana", "Cherry"];
    ```

  ### If you delete "Banana", the index of "Cherry" changes from 2 to 1. If you use the index as the key, React might reuse the DOM element that was associated with "Banana" for "Cherry", causing incorrect data to display or mismatched states.

- ### **2. Performance Optimization Issues:** Keys allow React to efficiently update the DOM by only re-rendering elements that have changed. If you use indexes as keys, React has no way of distinguishing between items that are actually different and items that have simply shifted position. This can cause React to unnecessarily re-render large parts of the UI when it could have skipped parts.

  ### **Example:** If you add an item to the beginning of the list, all subsequent items will get new index keys, which forces React to re-render the entire list, even though most items are the same.

- ### **3. Preserving Component State:** Components that rely on internal state (like input fields or toggles) will lose their state when their index changes. React associates the state with the key, so if the key changes, the state is reset.

  ### Example: If you have a list of input fields with indexes as keys, reordering or adding a new input could reset the content of all the inputs because the keys (indexes) would no longer match.

---

### **3.1. When is it okay to use indexes as keys?**

- ### When the list is static and will never change (i.e., no new items will be added, removed, or reordered).

- ### When the list is short and performance is not a concern.

---

