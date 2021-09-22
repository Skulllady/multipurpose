document.addEventListener('DOMContentLoaded', () => {
  const previous = document.getElementById("previous")
  const next = document.getElementById("next")
  const nav = document.querySelectorAll(".nav-items")
  const appName = document.getElementById("location")
  const body = document.getElementById("container")
  const appNames = ['app', 'blog', 'shop', 'note', 'game', 'grave']

  let currentLocOfAppInCarousel = 0;
  appName.innerHTML = `${appNames[currentLocOfAppInCarousel]}`
  let turnDark = () => {
    if (appNames[currentLocOfAppInCarousel] === "grave") {
      body.style.backgroundColor = "rgb(0, 0, 0)";
      body.style.color = "rgb(117, 117, 117)";
      previous.style.color = "rgb(117, 117, 117)";
      next.style.color = "rgb(117, 117, 117)";
      appName.style.color = "rgb(156, 39, 176)";
      nav.style.color = "rgb(117, 117, 117)";
    }
    else {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      previous.style.color = "black";
      next.style.color = "black";
      appName.style.color = "rgb(46, 217, 235)";
      nav.style.color = "black";
    }
  }

  //When the user clicks previous in the carousel
  previous.addEventListener("click", (e) => {
    if (currentLocOfAppInCarousel === 0) {
      currentLocOfAppInCarousel = appNames.length - 1

    } else {
      currentLocOfAppInCarousel--
    }
    appName.innerHTML = `${appNames[currentLocOfAppInCarousel]}`
    turnDark();
  })


  //When the user clicks next in the carousel
  next.addEventListener("click", (e) => {
    if (currentLocOfAppInCarousel === appNames.length - 1) {
      currentLocOfAppInCarousel = 0
    } else {
      currentLocOfAppInCarousel++
    }
    appName.innerHTML = `${appNames[currentLocOfAppInCarousel]}`
    turnDark();
  })
})
