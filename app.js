// Showing/Hiding Modal
function showModal() {
    document.getElementById("myModal").style.display = "block";
}

function hideModal() {
    document.getElementById("myModal").style.display = "none";
}

// Active element of category
let categories = document.getElementsByClassName("category");

for(const cat of categories) {
    cat.addEventListener("click", function() {
        for(const c of categories) {
            c.classList.remove("active-category")
        }
        this.classList.add("active-category");
    });
};

// Active element of measurement
let measurements = document.getElementsByClassName("measure");

for(const meas of measurements) {
    meas.addEventListener("click", function() {
        for(const m of measurements) {
            m.classList.remove("active-measure");
        }
        this.classList.add("active-measure");
    });
}

// Displaying the Picture
const demoPictureContainer = document.getElementById("demo-picture-container");

let measure = "inch";
let category = "unisex";
displayPicture("./img/unisex-inch.jpeg");

function measureInch(event) {
    measure = event.target.innerText;
    selectPicture();
}

function measureCm(event) {
    measure = event.target.innerText;
    selectPicture();
}

function catUnisex(event) {
    category = event.target.innerText;
    selectPicture();
}

function catWomens(event) {
    category = event.target.innerText;
    selectPicture();
}

function catHoodies(event) {
    category = event.target.innerText;
    selectPicture();
}

// Decide which picture to show
function selectPicture() {
    if(measure.toLowerCase() === "inch") {
        switch(category.toLowerCase()) {
            case "unisex":
                displayPicture("./img/unisex-inch.jpeg");
                break;
            case "womens":
                displayPicture("./img/womens-inch.jpeg");
                break;
            case "hoodies":
                displayPicture("./img/hoodies-inch.jpeg");
                break;
        }
    } else if(measure.toLowerCase() === "cm") {
        switch(category.toLowerCase()) {
            case "unisex":
                displayPicture("./img/unisex-inch.jpeg");
                break;
            case "womens":
                displayPicture("./img/womens-inch.jpeg");
                break;
            case "hoodies":
                displayPicture("./img/hoodies-inch.jpeg");
                break;
        }
    }
}

function displayPicture(src) {
    demoPictureContainer.innerHTML = `
        <div>
            <img src="${src}" alt="Error" style="width: 100%;">
            The Photo is About ${category} in ${measure}
        </div>
    `;
}