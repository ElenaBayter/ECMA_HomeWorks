// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

function dogList() {
  for (let i = 0; i < 10; i++) {
    // Устанавливаем таймер для каждой итерации цикла
    setTimeout(function () {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => dogInfo(data))
        .catch((error) => console.log("Something went wrong", error));
    }, 3000 * i); // Умножаем время ожидания на индекс итерации
  }
}

function dogInfo(dog) {
  const dogCont = document.querySelector(".dog_container");
  const dogEl = document.createElement("img");
  dogEl.src = dog.message;
  dogCont.appendChild(dogEl);
}

dogList();
