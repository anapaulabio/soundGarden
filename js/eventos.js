const url = 'https://xp41-soundgarden-api.herokuapp.com/events'

// função para linkar o modal ao botão de reservas de ingressos 

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

// função para listar os eventos cadstrados

const exibirEventos = async () => {
    const resposta = await fetch(url);
    const data = await resposta.json();

    const card = document.querySelector('#lista-eventos');
    let htmlEventos = ""
    data.forEach((event) => {
        
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