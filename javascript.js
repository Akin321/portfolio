let disp=0;
function display_drop(){
    const drop=document.getElementById("dropdown-cont");
   if (disp==0){
    drop.style.display="block";
    disp=1;
   }
   else{
    drop.style.display="none";
    disp=0
   }
   
}
document.addEventListener('click',function(event){
    const dropdown=document.getElementById("dropdown-cont")
    if (!event.target.closest('.dropdown')) {
        dropdown.style.display = 'none'; 
        disp=0;
    }
})


document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(function(input) {
        input.addEventListener('focus', function() {
         
            document.getElementById("name").style.border = "none";
            document.getElementById("email").style.border = "none";
            document.getElementById("subject").style.border = "none";
            document.getElementsByTagName("form")[0].style.border = "none";
            document.getElementById("error-message").innerHTML = ""; 
        });
    });
});
  
document.addEventListener("submit", function (event) {
 
    document.getElementById("myForm").reset();
  });


function validate(){
    const name=document.getElementById("name");
    const email=document.getElementById("email");
    const subject=document.getElementById("subject");
    const errormsg=document.getElementById("error-message")
    
    let name_reg=/^[A-Za-z\s]{3,50}$/;
    let email_reg=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    errormsg.innerHTML = "";
    name.style.border = "none";

    if(!name_reg.test(name.value) || name.value ===""){
        errormsg.innerHTML="Enter a valid name b/w 3-50 characters";
        name.style.border="2px solid red";
        document.getElementsByTagName("form")[0].style.border="1px solid rgb(163, 66, 66)";
        return false;
 
    }
    else if (!email_reg.test(email.value) || email.value===""){
        errormsg.innerHTML="Enter a valid email";
        email.style.border="2px solid red";
        document.getElementsByTagName("form")[0].style.border="1px solid rgb(163, 66, 66)";
        return false;
    }
    else if (subject.value===""){
        errormsg.innerHTML="Enter a Subject";
        subject.style.border="2px solid red";
        document.getElementsByTagName("form")[0].style.border="1px solid rgb(163, 66, 66)";
        return false;
    }
    else{
        return true;
    }

}