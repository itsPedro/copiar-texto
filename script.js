let copyTxt = document.getElementById("copyT");

copyTxt.querySelector("button").addEventListener("click", function() {
    let input = copyTxt.querySelector("input.text");
    input.select();
    document.execCommand("copy");
    copyTxt.classList.add("active");
});

function show() {
  document.querySelector("button").style.transition = ("all 1s");
  document.querySelector("i").className += "fa fa-check";
  document.querySelector("button").style.background = ("#649949");
  setTimeout(() => {
    document.querySelector("button").style.transition = ("all 1s");
    document.querySelector("i").className += "fa fa-clone";
    document.querySelector("button").style.background = ("#d4904b");
  }, "1800");
}
