let source, destination
let sourceWidth = 0, destinationWidth = 0
let modeSourceSelect = true

post1.addEventListener('click', selectTower)
post2.addEventListener('click', selectTower)
post3.addEventListener('click', selectTower)

function selectTower(event) {
    if (modeSourceSelect) {
        source = event.currentTarget
        if (source.lastElementChild) {
            sourceWidth = source.lastElementChild.clientWidth
        }
        modeSourceSelect = false
    }
    else {
        destination = event.currentTarget
        if (destination.lastElementChild) {
            destinationWidth = destination.lastElementChild.clientWidth
        }
        moveDisc(sourceWidth, destinationWidth)
        modeSourceSelect = true
    }
}

function moveDisc(sWidth, dWidth) {
    if (sourceWidth < destinationWidth || destinationWidth === 0) {
        destination.appendChild(source.lastElementChild)
        sourceWidth = 0
        desitnationWidth = 0
    }
}


// win condition
if (post3.childElementCount === 4) {

}