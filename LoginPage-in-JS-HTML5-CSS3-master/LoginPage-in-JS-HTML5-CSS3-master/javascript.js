window.addEventListener("load",init);
function init()
{ //alert("loaded");
    document.getElementById("Submit").addEventListener("click", showName);
    document.getElementById("Password").addEventListener("keyup",passwordChecker);
    document.getElementById("FirstName").addEventListener("keyup",focus);

  document.getElementById("FirstName").addEventListener("focus",focusFunction1);
    document.getElementById("FirstName").addEventListener("blur",blurFunction1);
    document.getElementById("LastName").addEventListener("focus",focusFunction2);
    document.getElementById("LastName").addEventListener("blur",blurFunction2);
    document.getElementById("Password").addEventListener("focus",focusFunction3);
    document.getElementById("Password").addEventListener("blur",blurFunction3);


}
function showName()
{
    var firstName=document.getElementById("FirstName");
    var lastName=document.getElementById("LastName");
    
    if(firstName && lastName)
    {
    firstName=firstName.value;
    lastName=lastName.value;
        if (firstName.length < 5&&firstName.length>0) {
            document.getElementById("FirstName").style.background = "red";
        }
    var fullName=firstName+"  "+lastName;
    }
    document.getElementsByTagName("span")[4].innerHTML=fullName;
}
function passwordChecker() {
   var password= document.getElementById("Password");


    if(password)
    {
        password=password.value;
        if(password.length<=3)
        {

            document.getElementsByTagName("span")[2].innerHTML='<img src=\"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjDbHCr2e8kTdGTucHbeIEu_WoA2O8bvxAG6Sv_KBn7YdMc1kaG0-E0A\"  alt="Weak" style="width:50px;height:50px;"> Weak</img>';

            
           

        }
        else if(password.length>3&&password.length<8)
        {

            document.getElementsByTagName("span")[2].innerHTML='<img src=\" https://pixabay.com/static/uploads/photo/2013/07/18/10/56/smiley-163510_960_720.jpg  \"  alt="Medium" style="width:50px;height:50px;">Medium</img>';

        }
        else if(password.length>8)
        {
          
            document.getElementsByTagName("span")[2].innerHTML='<img src=\"http://images.clipartpanda.com/green-smiley-face-clip-art-emotions-happy-green-face-md.png\"  alt="Strong" style="width:50px;height:px;">Strong</img>';
            

        }
    }

    
    else
    {
        alert("enter password...");
    }

}



function focus() {
    var firstName = document.getElementById("FirstName");


    if (firstName) {
        firstName = firstName.value;
        if (firstName.length < 5&&firstName.length>0) {
            
            document.getElementById("firstnameerror").innerHTML = "First Name Can't Be Less than 5";
        }
        else
            
            document.getElementById("firstnameerror").innerHTML = "";

    }


}

function focusFunction1() {
    // Focus = Changes the background color of input to yellow
    document.getElementById("FirstName").style.background = "yellow";
}

function blurFunction1() {
    // No focus = Changes the background color of input to red
    document.getElementById("FirstName").style.background = "white";
}
function focusFunction2() {
    // Focus = Changes the background color of input to yellow
    document.getElementById("LastName").style.background = "yellow";
}

function blurFunction2() {
    // No focus = Changes the background color of input to red
    document.getElementById("LastName").style.background = "white";
}
function focusFunction3() {
    // Focus = Changes the background color of input to yellow
    document.getElementById("Password").style.background = "yellow";
}

function blurFunction3() {
    // No focus = Changes the background color of input to red
    document.getElementById("Password").style.background = "white";
}
