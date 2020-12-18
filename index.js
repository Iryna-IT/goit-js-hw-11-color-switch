// Есть массив цветов в hex - формате и кнопки Start и Stop.
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body
// на случайное значение из массива используя инлайн - стиль.
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// !Учти, на кнопку Start можно нажать бесконечное количество раз.
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа(индекс элемента массива цветов),
// используй функцию randomIntegerFromInterval.

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Ref = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
}


Ref.startBtn.addEventListener("click", startChangeBackground);
Ref.stopBtn.addEventListener("click", stopChangeBackground);

let timerId;

function startChangeBackground() {
  Ref.startBtn.disabled = true;
  Ref.stopBtn.disabled = false;
    timerId = setInterval(changeBackground, 1000);
}

function changeBackground() {
    document.querySelector('body').style.backgroundColor = `${ colors[randomIntegerFromInterval(0, colors.length-1)] }`;
}

function stopChangeBackground() {
  Ref.startBtn.disabled = false;
  Ref.stopBtn.disabled = true;
  clearInterval(timerId);
  
}