$(document).ready(function(){
    
    console.log("initializing page");
    var setname = localStorage.getItem('name');
    if(setname){
        $("#myName").html(setname);
    }

function readFile(){
    if(this.files && this.files[0]){
        var FR= new FileReader();

        FR.addEventListener("load", function(e){
            document.getElementById("img").src = e.target.result;
            document.getElementById("b64").innerHTML = e.target.result;
        });
            FR.readAsDataURL(this.files[0]);
            FR.onload=function(){
                localStorage.setItem("profileimg", FR.result);
            };
            
    }
}
document.getElementById("inp").addEventListener("change", readFile);

$('#profbio').click(function(){
    console.log("storing");
    var inputBio = document.getElementById('bio').value;
    console.log(inputBio);
    localStorage.setItem('mybio', JSON.stringify(inputBio));
    var bio = JSON.parse(localStorage.getItem('mybio'));
        console.log(bio);
        location.href="signup3.html";
    });
    
})