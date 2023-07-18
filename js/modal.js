const button = document.getElementById("button_modal")
const modal = document.querySelector("dialog")

button.onclick = function (){
    modal.showModal()
};

botaoFechar.onclick = function () {
    modal.close();
};