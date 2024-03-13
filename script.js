// Функція debounce призначена для затримки виконання функції на певний час
function debounce(func, delay) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, arguments);
        }, delay);
    };
}

// Функція, яка буде викликатися при зміні значення слайдера
function handleSliderChange() {
    const value = slider.value;
    // Тут можна виконати дії залежно від значення слайдера, наприклад, зміну розміру зображення
    image.style.width = `${value}%`;
}

const slider = document.getElementById('slider');
const image = document.getElementById('image');

// Додаємо обробник події на зміну значення слайдера з використанням debounce
slider.addEventListener('input', debounce(handleSliderChange, 300));


/* function mouseMoving(e) {
    let box = document.getElementById('box');
    box.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    
}
let boxStopper = _.debounce(mouseMoving, 3400)
window.addEventListener('mousemove', mouseMoving) */