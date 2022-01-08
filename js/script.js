const form = document.querySelector(".form"),
  btn = document.querySelector(".btn"),
  name1 = document.querySelector(".name1"),
  name2 = document.querySelector(".name2"),
  email = document.querySelector(".email"),
  password = document.querySelector(".pass"),
  errormsg1 = document.querySelector(".errormsg1"),
  errormsg2 = document.querySelector(".errormsg2"),
  errormsg3 = document.querySelector(".errormsg3"),
  errormsg4 = document.querySelector(".errormsg4");

function validateForm() {
  if (name1.value == "") {
    name1.classList.add("redBorder");
    errormsg1.innerHTML = "the name cant be Empty";
  } else {
    errormsg1.innerHTML = "";
    name1.classList.remove("redBorder");
    name1.classList.add("secsuss");
  }
  if (name2.value == "") {
    name2.classList.add("redBorder");
    errormsg2.innerHTML = "the last Name cant be Empty";
  } else {
    errormsg2.innerHTML = "";
    name2.classList.add("secsuss");
  }
  if (password.value == "") {
    password.classList.add("redBorder");
    errormsg4.innerHTML = "enter your password ";
  } 
  else if(password.value.length<10){
    password.classList.add("redBorder");
    errormsg4.innerHTML = "this password is too weak";
  }
  else {
    errormsg4.innerHTML = "";
    password.classList.add("secsuss");
    password.classList.remove("redBorder");
  }
  // looping email value to check it prefctly
//   ValidateEmail(email.value);
}
// @gmail.com

btn.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
  ValidateEmail(email);
});

function ValidateEmail()
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
errormsg3.innerHTML="";
email.classList.add('secsuss')
return true;
}
else
{
  errormsg3.innerHTML="You have entered an invalid email address!";
  email.classList.add('redBorder')
return false;
}
}



