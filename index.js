
const loadingSpin = () =>{
    const loading = document.getElementById('loading');
    // const dataContainer = document.getElementById('data-container');
    const dataContainer = document.getElementById('animal-details-container');
    
    loading.classList.remove('hidden');
    loading.classList.add('block');
    dataContainer.classList.add('hidden');
    
    setTimeout(function() {
        loading.classList.add('hidden');
        loading.classList.remove('block');
        dataContainer.classList.remove('hidden');
    
    }, 2000);
    return 
}
const showImage = (image) => {
    // console.log(image);
    // md:h-[80px] lg:h-[130px]
    const imageContainer = document.getElementById('img-container');
    imageContainer.innerHTML += 
    `
         <div class="h-auto md:max-h[180px] border border-[#1313131A] rounded-lg my-0 py-0">
            <img class="w-full h-full object-cover rounded-lg" src="${image}" alt="">
        </div>
    `;
}

// loadDetails.......................................
const loadDetails = async (petId) =>{
    const url = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.petData);

}
const displayDetails = (petData) =>{

    const detailContainer = document.getElementById("modal-content");
    const sentenceArray = petData.pet_details.split(". ");
    // const firstSentence = sentenceArray[0] + ".";

    const [firstSentence, ...remainingSentences] = sentenceArray;

    // const remainingSentences = sentenceArray.slice(1).map(s => {
    //     let tSentence = s.trim();
    //     return tSentence.endsWith('.') ? tSentence : tSentence + '.';
    // });

    detailContainer.innerHTML= 
    `
    <img class="h-full w-full object-cover"
            src=${petData.image}
            alt="img" />
     
            <h2 class="font-bold text-xl text-[#131313] mb-2 mt-4 font-inter">${petData.pet_name? petData.pet_name : 'Not Found'}</h2>
        <div class="px-0 w-[90%] mb-2 flex flex-col sm:flex-row justify-start gap-2 sm:gap-8">
        
            <div>
                <div class="flex items-center gap-1 mb-2 h-5">
                    <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                        <img class="h-full object-contain" src="https://img.icons8.com/?size=24&id=kskqOgaMPJTm&format=png"/>
                    </div>
                    <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                        <h3 class="h-full font-normal text-sm sm:text-lg md:text-sm text-[#131313B3] mb-2">Breed: ${petData.breed? petData.breed : 'Not Found'}</h3>
                    </div>
                </div> 

                <div class="flex items-center gap-1 mb-2 h-5">
                    <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                        <img class="h-full object-contain" src="https://img.icons8.com/?size=30&id=77882&format=png"/>
                    </div>
                    <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                        <h3 class="h-full font-normal text-sm sm:text-lg md:text-sm text-[#131313B3] mb-2">Gender: ${petData.gender? petData.gender : 'Not Found'}</h3>
                    </div>
                </div>

                <div class="flex items-center gap-1 mb-2 h-5">
                    <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                        <img class="h-full object-contain" src="https://img.icons8.com/?size=30&id=aY7opuTeQwTH&format=png"/>
                    </div>
                    <div class = "h-4 flex items-center">
                        <h3 class="h-3 sm:h-5 md:h-3 font-normal text-sm sm:text-lg md:text-sm text-[#131313B3] mb-2">Vaccinated status: ${petData.vaccinated_status? petData.vaccinated_status : 'Not Available' }</h3>
                    </div>
                 </div> 
            </div>


            <div>
                <div class="flex items-center gap-1 mb-2 h-5">
                    <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                        <img class="h-full object-contain" src="https://img.icons8.com/?size=16&id=e6uFgdVTiU4v&format=png"/>
                    </div>
                    <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                        <h3 class="h-full font-normal text-sm sm:text-lg md:text-sm text-[#131313B3] mb-2">Birth: ${petData.date_of_birth? petData.date_of_birth.split('-')[0] : 'Not Available' }</h3>
                    </div>
               </div> 

            

               <div class="flex items-center gap-1 mb-2 h-5">
                    <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                        <img class="h-full object-contain" src="https://img.icons8.com/?size=24&id=89392&format=png"/>
                    </div>
                    <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                        <h3 class="h-full font-normal text-sm sm:text-lg md:text-sm text-[#131313B3] mb-2">Price: ${petData.price? petData.price+'$' : 'Not Available'}</h3>
                    </div>
                </div>

            </div>
        </div>
     <hr>       
     <h3 class="text-lg font-semibold mt-4 mb-1.5 md:mb-3 font-inter">Details Information</h3>       
     <p class="py-3 text-sm md:text-base font-inter">${firstSentence}.</p>       
    `;
//   let innerData = ``;
    if (remainingSentences.length > 0) {
        detailContainer.innerHTML += '<ul class="pl-5 w-[70%] mx-auto ">';
        remainingSentences.forEach(sentence => {
            detailContainer.innerHTML += `<li class="text-sm md:text-base mb-0.5 font-inter">${sentence.endsWith('.') ? sentence : sentence + '.'}</li>`;
        });
        detailContainer.innerHTML += '</ul>';
    }
    document.getElementById("detailsModal").showModal();
}

