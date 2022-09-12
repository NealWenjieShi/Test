
// JSON data for puppies includes image path, name, birth year, price
const puppies = [
    {
        "puppypath": "./image/puppiespage/ShanieMaltese.jpg",
        "puppyname": "Shanie (Maltese)",
        "puppybirthyear": "6 months old",
        "puppydescription": "Our puppies come with: Vaccinations, Health Certification, Vaccines Certification, Travel Crate, Dog Food, and One Year of Health Guarantee"
            + "We guarantee that your puppy is in good health at the time you take him home. They have been dewormed at 2 weeks of age and every 2 weeks thereafter."
            + "He has been examined by a licensed veterinarian and was to be found in good health.",
        "puppyprice": "$5,000"
    },
    {
        "puppypath": "./image/puppiespage/SodaHusky.jpeg",
        "puppyname": "Soda (Husky)",
        "puppybirthyear": "4 months old",
        "puppydescription": "Our puppies come with: Vaccinations, Health Certification, Vaccines Certification, Travel Crate, Dog Food, and One Year of Health Guarantee"
            + "We guarantee that your puppy is in good health at the time you take him home. They have been dewormed at 2 weeks of age and every 2 weeks thereafter."
            + "He has been examined by a licensed veterinarian and was to be found in good health.",
        "puppyprice": "$3,500"
    },
    {
        "puppypath": "./image/puppiespage/EdisonFrenchDog.jpeg",
        "puppyname": "Edison (French Dog)",
        "puppybirthyear": "3 month old",
        "puppydescription": "Our puppies come with: Vaccinations, Health Certification, Vaccines Certification, Travel Crate, Dog Food, and One Year of Health Guarantee"
            + "We guarantee that your puppy is in good health at the time you take him home. They have been dewormed at 2 weeks of age and every 2 weeks thereafter."
            + "He has been examined by a licensed veterinarian and was to be found in good health.",
        "puppyprice": "$4,500"
    },
    {
        "puppypath": "./image/puppiespage/SiberianHusky.jpeg",
        "puppyname": "Siberian (Husky)",
        "puppybirthyear": "5 month old",
        "puppydescription": "Our puppies come with: Vaccinations, Health Certification, Vaccines Certification, Travel Crate, Dog Food, and One Year of Health Guarantee"
            + "We guarantee that your puppy is in good health at the time you take him home. They have been dewormed at 2 weeks of age and every 2 weeks thereafter."
            + "He has been examined by a licensed veterinarian and was to be found in good health.",
        "puppyprice": "$3,000"
    },
    {
        "puppypath": "./image/puppiespage/EddieFrenchDog.jpg",
        "puppyname": "Eddie (French Dog)",
        "puppybirthyear": "3 month old",
        "puppydescription": "Our puppies come with: Vaccinations, Health Certification, Vaccines Certification, Travel Crate, Dog Food, and One Year of Health Guarantee"
            + "We guarantee that your puppy is in good health at the time you take him home. They have been dewormed at 2 weeks of age and every 2 weeks thereafter."
            + "He has been examined by a licensed veterinarian and was to be found in good health.",
        "puppyprice": "$4,000"
    },
    {
        "puppypath": "./image/puppiespage/MuajiMaltese.jpeg",
        "puppyname": "Muaji (Maltese)",
        "puppybirthyear": "4 month old",
        "puppydescription": "Our puppies come with: Vaccinations, Health Certification, Vaccines Certification, Travel Crate, Dog Food, and One Year of Health Guarantee"
            + "We guarantee that your puppy is in good health at the time you take him home. They have been dewormed at 2 weeks of age and every 2 weeks thereafter."
            + "He has been examined by a licensed veterinarian and was to be found in good health.",
        "puppyprice": "$3,700"
    }
]

const gridItem = document.querySelectorAll(".griditem");
const puppyImg = document.querySelectorAll(".imgdog");
const puppyName = document.querySelectorAll(".puppyname");
const puppyBirth = document.querySelectorAll(".puppybirthyear");
const puppyPrice = document.querySelectorAll(".puppyprice");
const puppyDesc = document.querySelectorAll(".puppydescription");

/**
 * Main function - filter puppy breed when filter button is clicked
 */
