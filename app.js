// Getting the container to edit the desired picture
const demoPictureContainer = document.getElementById("demo-picture-container");

let measurement = "inch";
let category = "UNISEX";
displayPicture();

function displayInch(event) {
    measurement = event.target.innerText;
    displayPicture();
}

function displayCm(event) {
    measurement = event.target.innerText;
    displayPicture();
}

function displayUnisex(event) {
    category = event.target.innerText;
    displayPicture();
}

function displayWomens(event) {
    category = event.target.innerText;
    displayPicture();
}

function displayHoodies(event) {
    category = event.target.innerText;
    displayPicture();
}

function displayYouth(event) {
    category = event.target.innerText;
    displayPicture();
}

// Displaying the picture
function displayPicture() {
    if (measurement === "inch") {
        if (category.toLowerCase() === "unisex") {
            insertPic();
        } else if (category.toLowerCase() === "womens") {
            insertPic();
        } else if (category.toLowerCase() === "hoodies") {
            insertPic();
        } else if (category.toLowerCase() === "youth") {
            insertPic();
        }
    } else if (measurement === "cm") {
        if (category.toLowerCase() === "unisex") {
            insertPic();
        } else if (category.toLowerCase() === "womens") {
            insertPic();
        } else if (category.toLowerCase() === "hoodies") {
            insertPic();
        } else if (category.toLowerCase() === "youth") {
            insertPic();
        }
    }
}

// Insert the picture
function insertPic() {
    demoPictureContainer.innerHTML = `The Photo is About ${category} in ${measurement}`;
}

// Active elements of category
let categories = document.getElementsByClassName("category");

for(const cat of categories) {
    cat.addEventListener("click", function() {
        for(const c of categories) {
            c.classList.remove("active")
        }
        this.classList.add("active");
    });
};

// Active elements of measurement
let measurements = document.getElementsByClassName("measure");

for(const meas of measurements) {
    meas.addEventListener("click", function() {
        for(const m of measurements) {
            m.classList.remove("active");
        }
        this.classList.add("active");
    });
}