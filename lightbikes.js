'use strict'
let canvas = document.getElementById('screen'),
    ctx = canvas.getContext('2d'),
    x = 0,
    y = 0,
    input = {
        up: false,
        down: false,
        right: false,
        left: false,
    }


function tick() {
    if (input.up) {
        y-=2
    }
    if (input.down) {
        y+=2
    }
    if (input.right) {
        x+=2
    }
    if (input.left) {
        x-=2
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(x, y, 50, 50)
    setTimeout(tick, 50)
}

window.onkeydown = (event) => {
    let preventDefault = false
    switch (event.keyCode) {
        case 38: case 87: // Up
            preventDefault = true
            input.up = true
            break
        case 37: case 65: //Left
            preventDefault = true
            input.left = true
            break
        case 39: case 68: // Right
            preventDefault = true
            input.right = true
            break
        case 40: case 83: // Down
            preventDefault = true
            input.down = true
            break
    }
    if (preventDefault) {
        event.preventDefault()
    }
}

window.onkeyup = (event) => {
    switch (event.keyCode) {
        case 38: case 87: // Up
            input.up = false
            break
        case 37: case 65: //Left
            input.left = false
            break
        case 39: case 68: // Right
            input.right = false
            break
        case 40: case 83: // Down
            input.down = false
            break
    }
}

tick()
