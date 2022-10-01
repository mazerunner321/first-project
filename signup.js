
let signupArr= JSON.parse(localStorage.getItem("signupData"))||[];

function signupFun(){
    let signupObj= {
        fname: document.querySelector("#fname").value,
        lname: document.querySelector("#lname").value,
        email: document.querySelector("#email").value,
        pw: document.querySelector("#pw").value,
        cpw: document.querySelector("#cpw").value
    }
    signupArr.push(signupObj);
    localStorage.setItem("signupData",JSON.stringify(signupArr));
}