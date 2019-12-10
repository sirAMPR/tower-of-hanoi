// const post1 = document.body.querySelector("#post1")
// const pt2 = document.body.querySelector("#post2")
// const psot2 = document.body.querySelector("#post2")

post1.addEventListener('click', selectSource)
post2.addEventListener('click', selectSource)
post3.addEventListener('click', selectSource)

function selectSource(event) {
    let source = event.currentTarget
    console.log(source)
}

post1.addEventListener('click', destination)
post2.addEventListener('click', destination)
post3.addEventListener('click', destination)

function destination(event) {
    let destination = event.currentTarget
}