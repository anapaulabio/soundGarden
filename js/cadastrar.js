const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';
  

const formCadastroEvento = document.querySelector('#cadastro-evento');

formCadastroEvento.addEventListener('submit', async (event) => {

    event.preventDefault(); 

    const inputNome = document.getElementById("nome");
    const inputAtracoes = document.getElementById("atracoes");
    const inputDescricao = document.getElementById("descricao");
    const inputData = document.getElementById("data");
    const inputLotacao = document.getElementById("lotacao");
    const inputBanner = document.getElementById("banner");

    const fullDateTime = new Date(inputData.value);

    const novoEventoOBJ = {
            "name": inputNome.value,
            "poster": inputBanner.value,
            "attractions": inputAtracoes.value.split(","),
            "description": inputDescricao.value,
            "scheduled": fullDateTime.toISOString(),
            "number_tickets": inputLotacao.value
    };
   
    const novoEventoJSON = JSON.stringify(novoEventoOBJ);

    const resposta = await fetch(SOUND_URL, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: novoEventoJSON
    }).then((response) => {
        return response.json()
    }).then((responseOBJ) => {
        console.log(responseOBJ);
    });
    alert("evento cadastrado com sucesso")
});


 