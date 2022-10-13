let homePoint = 0
document.getElementById("home-points-text").textContent = homePoint

let guestPoint = 0
document.getElementById("guest-points-text").textContent = guestPoint

function addOnePointHome() {
    homePoint = homePoint + 1
    document.getElementById("home-points-text").textContent = homePoint
}

function addTwoPointsHome() {
    homePoint = homePoint + 2
    document.getElementById("home-points-text").textContent = homePoint
}

function addThreePointsHome() {
    homePoint = homePoint + 3
    document.getElementById("home-points-text").textContent = homePoint
}

function addOnePointGuest() {
    guestPoint = guestPoint + 1
    document.getElementById("guest-points-text").textContent = guestPoint
}

function addTwoPointsGuest() {
    guestPoint = guestPoint + 2
    document.getElementById("guest-points-text").textContent = guestPoint
}

function addThreePointsGuest() {
    guestPoint = guestPoint + 3
    document.getElementById("guest-points-text").textContent = guestPoint
}

function newGame() {
    document.getElementById("home-points-text").innerHTML = 0
    homePoint = 0

    document.getElementById("guest-points-text").innerHTML = 0
    guestPoint = 0
}