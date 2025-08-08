const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  if (!validateForm(form)) {
    e.preventDefault();
  } else {
    return true;
  }
});

const validateForm = (form) => {
  let valid = true;
  
  let product_name = form.querySelector(".product_name");
  let product_description = form.querySelector(".product_description");
  let product_price = form.querySelector(".product_price");
  let product_image_url = form.querySelector(".product_image_url");

  if (product_name.value === "") {
    giveError(product_name, "El nombre del artículo es requerido");
    valid = false;
  }

  if (product_description.value === "") {
    giveError(product_description, "La descripción del artículo es requerida");
    valid = false;
  }

  if (product_price.value === "") {
    giveError(product_price, "El precio del artículo es requerido");
    valid = false;
  }

  if (product_image_url.value === "") {
    giveError(product_image_url, "La URL de la imagen del artículo es requerida");
    valid = false;
  }


  if (valid) {
    return true;
  }
};

const giveError = (field, message) => {
  let parentElement = field.parentElement;
  parentElement.classList.add("error");
  let existingError = parentElement.querySelector(".error-message");
  if (existingError) {
    existingError.remove();
  }
  let error = document.createElement("span");
  error.textContent = message;
  error.classList.add("error-message");
  parentElement.appendChild(error);
}

const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

let allFields = [...inputs, ...textareas];

allFields.forEach((field) => {
  field.addEventListener("input", () => {
    removeError(field);
  });
});

const removeError = (field) => {
  let parentElement = field.parentElement;
  parentElement.classList.remove("error");
  let error = parentElement.querySelector(".error-message");
  if (error) {
    error.remove();
  }
}