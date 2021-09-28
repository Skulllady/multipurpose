//refer to keycode.info




const keyDown = e => {
  console.log(e.keyCode)
  switch (e.keyCode) {
    case (65):
      console.log('left')
      break;
    case (87):
      console.log('up')
      break;
    case (68):
      console.log('right')
      break;
    case (83):
      console.log('down')
      break;
  }
}

const init = () => {
  let canvas = document.getElementById('game');
  let ctx = canvas.getContext('2d');
  alert('This works')
  document.addEventListener('keydown', keyDown);
}

window.onload = init()
