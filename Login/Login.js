
function handleLogin(){
    const alert = document.getElementById("alert");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(!email){
        alert.textContent = "Please fill in all fields !!";
        alert.style.display = "block"
        alert.style.backgroundColor = "red";
        return false;
    }
    if(!password){
        alert.textContent = "Please fill in all fields !!";
        alert.style.display = "block"
        alert.style.backgroundColor = "red";
        return false;
    }
    if(email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) == null){
        alert.textContent = "Please enter a valid email !!";
        alert.style.display = "block"
        alert.style.backgroundColor = "red";
        return false;
    }

    const subUser = JSON.parse(localStorage.getItem("users"));
    console.log(subUser);

    if(subUser){
        const user = subUser.find(user => user.email === email && user.password === password);
        if(user){
            alert.textContent = "Login Successful !!";
            alert.style.display = "block"
            alert.style.backgroundColor = "green";
            let time = new Date();
            user.startTime = time;
            localStorage.setItem("currentSubUser", JSON.stringify(user)); 
            
            setTimeout(() => {
                window.location.href = "E:\Cybercom internship\Evaluation test 1\Subuser\Subuser.html";
            }, 1000);
            return true;
        }else{
            alert.textContent = "User does not exist !!";
            alert.style.display = "block"
             return false;
        }
    }

    const users = JSON.parse(localStorage.getItem("admin"));
    if(users){
        const user = users.find(user => user.email === email && user.password === password);
        if(user){
            alert.textContent = "Login Successful !!";
            alert.style.display = "block"
            alert.style.backgroundColor = "green";
            let time = new Date();
            user.startTime = time;
            localStorage.setItem("currentUser", JSON.stringify(user)); 
            setTimeout(() => {
                window.location.href = "E:\Cybercom internship\Evaluation test 1\Dashboard1\Dashboard.html";
            }, 1000);
            return true;
        }else{
            alert.textContent = "User does not exist !!";
            alert.style.display = "block"
            return false;
        }
    }else{
        alert.textContent = "User does not exist !!";
        alert.style.display = "block"
        return false;
    }

    
}