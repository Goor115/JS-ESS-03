// 1
// function showMessege () {
//     alert("Hello world");
// }

// 2
// let btm = document.querySelector("#testBtn");
// btm.onclick = showMessege;
//
// function showMessege() {
//     alert("Hello world");
// }

// 3
let btm = document.querySelector("#testBtn");
btm.addEventListener("click", showMessege);

function showMessege() {
    alert("Hello world");
}