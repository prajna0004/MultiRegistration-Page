// const form = document.getElementById("input-form");
// const firstname = document.getElementById("firstname");
// const lastname = document.getElementById("lastname");
// const dob = document.getElementById("birthdate");
// const email = document.getElementById("email");
// const TeleHome = document.getElementById("TeleHome");
// const TeleMob = document.getElementById("TeleMob");
// const Nationality = document.getElementById("Nationality");
// const submit = document.getElementById("submit");
// const fi = document.getElementById('file');
          
// // !add event listener
// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     // check input & observed validation
//     checkInput();
// });

// function checkInput() {
//     // get all value in required field
//     // use trim() function for remove whitespace
//     const firstname = firstname.value.trim();
//     const lastname = lastname.value.trim();

//     const NationalityValue = Nationality.value.trim().toLowerCase();
//     const emailValue = email.value.trim();
//     const TeleHomeValue = TeleHome.value.trim();
//     const TeleMobValue = TeleHome.value.trim();
//     const TeleMob = TeleMob.value.trim();



//     /* // !print value in console
//     console.log(fullNameValue);
//     console.log(usernameValue);
//     console.log(emailValue);
//     console.log(phoneNumberValue);
//     console.log(passwordValue);
//     console.log(checkPasswordValue); */
//       // Check if any file is selected.
//       if (fi.files.length > 0) {
//         for (const i = 0; i <= fi.files.length - 1; i++) {
  
//             const fsize = fi.files.item(i).size;
//             const file = Math.round((fsize / 1024));
//             // The size of the file.
//             if (file >= 4096) {
//                 alert(
//                   "File too Big, please select a file less than 4mb");
//             } else if (file < 2048) {
//                 alert(
//                   "File too small, please select a file greater than 2mb");
//             } else {
//                 document.getElementById('size').innerHTML = '<b>'
//                 + file + '</b> KB';
//             }
//         }
//     }
//     // !full name validation check
//     if (firstname === "") {
//         // show error message
//         // add error class
//         setErrorMessage(firstname, "First Name field can't be blank. Required this field.");

//         // focus element
//         firstname.focus();
//     } else if (firstname.length < 3 || firstname.length > 50) {
//         setErrorMessage(firstname, "This field minimum character is 5 and maximum character is 50. Please input at this range.");

//         // focus element
//         firstname.focus();
//     } else {
//         // add success class
//         setSuccessMessage(firstname);
//     }
//     if (lastname === "") {
//         // show error message
//         // add error class
//         setErrorMessage(lastname, "Last Name field can't be blank. Required this field.");

//         // focus element
//         firstname.focus();
//     } else if (lastname.length < 3 || lastname.length > 50) {
//         setErrorMessage(lastname, "This field minimum character is 5 and maximum character is 50. Please input at this range.");

//         // focus element
//         lastname.focus();
//     } else {
//         // add success class
//         setSuccessMessage(lastname);
//     }

//     // !username validation check
//     if (NationalityValue === "") {
//         // show error message
//         // add error class
//         setErrorMessage(Nationality, "Username field can't be blank. Required this field.");

//         // focus element
//         Nationality.focus();
   
//     } else {
//         // add success class
//         setSuccessMessage(Nationality);
//     }

  

//     // !phone validation check
//     if (TeleHomeValue === "") {
//         // show error message
//         // add error class
//         setErrorMessage(TeleHome, "Phone Number field can't be blank. Required this field.");

//         // focus element
//         TeleHome.focus();
//     } else if (TeleHomeValue.length > 11) {
//         setErrorMessage(phoneNumber, "This field minimum maximum character is 11. Please input at this range.");

//         // focus element
//         TeleHome.focus();
//     } else {
//         // add success class
//         setSuccessMessage(TeleHome);
//     }
//     if (TeleMobValue === "") {
//         // show error message
//         // add error class
//         setErrorMessage(TeleMob, "Phone Number field can't be blank. Required this field.");

//         // focus element
//         TeleHome.focus();
//     } else if (TeleMobValue.length > 11) {
//         setErrorMessage(TeleMob, "This field minimum maximum character is 11. Please input at this range.");

//         // focus element
//         TeleMob.focus();
//     } else {
//         // add success class
//         setSuccessMessage(TeleMob);
//     }

// }

// // !input error message show function
// function setErrorMessage(input, message) {
//     // select input field parentELement
//     const formControl = input.parentElement; // parentELement = .form-control
//     const small = formControl.querySelector("small");

//     // add error message inside small
//     small.innerText = message;

//     // add error class
//     formControl.className = "form-control error";
// }

// // !input success message show function
// function setSuccessMessage(input) {
//     // select input field parentELement
//     const formControl = input.parentElement; // parentELement = .form-control

//     // add success class
//     formControl.className = "form-control success";
// }

// // !proper email validation check
// function isValidateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
// }

const form = document.querySelector('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const birthdate = document.getElementById('birthdate');
const email = document.getElementById('email');
const Nationality = document.getElementById('Nationality');
const TeleHome = document.getElementById('TeleHome');
const TeleMob = document.getElementById('TeleMob');
const StreetAdress = document.getElementById('StreetAdress');
const City = document.getElementById('City');
const Country = document.getElementById('Country');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let errorMessage = '';

  if (firstname.value === '') {
    errorMessage += 'First name is required\n';
  }

  if (lastname.value === '') {
    errorMessage += 'Last name is required\n';
  }

  if (birthdate.value === '') {
    errorMessage += 'Birthdate is required\n';
  }

  if (email.value === '') {
    errorMessage += 'Email is required\n';
  } else if (!email.value.includes('@')) {
    errorMessage += 'Email must be in correct format\n';
  }

  if (Nationality.value === '') {
    errorMessage += 'Nationality is required\n';
  }

  if (TeleHome.value === '') {
    errorMessage += 'Telephone-Home is required\n';
  }

  if (TeleMob.value === '') {
    errorMessage += 'Telephone-Mobile is required\n';
  }
  if (TeleMob.value.length !== 10) {
    event.preventDefault();
    alert("Phone number should have 10 digits");
  }
  if (TeleHome.value.length !== 10) {
    event.preventDefault();
    alert("Phone number should have 10 digits");
  }

  if (StreetAdress.value === '') {
    errorMessage += 'Street Adress is required\n';
  }

  if (City.value === '') {
    errorMessage += 'City is required\n';
  }

  if (Country.value === '') {
    errorMessage += 'Country is required\n';
  }

  if (errorMessage === '') {
    form.submit();
  } else {
    alert(errorMessage);
  }
});
