function apagar(nome){
    const card = document.querySelector(`#${nome}`)
    card.classList.add("apagante")
    card.addEventListener("animationend", () => card.remove())
    
    
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    
    const jogadoresNaoApagados = jogadores.filter(jogador => jogador.nome != nome)
    
    localStorage.setItem("jogadores", JSON.stringify(jogadoresNaoApagados))
    
    atualizar()
    }