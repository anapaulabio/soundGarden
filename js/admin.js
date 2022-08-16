const url = 'https://xp41-soundgarden-api.herokuapp.com/events'

const exibirEventos = async () => {
    const resposta = await fetch(url);
    const data = await resposta.json();

    const card = document.querySelector('.table');
    data.forEach((event) => {

        card.innerHTML += `
        <tr>
        <th scope="row">1</th>
        <td>${event.scheduled}</td>
        <td>${event.name}</td>
        <td>${event.attractions}</td>
        <td>
            <a href="reservas.html" class="btn btn-dark">ver reservas</a>
            <a href="editar-evento.html?${event._id}" class="btn btn-secondary">editar</a>
            <a href="editar-evento.html?${event._id}" class="btn btn-danger">excluir</a>
        </td>
    </tr>
        `
});
   
};

exibirEventos()