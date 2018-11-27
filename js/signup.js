function storeInfo(){
    var inputName = document.getElementById("myname");
    localStorage.setItem("name", inputName.value);
    console.log(inputName);
    var inputPass = document.getElementById("mypass");
    localStorage.setItem("pass", inputPass.value);

    // var inputEmail = document.getElementById("myemail");
    // localStorage.setItem("email", inputEmail.value);

    var yourname = localStorage.getItem('name');
    console.log(yourname);
    var yourpass = localStorage.getItem('pass');
    // var youremail = localStorage.getItem('email');

    location.href="../html/signup2.html";
}
   