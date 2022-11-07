const start_btn = document.querySelector(".start_btn button")
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = info_box.querySelector(".quiz_box");

// se o botão de começãr o quiz for clicado
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); // show info box
}

// se o botão de sair for clicado
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // hide info box
}

// se o botão de continuar for clicado
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // hide info box
    quiz_box.classList.add("activeQuiz"); // mostra quiz box
}