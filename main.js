const kasser = document.querySelectorAll(".box")
const heading = document.querySelector("h1")
console.log(kasser)




window.addEventListener("load", () => {
    kasser.forEach((kasse) => {
        kasse.classList.remove("active")
    })
    heading.classList.add("h1Active")
  });