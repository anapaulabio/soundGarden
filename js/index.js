const iniciaModal = (modalID) => {
    const modal = document.querySelector(modalID)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'reserve')
        modal.classList.remove('mostrar')
    })
}


const botao = document.querySelectorAll('.btn')
for (let i = 0; i < botao.length; i++) {
    botao[i].onclick = () => iniciaModal('.reserva-modal')
}

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
    "number_tickets": inputQuantidade.value
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
        <a href="#" onclick="iniciaModal('.reserva-modal')" class="btn btn-primary">reservar ingresso</a>
        </article>
        `
});
   card.innerHTML = htmlEventos
};

exibirEventos()