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
  if (someoneClickedPause) {
    e.preventDefault()
  } else{
    let currentLikes = document.querySelector('ul.likes')
    let elnode = document.createElement('li')
    let counter = document.getElementById('counter')
      //let likeVaues = {}

    // Get a matching node. We name all the nodes with an ID of the counter they have
    let matchingNode = document.getElementById(counter.innerText) 
    if (matchingNode){
      let numberOfLikes = parseInt(matchingNode.innerText.split('liked ')[1])
      numberOfLikes++
      matchingNode.innerText = (`${counter.innerText} has been liked ${numberOfLikes} times`)
    } else {
      let numLikes = 1;
      let textnode = document.createTextNode(`${counter.innerText} has been liked ${numLikes} time`)
      elnode.id = counter.innerText   
      elnode.appendChild(textnode)
      currentLikes.appendChild(elnode)
    }
  }
}

function handleComments(e){
  if (someoneClickedPause) {
    e.preventDefault()
  } else{
    e.preventDefault()
    let newComment = document.querySelector('div.comments')
    let elnode = document.createElement('li')
    let commentText = document.getElementById('formtext')
    let textnode = document.createTextNode(commentText.value)
    elnode.appendChild(textnode)
    newComment.appendChild(elnode)
    commentText.value = ''
  }
}

document.addEventListener('DOMContentLoaded', function(){

    setInterval(handleContinuousCounter, 1000)
    // Buttons
    let plusButton = document.getElementById("+")
    let minusButton = document.getElementById("-")
    let pauseButton = document.getElementById('pause')
    let likesButton = document.getElementById('<3')
    let submitButton = document.getElementById('submit')
    // Even Listeners
    plusButton.addEventListener('click', handleClickCounters)
    minusButton.addEventListener('click', handleClickCounters)
    pauseButton.addEventListener('click', handlePauseButton)
    likesButton.addEventListener('click', handleLikes)
    submitButton.addEventListener('click', handleComments)
})
