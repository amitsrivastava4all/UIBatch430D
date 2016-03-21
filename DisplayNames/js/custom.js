window.addEventListener("load",init);
function init(){
    alert("Now Window is Loaded...");
// Event (Click ) Bind with showName
document.getElementById("displayname").addEventListener("click",showName);
document.getElementById("firstName").addEventListener("keyup",showFirstNameError);
    // showName()
}
function showFirstNameError(){
    var firstName = document.getElementById("firstName");
    if(firstName){
        firstName=firstName.value;
        if(firstName.length<5){
            alert("Call ");
            document.getElementById("firstnameerror").innerHTML="First Name Can't Be Less than 5";
        }
        else
        {
            document.getElementById("firstnameerror").innerHTML="";
        }

    }
}
// Logic
function showName() {
    // DOM Manipulation
    // Document Object Model
    //var firstName = document.getElementById("firstName").value;
    //var secondName = document.getElementById("middleName").value;
    //var lastName = document.getElementById("lastName").value;
    var firstName = document.getElementById("firstName");
    var secondName = document.getElementById("middleName");
    var lastName = document.getElementById("lastName");
    if (firstName && secondName && lastName) {
        firstName = firstName.value;
        secondName = secondName.value;
        lastName = lastName.value;
        if (firstName && secondName && lastName) {
            var fullName = firstName + " " + secondName + " " + lastName;
            document.getElementsByTagName("span")[0].innerHTML = fullName;
        }
        else {
            alert("Name is Blank");
        }
    }
    else{
        alert("Contact to System Vendor - System Error...");
    }

    /*if(firstName==null){
        console.log("Some Problem Injected In HTML (FirstName) , Contact to System Vendor ");
        alert("System Problem ");
    }
    if(firstName!=null){
        firstName= firstName.value;
        if(firstName==""){
            alert("FirstName Can't Be Blank , Plz Fill this");
        }
    }*/


}