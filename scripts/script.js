// hide or display projects
document
  .querySelector(".projects__routing--winc")
  .addEventListener("click", () => {
    document.querySelector(".projects__winc").classList.toggle("hide");
    document.querySelector(".projects__other").classList.add("hide");
  });

document
  .querySelector(".projects__routing--personal")
  .addEventListener("click", () => {
    document.querySelector(".projects__other").classList.toggle("hide");
    document.querySelector(".projects__winc").classList.add("hide");
  });

document.querySelector(".main").onscroll = () => {
  console.log("scroll");
};

console.log("i need to display scroll when the document scrolls");
