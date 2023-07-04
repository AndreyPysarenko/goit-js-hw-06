const form = document.querySelector(".login-form");

form.addEventListener("submit", onFromSubmit);

function onFromSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = { email, password };

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
  }
  console.log(formData);

  console.log(`Email: ${email}, Password: ${password}`);
  event.currentTarget.reset();
}
