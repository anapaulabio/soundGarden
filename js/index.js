const modal = document.querySelector('.reserva-modal')
const iniciaModal = async () => {
   
    modal.setAttribute('style', 'display: flex')
    modal.setAttribute("evento_id", event.target.id)
  
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'reserve')
        modal.setAttribute('style', 'display: none')
    });
}



const botao = document.querySelectorAll('.reserv')
    botao.onclick = () => iniciaModal()


// função para cadastro de reservas

const url = 'https://xp41-soundgarden-api.herokuapp.com/bookings'

const cadReserva = document.querySelector('#cadastro-reserva')
cadReserva.addEventListener('submit', async (event) =>{

    event.preventDefault()

    const inputNome = document.querySelector('#input-nome')
    const inputEmail = document.querySelector('#input-email')
    const inputQuantidade = document.querySelector('#input-quantidade')

    const novaReservaOBJ = {
    "owner_name": inputNome.value,
    "owner_email": inputEmail.value,
    "number_tickets": inputQuantidade.value,
    "event_id": modal.getAttribute("evento_id")
    }

    const novaReservaJSON = JSON.stringify(novaReservaOBJ);
    
    const resposta = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: novaReservaJSON
    }).then((response) => {
        return response.json()
    }).then((responseOBJ) => {
        console.log(responseOBJ);
    });

    alert("Ingresso reservado com sucesso!")

})

// função para mostrar os três primeiros eventos cadastrados

const urlCad = 'https://xp41-soundgarden-api.herokuapp.com/events'

const exibirEventos = async () => {
    const resposta = await fetch(urlCad);
    const data = await resposta.json();
    const cad = data.slice(0,3)

    const card = document.querySelector('#primeiros');
    let htmlEventos = ""
    cad.forEach((event) => {

        htmlEventos += `
        <article class="evento card p-5 m-3">
        <h2>${event.name} - ${event.scheduled}</h2>
        <h4>${event.attractions}</h4>
        <p>${event.description}</p>
        <a id="${event._id}" onclick="iniciaModal()" class="btn btn-primary">reservar ingresso</a>
        </article>
        `
});
   card.innerHTML = htmlEventos
};

exibirEventos()