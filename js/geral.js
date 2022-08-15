
const form = (eventNome) => {
    document.getElementById("nome").value = eventNome.name;
    document.getElementById("atracoes").value = eventNome.attractions.split(",");
    document.getElementById("descricao").value = eventNome.descripton;
    document.getElementById("data").value = eventNome.schedulet;
    document.getElementById("lotacao").value = eventNome.number_tickets;
    document.getElementById("banner").value = eventNome.poster;
    }

const soundEventos = async() => {
    const inputId = document.querySelector('#?').value;
    const soundURL = "https://xp41-soundgarden-api.herokuapp.com";
    const data = await fetch(`${soundURL}/events/${inputId}}`);
    
    const eventNome = await data.json();

    form(eventNome)
};

document.getElementById


