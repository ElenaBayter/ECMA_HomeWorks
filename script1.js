// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

function findMin(arr) {
  return Math.min(...arr);
}
const arr = [1, 5, 7, 9];
console.log(findMin(arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter() {
  let counter = 0;
  return {
    increment: () => {
      counter++;
    },
    decrement: () => {
      counter--;
    },
    showNumber: () => {
      return counter;
    },
  };
}
const call = createCounter();
call.increment();
call.increment();
call.increment();
call.decrement();
console.log(call.showNumber());
// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример

function findElementByClass(rootElement, className) {
  // Проверка, имеет ли текущий элемент искомый класс
  if (rootElement.classList.contains(className)) {
    return rootElement;
  }
  // Рекурсивный поиск среди дочерних элементов
  for (const child of rootElement.children) {
    const foundElement = findElementByClass(child, className);
    if (foundElement) {
      return foundElement;
    }
  }
  // Возвращаем null, если элемент не найден
  return null;
}

// Пример использования функции
const root = document.getElementById("root");
const foundElement = findElementByClass(root, "my-class");
console.log(foundElement); // Выведет первый элемент с классом 'my-class'
