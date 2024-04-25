document.querySelector("#botao-cadastrar").addEventListener("click", (e) => {
    e.preventDefault()

    console

    const cadastrar = document.querySelector("article")


    const jogador = {
        nome: cadastrar.querySelector("#nome").value,
        time: cadastrar.querySelector("#time").value,
        gols: cadastrar.querySelector("#gols").value,
        assistencias: cadastrar.querySelector("#assistencias").value,
        foto: cadastrar.querySelector("#foto").value
    }

    if (validar(jogador)){
        console.log(jogador)
        let jogadores = JSON.parse( localStorage.getItem("jogadores")) || []
        jogadores.push(jogador)
        localStorage.setItem("jogadores", JSON.stringify(jogadores))

        

        window.location = "/"
}
})



function validar(jogador) {

    let valid = true

    limparErros()

    if (jogador.nome === "") {
        document.querySelector("#nome").classList.add("ta-com-erro")
        document.querySelector("#nome-erro").innerText = "O nome não pode estar vazio!"
        valid = false
    }

    if (jogador.time === "") {
        document.querySelector("#time").classList.add("ta-com-erro")
        document.querySelector("#time-erro").innerText = "O time é obrigatório!"
        valid = false
    }

    if (jogador.gols < 0) {

        document.querySelector("#gols").classList.add("ta-com-erro")
        document.querySelector("#gols-erro").innerText = "A quantidade de gol não pode ser menor que zero!"
        valid = false
    }

    if (jogador.assistencias < 0) {

        document.querySelector("#assistencias").classList.add("ta-com-erro")
        document.querySelector("#assistencias-erro").innerText = "A quantidade de assistências não pode ser menor que zero!"
        valid = false
    }

    if (jogador.foto === "") {
        document.querySelector("#foto").classList.add("ta-com-erro")
        document.querySelector("#foto-erro").innerText = "Adicione a URL da foto!"
        valid = false
    }

    return valid

}

function limparErros() {

    document
        .querySelectorAll("input.ta-com-erro")
        .forEach(campo => campo.classList.remove("ta-com-erro"))

    document
    .querySelectorAll("span.ta-com-erro")
    .forEach(span => span.innerText = "")

}
