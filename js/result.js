function reset() {
    location.href = "./index.html"
}

var points = sessionStorage.getItem("points")

var head = document.getElementById("result-header")
var body = document.getElementById("result-body")

if(points>=5) {
    head.innerText = "That's nice ! You have got "+points+" out of 6 right";
    body.innerText = "You worked hard and it paid off! Nice work figuring out of these tough question, you earned it buddy!"
}else {
    head.innerText = "Opps ! You've got "+points+" out of 6 right";
    body.innerText = "Marvel has created more avengers than even the geekiest of geeks could remember, but that doesn't mean you shouldn't try."
}