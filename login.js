let lssignupData= JSON.parse(localStorage.getItem("signupData"));

let form= document.querySelector("form");
form.addEventListener("submit",loginFun);

function loginFun(event){
    event.preventDefault();
    let count=0;

    lssignupData.forEach(function(el){
        if(el.email==document.querySelector("#lsemail").value && el.pw==document.querySelector("#lspw").value){
            // location.href= "index.html";
            count++;
        }
    })

    if(count>0){
        alert("Login Successful!")
        location.href= "index.html";
    }else{
        alert("Please Enter Valid Credentials.")
    }
}