function filterDog() {
    let allDogs = document.querySelector("#allDogs");
    let husky = document.querySelector("#husky");
    let maltese = document.querySelector("#maltese");
    let frenchDog = document.querySelector("#frenchdog");

    if (allDogs.selected) {
        loadAllPuppies();
    } else if (husky.selected) {
        filterByHusky();
    } else if (maltese.selected) {
        filterByMaltese();
    } else if (frenchDog.selected) {
        filterByFrenchDog();
    }
}

/**
* Function - loading JSON data into HTML elemnts for all puppies 
*/
function loadAllPuppies() {

    const gridItem = document.querySelectorAll(".griditem");
    for (i = 0; i < puppyImg.length; i++) {
        puppyImg[i].src = puppies[i].puppypath;
        puppyName[i].innerText = puppies[i].puppyname;
        puppyBirth[i].innerText = puppies[i].puppybirthyear;
        puppyDesc[i].innerHTML = puppies[i].puppydescription;
        puppyPrice[i].innerHTML = puppies[i].puppyprice;
    }

    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].style.display = 'block';
    }

}


/**
*  Filter by husky function - remove other breeds of puppy, only leaves husky
*/
function filterByHusky() {
    let maltese = document.querySelectorAll('.maltese');
    for (let i = 0; i < maltese.length; i++) {
        maltese[i].style.display = 'none';
    }

    let frenchDog = document.querySelectorAll('.frenchdog');
    for (let i = 0; i < frenchDog.length; i++) {
        frenchDog[i].style.display = 'none';
    }
}

/**
* Filter by french dog function - remove other breeds of puppy, only leaves french dog
*/
function filterByFrenchDog() {
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].style.display = 'block';
    }

    let maltese = document.querySelectorAll('.maltese');
    for (let i = 0; i < maltese.length; i++) {
        maltese[i].style.display = 'none';
    }

    let husky = document.querySelectorAll('.husky');
    for (let i = 0; i < husky.length; i++) {
        husky[i].style.display = 'none';
    }
}

/**
* Filter by maltese function - remove other breeds of puppy, only leaves maltese
*/
function filterByMaltese() {
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].style.display = 'block';
    }

    let frenchDog = document.querySelectorAll('.frenchdog');
    for (let i = 0; i < frenchDog.length; i++) {
        frenchDog[i].style.display = 'none';
    }

    let husky = document.querySelectorAll('.husky');
    for (let i = 0; i < husky.length; i++) {
        husky[i].style.display = 'none';
    }
}


// JSON data for kittens includes image path, name, birth year, price
const kittens = [
    {
        "catpath": "./image/kittenspage/samGarfield.jpg",
        "catname": "Sam (Garfield)",
        "catbirthyear": "6 months old",
        "catdescription": "Our kittns come with: Vaccinations, Health Certification, Vaccines Certification, Travel Crate, Cat Food, and One Year of Health Guarantee"
            + "We guarantee that your kittn is in good health at the time you take him home. They have been dewormed at 2 weeks of age and every 2 weeks thereafter."
            + "He has been examined by a licensed veterinarian and was to be found in good health.",
        "catprice": "$5,000"
    },
    {
        "catpath": "./image/kittenspage/kimchiGarfield.jpg",
        "catname": "Kimchi (Garfield)",
        "catbirthyear": "4 months old",
        "catdescription": "Our kittns come with: Vaccinations, Health Certification, Vaccines Certification, Travel Crate, Cat Food, and One Year of Health Guarantee"
            + "We guarantee that your kittn is in good health at the time you take him home. They have been dewormed at 2 weeks of age and every 2 weeks thereafter."
            + "He has been examined by a licensed veterinarian and was to be found in good health.",
        "catprice": "$3,500"
    },
    {
        "catpath": "./image/kittenspage/riceGarfield.jpg",
        "catname": "Rice (Garfield)",
        "catbirthyear": "3 month old",
        "catdescription": "Our kittns come with: Vaccinations, Health Certification, Vaccines Certification, Travel Crate, Cat Food, and One Year of Health Guarantee"
            + "We guarantee that your kittn is in good health at the time you take him home. They have been dewormed at 2 weeks of age and every 2 weeks thereafter."
            + "He has been examined by a licensed veterinarian and was to be found in good health.",
        "catprice": "$4,500"
    },
    {
        "catpath": "./image/kittenspage/sunnyBritish.jpg",
        "catname": "Sunny (British Shorthair)",
        "catbirthyear": "5 month old",
        "catdescription": "Our kittns come with: Vaccinations, Health Certification, Vaccines Certification, Travel Crate, Cat Food, and One Year of Health Guarantee"
            + "We guarantee that your kittn is in good health at the time you take him home. They have been dewormed at 2 weeks of age and every 2 weeks thereafter."
            + "He has been examined by a licensed veterinarian and was to be found in good health.",
        "catprice": "$3,000"
    },
    {
        "catpath": "./image/kittenspage/puddingBritish.jpg",
        "catname": "Pudding (British Shorthair)",
        "catbirthyear": "3 month old",
        "catdescription": "Our kittns come with: Vaccinations, Health Certification, Vaccines Certification, Travel Crate, Cat Food, and One Year of Health Guarantee"
            + "We guarantee that your kittn is in good health at the time you take him home. They have been dewormed at 2 weeks of age and every 2 weeks thereafter."
            + "He has been examined by a licensed veterinarian and was to be found in good health.",
        "catprice": "$4,000"
    },
    {
        "catpath": "./image/kittenspage/stoneBritish.jpg",
        "catname": "Stone (British Shorthair)",
        "catbirthyear": "4 month old",
        "catdescription": "Our kittens come with: Vaccinations, Health Certification, Vaccines Certification, Travel Crate, Cat Food, and One Year of Health Guarantee"
            + "We guarantee that your kittn is in good health at the time you take him home. They have been dewormed at 2 weeks of age and every 2 weeks thereafter."
            + "He has been examined by a licensed veterinarian and was to be found in good health.",
        "catprice": "$3,700"
    }
]

