let someoneClickedPause = false;

function handleContinuousCounter(){
  let counter = document.getElementById('counter')
  //handle counter and increment
  if (!someoneClickedPause) {
    counter.innerHTML = parseInt(counter.innerHTML) + 1
  }
}

function handleClickCounters(e){
  if (someoneClickedPause) {
    e.preventDefault()
  } else{
    switch(e.target.id) {
      case "-":
        counter.innerHTML = parseInt(counter.innerHTML) - 1
        break;
      case "+":
        counter.innerHTML = parseInt(counter.innerHTML) + 1
        break;
    }
  }
}

function handlePauseButton(e) {
  someoneClickedPause = !someoneClickedPause
  let pauseButton = document.getElementById('pause')
  let pauseHTML = pauseButton.innerText
  //TOGGLE
  someoneClickedPause ? pauseButton.innerText='resume':pauseButton.innerText='pause'
}

function handleLikes(e){
  let currentLikes = document.querySelector('ul.likes')
  currentLikes.appendChild()
}

document.addEventListener('DOMContentLoaded', function(){

    setInterval(handleContinuousCounter, 1000)
    // Buttons
    let plusButton = document.getElementById("+")
    let minusButton = document.getElementById("-")
    let pauseButton = document.getElementById('pause')
    let likesButton = document.getElementById('<3')
    // Even Listeners
    plusButton.addEventListener('click', handleClickCounters)
    minusButton.addEventListener('click', handleClickCounters)
    pauseButton.addEventListener('click', handlePauseButton)
    likesButton.addEventListener('click', handleLikes)
})
