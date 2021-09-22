document.addEventListener('DOMContentLoaded', () => {
  const previous = document.getElementById("previous")
  const next = document.getElementById("next")
  const appName = document.getElementById("location")
  const appNames = ['app', 'blog', 'shop', 'note', 'game', 'grave']

  let currentLocOfAppInCarousel = 0;
  appName.innerHTML = `tiny ${appNames[currentLocOfAppInCarousel]}`

  //When the user clicks previous in the carousel
  previous.addEventListener("click", () => {

  })


  //When the user clicks next in the carousel
  next.addEventListener("click", (e) => {
    if (currentLocOfAppInCarousel === appNames.length - 1) {
      currentLocOfAppInCarousel = 0
    } else {
      currentLocOfAppInCarousel++
    }
    appName.innerHTML = `tiny ${appNames[currentLocOfAppInCarousel]}`
  })
})
