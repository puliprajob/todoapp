function checkInputs(){
    var user=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    if(user=="admin" && pass=="12345"){
        return true;
    }
    else{
        alert("invalid username and password");
        return false;
    }
}