// ......................................................
const removeActiveClass = () =>{
    const btns = document.getElementsByClassName("category-btn");
    for(let b of btns){
        b.parentElement.classList.remove("active");
        b.parentElement.classList.add("rounded-2xl",'border','border-[#0E7A8126]');
    }

}

// countDown Modal....................................
const displayCountDownModal = (adoptBtn) =>{

    const countDownContainer = document.getElementById("countDownModal");
    countDownContainer.classList.remove('hidden');
    countDownContainer.classList.add('block');

    const countdownElement = document.getElementById('count-down');
    let countDownValue = 3;
    countdownElement.innerText = countDownValue;
  
    const modalElement = document.getElementById("my_modal_1");
    if (modalElement && typeof modalElement.showModal === 'function') {
        modalElement.showModal(); 
    }
     const disableBtn = document.getElementById(`adopt-${adoptBtn}`);
     
    const countdownInterval = setInterval(() => {
        countDownValue--;
       
        if (countDownValue > 0) {
            countdownElement.innerText = countDownValue;  
        }
        // Close the modal and stop the countdown 
        if (countDownValue === 0) {
            // clearInterval(countdownInterval);
            countDownContainer.classList.add('hidden');
            countDownContainer.classList.remove('block');
            if (modalElement && typeof modalElement.close === 'function') {
                 modalElement.close();
                }     
                disableBtn.disabled = true;
                disableBtn.innerText = 'Adopted';
                disableBtn.classList.remove('text-[#0E7A81]');
                disableBtn.classList.add('text-white')
                disableBtn.parentElement.classList.remove('hover:bg-[#0E7A81]');
                disableBtn.parentElement.classList.add('bg-gray-400');     
        }
    }, 1000); 
    
}

