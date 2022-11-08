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
    showQuestions(0);
}

let que_count = 0;

// getting questions and options from array

function showQuestions (index) {
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].question + '</span>';
    let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                    + '<div class="option"><span></span></div>'
                    + '<div class="option"><span></span></div>'
                    + '<div class="option"><span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
}