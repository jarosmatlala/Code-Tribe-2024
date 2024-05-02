function handleFormSubmit(event) {
  event.preventDefault();
  // console.log(event);

  // console.log(document);
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // console.log(emailInput)
  const isEmailValid =
    emailInput.value.trim() !== "" && emailInput.validity.valid;
  console.log(isEmailValid);
  let isMessageValid = messageInput.value.trim() !== "";
  console.log({ isMessageValid });

  const isFormValid = isEmailValid && isMessageValid;

  if (isFormValid) {
    // grab data from form
    const formData = new FormData(event.target);
    console.log(formData);
    fetch("https://formspree.io/f/xkndkzzb", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        if(data.ok) {
          alert('Email successfully sent')
          location.reload();
        }
      })
  } else {
    // alert user form is invalid
    alert("Form is invalid");
    if (isEmailValid !== true) {
      // display email span
      const emailSpan = document.getElementById("email-span");
      console.log(emailSpan.classList);
      emailSpan.classList.remove("hidden");
      console.log(emailSpan.classList);
    }
    if (isMessageValid !== true) {
      // display message span
      const messageSpan = document.getElementById("message-span");
      messageSpan.classList.remove("hidden");
    }
  }
}
