const url = 'https://xp41-soundgarden-api.herokuapp.com/events'

const inputNome = document.getElementById("nome");
const inputAtracoes = document.getElementById("atracoes");
const inputDescricao = document.getElementById("descricao");
const inputData = document.getElementById("data");
const inputLotacao = document.getElementById("lotacao");
const inputBanner = document.getElementById("banner");
const deleteEvento = document.querySelector('#deletar-evento');




deleteEvento.addEventListener('submit', async (event) => {

    event.preventDefault(); 

    const fullDateTime = new Date(inputData.value);

    const getEvento = {
        "name": inputNome.value,
        "poster": inputBanner.value,
        "attractions": inputAtracoes.value.split(","),
        "description": inputDescricao.value,
        "scheduled": fullDateTime.toISOString(),
        "number_tickets": inputLotacao.value
    };

    const resposta = await fetch(`${url}/${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(getEvento) 
    });
    const data = await resposta.json();


    if(data.status == 201) {
    alert("Evento excluido com sucesso!")
    }

});

