const start_btn = document.querySelector(".start_btn button")
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

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
    showQuestions();
}

let que_count = 0;

// getting questions and options from array

function showQuestions () {
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[0].question + '</span>';
    que_text.innerHTML = que_tag;
}