import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");

const LOCALSTORAGE_KEY = "feedback-form-state";

fillText();

form.addEventListener("input", throttle(()=> saveData(), 500));
form.addEventListener("submit", clearData);

function saveData() { 
    const userData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim()
    };    
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));    
}

function clearData(evt) {
    evt.preventDefault();
    const storedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {};
    console.log(storedData);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();    
}

function fillText() {
    const storedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {};
    form.elements.email.value = storedData.email ?? "";
    form.elements.message.value = storedData.message ?? "";
}



