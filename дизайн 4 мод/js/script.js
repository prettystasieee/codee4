// Проверяем, что страница загрузилась

console.log("STEM Festival загружен");

// Кнопки

const buttons = document.querySelectorAll(".button");

buttons.forEach(function(button){

    button.addEventListener("mouseover", function(){

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseout", function(){

        button.style.transform = "scale(1)";

    });

});