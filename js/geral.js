const SOUND_URL = 'https://xp41-soundgarden-api.herokuapp.com/events';
  

const formCadastroEvento = document.querySelector('#cadastro-evento');

formCadastroEvento.addEventListener('submit', async (event) => {

    event.preventDefault(); //Evitar que a página seja recarregada

    const inputNome = document.getElementById("nome");
    const inputAtracoes = document.getElementById("atracoes");
    const inputDescricao = document.getElementById("descricao");
    const inputData = document.getElementById("data");
    const inputLotacao = document.getElementById("lotacao");
    const inputBanner = document.getElementById("banner");

    //alert(inputNome.value);

    const fullDateTime = new Date(inputData.value);

    const novoEventoOBJ = {
            "name": inputNome.value,
            "poster": inputBanner.value,
            "attractions": inputAtracoes.value.split(","),
            "description": inputDescricao.value,
            "scheduled": fullDateTime.toISOString(),
            "number_tickets": inputLotacao.value
    };
    // Convertendo OBJ para JSON
    const novoEventoJSON = JSON.stringify(novoEventoOBJ);
    // Conexão com a API para cadastrar novo evento
    // Salvando resposta na const
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


 