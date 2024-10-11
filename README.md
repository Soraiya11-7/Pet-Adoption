# **Pet Adoption Platform**

## **Short Description**  
The Pet Adoption Platform is a web application designed to help users find pets for adoption based on different categories. The portal has a user-friendly layout that allows users to browse, filter, and adopt pets while also offering important information about each animal. It offers a seamless experience for users seeking their perfect companion, utilizing modern ES6 JavaScript features and responsive design for all devices.


## **Key Features**

- **Immediate Category Overview**: When the web page is accessed, all category cards are fetched from the API and displayed after a 2-second loading spinner, providing users with a comprehensive view of categories.

- **Dynamic Category Buttons**: Four category buttons dynamically generated from the API allow users to filter pets based on their selected category.

    - **No Information Available Message**: If a selected category has no available pets, a message will inform the user that no information is available.

    - **Loading Spinner**: A loading spinner is displayed for 2 seconds when a category is selected, enhancing user experience while fetching data.

- **Interactive Pet Cards**: Each pet is displayed in a card format, showcasing essential information and action buttons. Each pet card includes three buttons (Like, Adopt, Details) for user interaction.
    - **Like Button**: Clicking the Like button displays the selected pet's image in a designated area on the right side of the screen.

    - **Adopt Button**: Clicking the Adopt button triggers a countdown modal with a congratulatory message. Once the countdown ends, the button is disabled and labeled "Adopted."

    - **Details Button**: A modal displaying detailed information about the pet (including image, name, breed, date of birth, gender, vaccination status, price) appears when the details button is clicked.  

- **Sort by Price**: A button that sorts the displayed pet cards by price in descending order, allowing users to find pets within their budget easily.

- **Responsive Design**: The web application is fully responsive, ensuring a smooth experience on desktop, tablet, and mobile devices.


## **ES6 Features Used**

- **Arrow Functions**
   - Used for defining short functions. The code uses arrow functions for concise function expressions, such as `const loadingSpin = () => {...}` , `const showImage = (image) => {...}` etc. 
   - **Example**:
     ```javascript
     const loadingSpin = () => {
         // Function body
     };
     ```

- **Template Literals**: 
   - Template literals are employed for string interpolation, allowing for easier multi-line strings and dynamic content.
    
    - **Example**:
     ```javascript
     detailContainer.innerHTML = `
         <h2 class="font-bold text-xl">${petData.pet_name}</h2>
     `;
     ```

- **Destructuring Assignment**: 
   - The destructuring assignment is an expression that makes it easy to extract values from arrays, or properties from objects, into distinct variables.
   
  - **Example**:  Array Destructuring
     ```javascript
     const [firstSentence, ...remainingSentences] = sentenceArray;
     ```

- **Promises with `async/await`**: 
   - The code makes asynchronous calls to fetch data using `async/await`, which makes the asynchronous code easier to read and maintain.
   - **Example**: 
     ```javascript
     const loadDetails = async (petId) => {
         const res = await fetch(url);
         const data = await res.json();
     };
     ```


- **`let` and `const` Declarations**: 
   - The code uses `const` for constants and `let` for variables that may change, promoting block scoping and reducing errors compared to `var`.
   - **Example**: 
   ```javascript
   let countDownValue = 3;
   const detailContainer = document.getElementById("modal-content");
   ```
  
- **String.endsWith()**:
    - The endsWith() method returns true if a string ends with a specified value, otherwise false. 

    - **Example**: 
    ```javascript  
    detailContainer.innerHTML += `<li class="text-sm md:text-base mb-0.5">${sentence.endsWith('.') ? sentence : sentence + '.'}</li>`;
     ```   
- **for..of Loop**
   - Used for iterating over iterable objects, such as arrays or strings, in a more readable way.
   - **Example**:
     ```javascript
     for(let b of btns){
      b.parentElement.classList.remove("active"); 
     }
     ```   

- **Spread (...) Operator**
   - Expands an iterable into more elements.
   - **Example**:
     ```javascript
     const [firstSentence, ...remainingSentences] = sentenceArray;
     ```

- **Array forEach() Method**
   - Used for iterating over arrays efficiently.
   - **Example**:
     ```javascript
     remainingSentences.forEach(sentence => {
         detailContainer.innerHTML += `<li class="text-sm md:text-base mb-0.5">${sentence.endsWith('.') ? sentence : sentence + '.'}</li>`;
     });
     ```

These features enhance readability, maintainability, and efficiency in modern JavaScript development.




## **Live Link**
Check out the live project [https://teal-longma-156da6.netlify.app/](https://teal-longma-156da6.netlify.app/).












