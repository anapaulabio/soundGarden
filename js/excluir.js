const url = 'https://xp41-soundgarden-api.herokuapp.com/events'

const inputNome = document.getElementById("nome");
const inputAtracoes = document.getElementById("atracoes");
const inputDescricao = document.getElementById("descricao");
const inputData = document.getElementById("data");
const inputLotacao = document.getElementById("lotacao");
const inputBanner = document.getElementById("banner");
const deleteEvento = document.querySelector('#deletar-evento');

const findID = () => {

    const url = new URL(window.location.href);
    const id = url.searchParams.get('id')

    return id;
}

const detailsEvent = async () => {
    const dadosEvent = await fetch('https://xp41-soundgarden-api.herokuapp.com/events/' + findID())
    const resposta = await dadosEvent.json()

    inputNome.value = resposta.name
    inputBanner.value = resposta.poster
    inputAtracoes.value = resposta.attractions
    inputDescricao.value = resposta.description
    inputData.value = resposta.scheduled
    inputLotacao.value = resposta.number_tickets

};

detailsEvent()



deleteEvento.addEventListener('submit', async (event) => {

    event.preventDefault(); 

    const resposta = await fetch('https://xp41-soundgarden-api.herokuapp.com/events/' + findID(), {
        method: "DELETE",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
    }).then(response => response)
    .then(result => { window.location.href = 'admin.html'})
    .catch(error => alert(`O evento ${nome} não foi excluido`))
    

    alert("Evento excluido com sucesso!")


});

