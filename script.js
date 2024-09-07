let card = "";
let campoPesquisa = "";

function pesquisar() {
    card = document.getElementById("card");
    campoPesquisa = document.getElementById("pesquisa").value.toLowerCase();
    let result = "";

    if (!campoPesquisa) {
        card.innerHTML = "<h3>Digite algo no campo de pesquisa!</h3>"
        return
    }

    for (monstro of monstros) {
        if (monstro.nome.toLowerCase().includes(campoPesquisa.trim()) || monstro.descricao.toLowerCase().includes(campoPesquisa.trim()) || monstro.tag.toLowerCase().includes(campoPesquisa.trim())) {
            result += `
            <div class="monster-card">
                <div class="conteudo">
                <div class="card-image">
                    <img src="imagens/${monstro.imagem}" alt="Imagem do Monstro">
                </div>
                <div class="card-info">
                    <h2>${monstro.nome}</h2>
                    <p>${monstro.descricao}</p>
                </div>
            </div>
        </div>
        `;
        }
    }

    if (!result) {
        result = "<h3>Nada encontrado!</h3>"
    }

    card.innerHTML = result;
}

