function inc(nome){

    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    const jogador = jogadores.find(n => n.nome == nome)

    let gols = parseInt(jogador.gols += 1)
    jogador.gols = gols
    localStorage.setItem("jogadores", JSON.stringify(jogadores))


    const card = document.querySelector(`#${nome}`)
    card.querySelector("#numero-gols").value = gols

    atualizar()
}

function dec(nome){

    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    const jogador = jogadores.find(n => n.nome == nome)

    let gols = parseInt(jogador.gols -= 1)
    jogador.gols = gols
    localStorage.setItem("jogadores", JSON.stringify(jogadores))


    const card = document.querySelector(`#${nome}`)
    card.querySelector("#numero-gols").value = gols

    atualizar()
}


