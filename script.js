// initialize variables
let source, destination
let sourceWidth = 0, destinationWidth = 0
let modeSourceSelect = true

// event listeners
document.getElementById('tower1').addEventListener('click', selectTower)
document.getElementById('tower2').addEventListener('click', selectTower)
document.getElementById('tower3').addEventListener('click', selectTower)

function selectTower(event) {
    if (modeSourceSelect) {
        // select source tower
        source = event.currentTarget
        // check if tower is empty
        if (source.lastElementChild) {
            source.lastElementChild.style.border = "solid gold"
            sourceWidth = source.lastElementChild.clientWidth
        }
        modeSourceSelect = false
    }
    else {
        // select destination tower
        destination = event.currentTarget
        // check if tower is empty
        if (destination.lastElementChild)
            destinationWidth = destination.lastElementChild.clientWidth

        // move disc when source and destination are selected
        moveDisc(sourceWidth, destinationWidth)  
        modeSourceSelect = true       
    }
    // win condition - when 4 discs are in tower 3
    if (tower3.childElementCount === 4) {
        // remove event listeners from towers
        document.getElementById('tower1').removeEventListener('click', selectTower)
        document.getElementById('tower2').removeEventListener('click', selectTower)
        document.getElementById('tower3').removeEventListener('click', selectTower)

        // call winner function
        isWinner()
    }
}

function moveDisc(sWidth, dWidth) {
    // move disc if source is smaller than destination or destination is empty
    if (sourceWidth < destinationWidth || destinationWidth === 0) {
        destination.appendChild(source.lastElementChild)
        destination.lastElementChild.style.border = "solid black"
    } else { 
        source.lastElementChild.style.border = "solid black"
    }
    sourceWidth = 0
    destinationWidth = 0
}

function isWinner() {
    // add winner text to page
    let winDiv = document.createElement("div")
    winDiv.style.alignContenT = ''
    winDiv.textContent = 'YOU WIN'
    document.body.appendChild(winDiv)


    // add restart button
    let newButton = document.createElement("button")
    newButton.textContent = 'Restart'
    document.body.appendChild(newButton)
    newButton.id = 'winButton'
    newButton.addEventListener('click', restart)
}

function restart() {
    location.reload()
}