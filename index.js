// Load All categories Data and creating btn based on category......................................
const loadAllCategories = () =>{
    console.log("Load crated");
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => DisplayCategories(data.categories))  //call for display all categories data
    .catch((err) => console.log(err));
}


const DisplayCategories = (categories) =>{
    console.log(categories);
    const categoryContainer = document.getElementById('animal-container');

    categories.forEach(element => {
        const btnContainer = document.createElement("div");
        btnContainer.classList.add('w-full','rounded-2xl', 'border','border-[#0E7A8126]','flex','justify-center','items-center');
        btnContainer.id = 'category-btn-container';

        if(element.id === 4){ 
            btnContainer.innerHTML=
            `
             <button id="btn-${element.id}"  class="p-3 font-bold text-base md:text-lg lg:text-xl category-btn flex justify-center items-center"><span class="mx-3"><img src="https://img.icons8.com/?size=40&id=50533&format=png" alt="">
             </span>${element.category}s
             </button>
            `}

         else if(element.id === 2){
            
            btnContainer.innerHTML=
            `
             <button id="btn-${element.id}"  class="p-3 font-bold text-base md:text-lg lg:text-xl category-btn flex justify-center items-center"><span class="mx-3"><img src="https://img.icons8.com/?size=48&id=20903&format=png" alt="">
             </span>${element.category}s
             </button>
            `}

        else if(element.id === 3){ 
            btnContainer.innerHTML=
            `
             <button id="btn-${element.id}"  class="p-3 font-bold text-base md:text-lg lg:text-xl category-btn flex justify-center items-center"><span class="mx-4 h-4 w-4 lg:h-7 lg:w-7"><img class="w-full h-full" src="https://img.icons8.com/?size=80&id=zWQnJwqGetUQ&format=png" alt="">
             </span>${element.category}s
             </button>
            `}    
        else{
            btnContainer.innerHTML=
            `
             <button id="btn-${element.id}" class="p-3 font-bold text-base md:text-lg lg:text-xl category-btn flex justify-center items-center"><span class="mx-3"><img src="https://img.icons8.com/?size=48&id=ZGYXhUYK9ciX&format=png" alt="">
             </span>${element.category}s
             </button>
            `
        }      

        if (element.id === 1) {
            btnContainer.style.order = "2"; 
        } else if (element.id === 2) {
            btnContainer.style.order = "1"; 
        } else {
            btnContainer.style.order = element.id; 
        }

        categoryContainer.append(btnContainer);
    });   
}

loadAllCategories();