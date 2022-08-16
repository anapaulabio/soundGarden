const url = 'https://xp41-soundgarden-api.herokuapp.com/events'

const exibirEventos = async () => {
    const resposta = await fetch(url);
    const data = await resposta.json();

    const card = document.querySelector('#lista-eventos');
    data.forEach((event) => {
        
        card.innerHTML += `
        <article class="evento card p-5 m-3">
        <h2>${event.name} - ${event.scheduled}</h2>
        <h4>${event.attractions}</h4>
        <p>${event.description}</p>
        <a href="#" class="btn btn-primary">reservar ingresso</a>
        </article>
        `
});
   
};

exibirEventos()