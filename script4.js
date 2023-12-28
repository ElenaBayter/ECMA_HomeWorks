// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка.

function usersList() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => showInfo(data))
    .catch((error) => console.log("Something went wrong", error));
}
function showInfo(users) {
  const container = document.querySelector(".container");
  users.forEach((user) => {
    const userEl = document.createElement("li");
    userEl.innerHTML = `
        <h3>Name: ${user.name}</h3>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
    `;
    container.appendChild(userEl);
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete this user";
    container.appendChild(delBtn);
    delBtn.addEventListener("click", () => {
      userEl.style.display = "none";
      delBtn.style.display = "none";
    });
  });
}
usersList();
