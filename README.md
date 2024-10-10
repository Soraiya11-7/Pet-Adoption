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

- **Arrow Functions**: 
   - The code uses arrow functions for concise function expressions, such as `const loadingSpin = () => {...}` and `const showImage = (image) => {...}`. Arrow functions allow for shorter syntax and lexically bind the `this` value.

- **Template Literals**: 
   - Template literals are employed for string interpolation, allowing for easier multi-line strings and dynamic content. For example:
     ```javascript
     detailContainer.innerHTML = `
         <h2 class="font-bold text-xl">${petData.pet_name}</h2>
     `;
     ```

- **Destructuring Assignment**: 
   - Destructuring is used for extracting values from objects or arrays. For instance, `const { pet_name, breed, gender } = petData;` allows for direct access to the properties of `petData`.

- **Promises with `async/await`**: 
   - The code makes asynchronous calls to fetch data using `async/await`, which makes the asynchronous code easier to read and maintain. For example:
     ```javascript
     const loadDetails = async (petId) => {
         const res = await fetch(url);
         const data = await res.json();
     };
     ```


- **`let` and `const` Declarations**: 
   - The code uses `const` for constants and `let` for variables that may change, promoting block scoping and reducing errors compared to `var`.

- **Array Methods**: 
    - Methods like `map()`and `forEach()` are frequently used to manipulate arrays in a functional programming style, contributing to cleaner and more expressive code.

These features enhance readability, maintainability, and efficiency in modern JavaScript development.




## **Live Link**
Check out the live project [http://example.com/pet-adoption-platform](http://example.com/pet-adoption-platform).












