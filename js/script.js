document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (name === "" || email === "" || password === "") {
    document.getElementById("message").textContent = "Please fill out all fields.";
    document.getElementById("message").style.color = "red";
    return;
  }

  // Aquí podrías enviar los datos a un servidor
  console.log({ name, email, password });

  document.getElementById("message").textContent = "Account created successfully!";
  document.getElementById("message").style.color = "green";
  document.getElementById("signup-form").reset();
});
