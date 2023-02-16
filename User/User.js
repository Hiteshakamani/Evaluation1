const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const adminName = document.getElementById("adminName");
if (currentUser && currentUser.name) {
    adminName.textContent = currentUser.name;
}


function addUser() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let time = new Date();
    console.log(time.getDay() + "/" + time.getMonth() + "/" + time.getFullYear() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
    let age = Age(dob);

    if (name && email && email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) && password && dob) {
        let id;
        let users = JSON.parse(localStorage.getItem("users"));
        if (users && users.length > 0) {
            let user = users.find((user) => user.email == email);
            if (user) {
                
                alert("User already exists !!");
                return false;
            } else {
                let user = {
                    id: users.length,
                    name,
                    email,
                    password,
                    dob,
                    age
                }
                users.push(user);
                localStorage.setItem("users", JSON.stringify(users));
                window.location.href = "E:\Cybercom internship\Evaluation test 1\User\User.html";
            }
        } else {
            let user = {
                id: 0,
                name,
                email,
                password,
                dob,
                age
            }
            localStorage.setItem("users", JSON.stringify([user]));
            window.location.href = "E:\Cybercom internship\Evaluation test 1\User\User.html";
        }
        return true;
    } else {
        return false;
    }
}

function addUserRecord() {


    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;

    var table = document.getElementById('users-data');
    var row = table.insertRow(-1);
    var namerow = row.insertCell(0);
    var emailrow = row.insertCell(1);
    var passwordrow = row.insertCell(2);
    var birtjrow = row.insertCell(3);
    var agerow = row.insertCell(4);
    var actionsrow = row.insertCell(5);

    namerow.innerHTML = name;
    emailrow.innerHTML = `<a href="mailto:${email}"> ${email}</a>`;
    passwordrow.innerHTML = pass;
    birtjrow.birtj = dob;
    agerow.innerHTML = '';
    actionsrow.innerHTML = `<button class="btn btn-primary" onclick="handleEditUser(${1})">Edit</button> <button class="btn btn-danger" onclick="handleDeleteUser(${1})">Delete</button>`;
}


function addTable() {
    let temp = JSON.parse(localStorage.getItem("users"));
    let tbody = document.getElementById("tbody");



    if (temp && temp.length > 0) {
        for (let i = 0; i < temp.length; i++) {


            var table = document.getElementById('users-data');
            var row = table.insertRow(-1);
            var name = row.insertCell(0);
            var email = row.insertCell(1);
            var password = row.insertCell(2);
            var birth = row.insertCell(3);
            var age = row.insertCell(4);
            var actions = row.insertCell(5);

            name.innerHTML = temp[i].name;
            email.innerHTML = `<a href="mailto:${temp[i].email}"> ${temp[i].email}</a>`;
            password.innerHTML = temp[i].password;
            birth.innerHTML = temp[i].dob;
            age.innerHTML = temp[i].age;
            actions.innerHTML = `<button class="btn btn-primary" onclick="handleEditUser(${temp[i].id})">Edit</button> <button class="btn btn-danger" onclick="handleDeleteUser(${i})">Delete</button>`;

        }
    }
}


function handleDeleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.reload();
}


function handleEditUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    let user = users[index];
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("password").value = user.password;
    document.getElementById("dob").value = user.dob;
    document.getElementById("addUser").value = "Update User";
    document.getElementById("addUser").setAttribute("onclick", `updateUser(${index})`);
}

function updateUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    let user = users[index];
    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.password = document.getElementById("password").value;
    user.dob = document.getElementById("dob").value;
    user.age = Age(user.dob);
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("addUser").value = "Add User";
    document.getElementById("addUser").setAttribute("onclick", `addUser()`);
    window.location.href = "E:\Cybercom internship\Evaluation test 1\User\User.html";
}



function Age(dob) {
    let today = new Date();
    let birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
