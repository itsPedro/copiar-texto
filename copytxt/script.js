let copyTxt = document.getElementById("copyT");

copyTxt.querySelector("button").addEventListener("click", function() {
    let input = copyTxt.querySelector("input.text");
    input.select();
    document.execCommand("copy");
    copyTxt.classList.add("active");
});

function show() {
    document.querySelector("i").className += "fa fa-check";
    document.querySelector("button").style.background = ("#649949");
    setTimeout(() => {
      copyTxt.classList.remove("active");
      document.querySelector("button").style.background = ("#de4904b");
    }, 1000);
}