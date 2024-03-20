let reaction = document.getElementById("strong1")
let memory = document.getElementById("strong2")
let verbal = document.getElementById("strong3")
let visual = document.getElementById("strong4")

fetch("data/data.json").then((response) => {
    response.json().then((dados) => {
        reaction.innerText = dados.reaction
        memory.innerText = dados.memory
        verbal.innerText = dados.verbal
        visual.innerText = dados.visual
    })
})