const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {
  const adminName = document.getElementById("adminName");
  if (currentUser && currentUser.name) {
    adminName.textContent = currentUser.name;
  }
}

const admin = JSON.parse(localStorage.getItem("users"));
console.log(admin);

const table = document.getElementById("table");
admin.forEach((item) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  const startTimeCell = document.createElement("td");
  const endTimeCell = document.createElement("td");

  nameCell.textContent = item.name;
  row.appendChild(nameCell);

  const startTime = new Date(item.startTime);
  startTimeCell.textContent = startTime.toLocaleString();
  row.appendChild(startTimeCell);

  const endTime = new Date(item.endTime);
  endTimeCell.textContent = endTime.toLocaleString();
  row.appendChild(endTimeCell);

  table.appendChild(row);
})

function logout() {
  localStorage.removeItem("currentUser");
  location.href = "E:\Cybercom internship\Evaluation test 1\Login\login.html";
}