const kittenImg = document.querySelectorAll(".imgcat");
const kittenName = document.querySelectorAll(".kittenname");
const kittenBirth = document.querySelectorAll(".kittenbirthyear");
const kittenPrice = document.querySelectorAll(".kittenprice");
const kittenDesc = document.querySelectorAll(".kittendescription");

/**
* Main function - filter kitten breed when filter button is clicked
*/
function filterCat() {
    let allCats = document.querySelector("#allCats");
    let british = document.querySelector("#british");
    let garfield = document.querySelector("#garfield");

    if (allCats.selected) {
        loadAllKittens();
    } else if (british.selected) {
        filterByBritish();
    } else if (garfield.selected) {
        filterByGarfield();
    }
}

/**
*  Function - loading JSON data into HTML elemnts for all kittens
*/
function loadAllKittens() {

    for (i = 0; i < kittenImg.length; i++) {
        kittenImg[i].src = kittens[i].catpath;
        kittenName[i].innerText = kittens[i].catname;
        kittenBirth[i].innerText = kittens[i].catbirthyear;
        kittenDesc[i].innerHTML = kittens[i].catdescription;
        kittenPrice[i].innerHTML = kittens[i].catprice;
    }

    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].style.display = 'block';
    }

}

/**
* Filter by british shorthair function - remove other breeds of kitten, only leaves british shorthair
*/
function filterByBritish() {
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].style.display = 'block';
    }

    let garfield = document.querySelectorAll('.garfield');
    for (let i = 0; i < garfield.length; i++) {
        garfield[i].style.display = 'none';
    }
}

/**
* Filter by garfield function - remove other breeds of kitten, only leaves british garfield
*/
function filterByGarfield() {
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].style.display = 'block';
    }

    let british = document.querySelectorAll('.british');
    for (let i = 0; i < british.length; i++) {
        british[i].style.display = 'none';
    }
}

/**
 * Search function - search both puppies and kittens by name
 */
var $searchbtn = document.getElementById('searchbtn');
var $searchbox = document.getElementById('searchbox');
$searchbtn.addEventListener('click', function ($event) {
    $event.preventDefault();
    var term = $searchbox.value.trim();
    filterItems(term);
})

$searchbox.addEventListener('blur', function ($event) {
    if (!this.value.trim()) {
        showItems();
    }
})

function showItems() {
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].style.display = 'block';
    }
}

function filterItems(term) {
    for (let i = 0; i < gridItem.length; i++) {
        var currentItem = gridItem[i];
        if (currentItem.textContent.toLocaleLowerCase().includes(term.toLocaleLowerCase())) {
            currentItem.style.display = 'block';
            if (currentItem.previousElementSibling) {
                currentItem.previousElementSibling.style.display = 'block';
            }
        } else {
            currentItem.style.display = 'none';
        }
    }
}