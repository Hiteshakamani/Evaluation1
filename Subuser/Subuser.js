const currSubUser = JSON.parse(localStorage.getItem('currentSubUser'));
console.log(currSubUser);

if(adminName){
    const adminName = document.getElementById('adminName');
    adminName.innerHTML = currSubUser.name;
}

if(currSubUser){
    let date = new Date();
    let currentMonth = date.getMonth();
    let currentDay = date.getDate();
    let birthMonth = new Date(currSubUser.dob).getMonth();
    let birthDay = new Date(currSubUser.dob).getDate();
    if(currentMonth === birthMonth && currentDay === birthDay){
        const birthName = document.getElementById('birthDay');
        const span = document.createElement('span');
        span.innerHTML = "Happy BirthDay" + " " + currSubUser.name +  "<br>";
        birthName.appendChild(span);
    }else{
        const birthName = document.getElementById('birthDay');
        const span = document.createElement('span');
        span.innerHTML = "It's not your birthday" + " " + currSubUser.name ;
        birthName.appendChild(span);
    }
}

function handleLogOut(){
    const subUser = JSON.parse(localStorage.getItem("users"));
    const user = subUser.find(user => user.email === currSubUser.email && user.password === currSubUser.password);
    let time = new Date();
    user.endTime = time;
    localStorage.removeItem("currentSubUser");
    window.location.href = "E:\Cybercom internship\Evaluation test 1\Login\login.html";
}