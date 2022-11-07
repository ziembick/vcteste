const start_btn = document.querySelector(".start_btn button")
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");

// se o botão de começãr o quiz for clicado
start_btn.onclick = () => {
    info_box.classList.add("activeInfo"); // show info box
}

exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // hide info box
}