// loadCategory................................................
const loadCategoryCardBasedOnId = (id , categoryName) =>{

    removeActiveClass();
    const activeBtn = document.getElementById(`btn-${id}`);
    activeBtn.parentElement.classList.add("active");
    activeBtn.parentElement.classList.remove("rounded-2xl",'border','border-[#0E7A8126]','hover:border-[#0E7A81]');

    loadingSpin();

    fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`)
    .then((res) => res.json())
    .then((data) => {
       displayCategoriesData(data.data);
    })
    .catch((err) => console.log(err));
}

// ..................Load All Data(Card).......................................
const loadAllData = () =>{
    loadingSpin();
//   console.log('loading done');
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then((res) => res.json())
    .then((data) => displayCategoriesData(data.pets))
    .catch((err) => console.log(err));
}

// ........................displayCard..............................................
const displayCategoriesData = (data) =>{
    // console.log(data);
    const animalContainer = document.getElementById('animal-content');
    // console.log(animalContainer);
    animalContainer.innerHTML= "";

    const sortButton = document.getElementById('sort-by-price');
    if(data.length === 0){
        animalContainer.classList.remove("grid");
        animalContainer.parentElement.classList.add('bg-[#13131308]','rounded-3xl','flex','flex-col', 'justify-center', 'items-center','h-auto');
        animalContainer.innerHTML = `
        <div class="w-[90%] mx-auto flex flex-col justify-center items-center my-8">
            <img class="mb-3"
                src="./images/error.webp"
                alt="img" />
            <h2 class="text-base md:text-2xl lg:text-3xl font-bold mb-3 font-inter">No Information Available</h2>
            <p class="text-xs md:text-sm lg:text-base w-full md:w-[80%] font-normal text-[#131313B3] text-center">At this moment, there is no information available regarding your query; we appreciate your understanding and patience in this matter.</p>
        </div>`;
        
       
         sortButton.disabled = true;
         sortButton.classList.add('bg-gray-200');
        
        return;
    }
    else{
        sortButton.disabled = false;
        sortButton.classList.remove('bg-gray-200');

        animalContainer.classList.add("grid");
        animalContainer.parentElement.classList.remove('bg-[#13131308]','rounded-3xl','flex', 'justify-center', 'items-center','h-screen');
    }
    let i = 1;
    data.forEach(element => {
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.classList.add('border', 'border-[#1313131A]','rounded-xl', 'p-3', 'hover:border-[#0E7A81]');

        card.innerHTML = 
        `
        <figure class= " h-auto md:h-[180px] mb-6">
            <img class="h-full w-full object-cover rounded-lg"
            src=${element.image}
            alt="img" /> 
        </figure>

        <div class="px-0 mb-2">
            <h2 class="font-bold text-lg sm:text-2xl md:text-xl text-[#131313] mb-2 font-inter">${element.pet_name? element.pet_name : 'Not Found'}</h2>

            <div class="flex items-center gap-1 mb-2 sm:mb-3 md:mb-2 h-5">
                <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                    <img class="h-full object-contain" src="https://img.icons8.com/?size=24&id=kskqOgaMPJTm&format=png"/>
                </div>
                <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                    <h3 class="h-full font-normal text-sm sm:text-lg md:text-sm text-[#131313B3] mb-2">Breed: ${element.breed? element.breed : 'Not Found'}</h3>
                </div>
            </div> 

             <div class="flex items-center gap-1 mb-2 sm:mb-3 md:mb-2 h-5">
                <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                    <img class="h-full object-contain" src="https://img.icons8.com/?size=16&id=e6uFgdVTiU4v&format=png"/>
                </div>
                <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                    <h3 class="h-full font-normal text-sm sm:text-lg md:text-sm text-[#131313B3] mb-2">Birth: ${element.date_of_birth? element.date_of_birth.split('-')[0] : 'Not Available' }</h3>
                </div>
            </div> 

            <div class="flex items-center gap-1 mb-2 sm:mb-3 md:mb-2 h-5">
                <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                    <img class="h-full object-contain" src="https://img.icons8.com/?size=30&id=77882&format=png"/>
                </div>
                <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                    <h3 class="h-full font-normal text-sm sm:text-lg md:text-sm text-[#131313B3] mb-2">Gender: ${element.gender? element.gender : 'Not Found'}</h3>
                </div>
            </div>

            <div class="flex items-center gap-1 mb-2 sm:mb-3 md:mb-2 h-5">
                <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                    <img class="h-full object-contain" src="https://img.icons8.com/?size=24&id=89392&format=png"/>
                </div>
                <div class = "h-3 sm:h-5 md:h-3 flex items-center">
                    <h3 class="h-full font-normal text-sm sm:text-lg md:text-sm text-[#131313B3] mb-2">Price: ${element.price? element.price+'$' : 'Not Available'}</h3>
                </div>
            </div>

        </div>
        <hr>

        <div class="flex justify-between items-center gap-1 my-2 h-5 mt-5">
             <div class = "hover:border-[#0E7A81] h-full flex items-center border border-[#0E7A8126] rounded-lg px-2 py-4 sm:px-6 sm:py-6 md:px-2 md:py-4 ">
                 <button onclick="showImage('${element.image}')" class="flex justify-center items-center"><img class="h-full object-contain" src="https://img.icons8.com/?size=24&id=u8MTpAq972MG&format=png"/></button>
            </div>
            <div class ="hover:bg-[#0E7A81] flex items-center border border-[#0E7A8126] rounded-lg px-2 py-1.5 sm:px-4 sm:py-2.5 md:px-2 md:py-1.5  ">
                 <button id='adopt-${i}' onclick="displayCountDownModal(${i})" class="flex justify-center items-center hover:text-white text-[#0E7A81] text-sm sm:text-xl md:text-sm font-bold ">Adopt</button>
            </div>
             <div class ="hover:bg-[#0E7A81] flex items-center border border-[#0E7A8126] rounded-lg px-2 py-1.5 sm:px-4 sm:py-2.5 md:px-2 md:py-1.5  ">
                 <button onclick="loadDetails('${element.petId}')" class="hover:text-white flex justify-center items-center text-[#0E7A81] text-sm sm:text-xl md:text-sm font-bold">Details</button>
            </div>
        </div>    
        `;
        
        animalContainer.appendChild(card);
        i++;
      
    });

    document.getElementById('sort-by-price').addEventListener('click', () => {
        data.sort((a, b) => b.price - a.price); // Sort in descending order
         // loading...........
         loadingSpin();

        displayCategoriesData(data); 
    });

}

// Load All categories Data and creating btn based on category......................................
const loadAllCategories = () =>{
    console.log("Load crated");
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => DisplayCategories(data.categories))  //call for display all categories data
    .catch((err) => console.log(err));
}

const DisplayCategories = (categories) =>{
    // console.log(categories);
    const categoryContainer = document.getElementById('animal-container');

    categories.forEach(element => {
        const btnContainer = document.createElement("div");
        btnContainer.classList.add('w-full','rounded-2xl', 'border','border-[#0E7A8126]','grid','justify-center', 'hover:bg-[#0E7A81]','hover:text-white','items-center');
        btnContainer.id = 'category-btn-container';

        if(element.id === 4){ 
            btnContainer.innerHTML=
            `
             <button id="btn-${element.id}" onclick="loadCategoryCardBasedOnId(${element.id} ,'${element.category}')"  class="px-3 py-4 font-bold text-base md:text-lg lg:text-xl category-btn flex justify-center items-center font-inter"><span class="mx-3 h-8"><img class="h-full" src="https://img.icons8.com/?size=40&id=50533&format=png" alt="">
             </span>${element.category}s
             </button>
            `}

         else if(element.id === 2){
            
            btnContainer.innerHTML=
            `
             <button id="btn-${element.id}" onclick="loadCategoryCardBasedOnId(${element.id} ,'${element.category}')"  class="px-3 py-4 font-bold text-base md:text-lg lg:text-xl category-btn flex justify-center items-center font-inter"><span class="mx-3 h-8"><img class="h-full" src="https://img.icons8.com/?size=48&id=20903&format=png" alt="">
             </span>${element.category}s
             </button>
            `}

        else if(element.id === 3){ 
            btnContainer.innerHTML=
            `
             <button id="btn-${element.id}" onclick="loadCategoryCardBasedOnId(${element.id} ,'${element.category}')" class="px-3 py-4 font-bold text-base md:text-lg lg:text-xl category-btn flex justify-center items-center font-inter"><span class="mx-4 h-7 w-7 md:h-8 md:w-7 lg:h-8 lg:w-8"><img class="w-full h-full" src="https://img.icons8.com/?size=80&id=zWQnJwqGetUQ&format=png" alt="">
             </span>${element.category}s
             </button>
            `}    
        else{
            btnContainer.innerHTML=
            `
             <button id="btn-${element.id}" onclick="loadCategoryCardBasedOnId(${element.id} ,'${element.category}')" class="px-3 py-4 font-bold text-base md:text-lg lg:text-xl category-btn flex justify-center items-center font-inter"><span class="mx-4 h-8"><img class="h-full" src="https://img.icons8.com/?size=48&id=ZGYXhUYK9ciX&format=png" alt="">
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
loadAllData();