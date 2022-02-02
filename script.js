function sendMail(params) {
  let a = document.getElementById("inputName").value;
  let b = document.getElementById("inputEmail").value;
  let c = document.getElementById("inputContact").value;
  let d = document.getElementById("inputMessage").value;
  if (a == "") {
    alert("Please Enter Name");
    return false;
  }else if(b == ""){
    alert("Please Enter Email");
    return false;
  }else if(c == ""){
    alert("Please Enter ContactNo");
    return false;
  }else if(d == ""){
    alert("Please Enter Message");
    return false;
  }else{
  var tempParams = {
    name: document.getElementById("inputName").value,
    email: document.getElementById("inputEmail").value,
    contact_no: document.getElementById("inputContact").value,
    message: document.getElementById("inputMessage").value,
  };

  emailjs
    .send("service_email", "template_w8icg93", tempParams)
    .then(function (res) {
      alert("Your Message send successfully");
    });
}
}
