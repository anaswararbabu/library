function login(){
    
    var email = document.getElementById('mail').value;
    var password = document.getElementById('pass').value;
    if(email==""){
        document.getElementById('mailError').innerHTML = "Invalid email";
        return false;
    }
    else{
        document.getElementById('mailError').innerHTML = "";
    }
    if(password==""){
        document.getElementById('pError').innerHTML = "Invalid password";
        return false;
    }
    else{
        document.getElementById('pError').innerHTML = "";
    }
    alert("Welcome");
    return true;
}



function showFiles(){
    let inputField = document.getElementById('img');
    let  file = inputField.files;
    let fileReader = new FileReader;
    fileReader.readAsDataURL(file[0])
}


var pno=document.getElementById("phn");
// pno.addEventListener("change",pno);
var rexp= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

function phonenumber() {

if(rexp.test(pno.value)) {

    pno.style.borderColor="green";
    
    return true;
}
else {

    pno.style.borderColor="red";
    return false;

}
}

let email=document.getElementById("mail");
email.addEventListener("change",email);
let re=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
function validate(){
	if(re.test(email.value)){
		
		email.style.borderColor="green";
		return true;

	}
	else{
            email.style.borderColor="red";
            return false;
		

	}
}





function strength(){
    var str = document.getElementById('pass').value;
    var exStrong = new RegExp("^(?=.{12,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$","g");
    var strong = new RegExp("^(?=.{10,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*");
    var normal = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*");
    var medium = new RegExp("^(?=.{6,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*");
    var weak = new RegExp("^(?=.{4,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*");
   
    if(str===""){
        document.getElementById('passError').innerHTML = "";
        document.getElementById('passError').style.fontSize = ""
        document.getElementById('passError').style.backgroundColor = "";

    }
    else if(exStrong.test(str)){
        document.getElementById('passError').innerHTML = "Extra Strong";
        document.getElementById('passError').style.fontSize = "small"
        document.getElementById('passError').style.backgroundColor = "#00ff00";
        document.getElementById('passError').style.textAlign = "center";
        document.getElementById('passError').style.width = "100%";
        document.getElementById('passError').style.borderRadius = "10px";
        document.getElementById('passError').style.paddingBottom = "-10px"
        document.getElementById('passError').style.height = "18px";
        document.getElementById('passError').style.color = "black";

    }
    else if(strong.test(str)){
        document.getElementById('passError').innerHTML = "Strong";
        document.getElementById('passError').style.fontSize = "small"
        document.getElementById('passError').style.backgroundColor = "#00ff2a";
        document.getElementById('passError').style.textAlign = "center";
        document.getElementById('passError').style.width = "100%";
        document.getElementById('passError').style.borderRadius = "10px";
        document.getElementById('passError').style.height = "18px";
        document.getElementById('passError').style.color = "black";
    
    }
    else if(normal.test(str)){
        document.getElementById('passError').innerHTML = "Normal";
        document.getElementById('passError').style.fontSize = "small"
        document.getElementById('passError').style.backgroundColor = "#0084ff";
        document.getElementById('passError').style.textAlign = "center";
        document.getElementById('passError').style.width = "100%";
        document.getElementById('passError').style.borderRadius = "10px";
        document.getElementById('passError').style.height = "18px";
        document.getElementById('passError').style.color = "black";

    }
    else if(medium.test(str)){
        document.getElementById('passError').innerHTML = "Medium";
        document.getElementById('passError').style.fontSize = "small"
        document.getElementById('passError').style.backgroundColor = "orange";
        document.getElementById('passError').style.textAlign = "center";
        document.getElementById('passError').style.width = "100%";
        document.getElementById('passError').style.borderRadius = "10px";
        document.getElementById('passError').style.height = "18px";
        document.getElementById('passError').style.color = "black";
    }
    else{
            document.getElementById('passError').innerHTML = "Weak";
            document.getElementById('passError').style.fontSize = "small"
            document.getElementById('passError').style.color = "black";
            document.getElementById('passError').style.backgroundColor = "red";
            document.getElementById('passError').style.textAlign = "center";
            document.getElementById('passError').style.width = "100%";
            document.getElementById('passError').style.borderRadius = "10px";
            document.getElementById('passError').style.height = "10px";
            document.getElementById('passError').style.height = "18px";


    }

}
