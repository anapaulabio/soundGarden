const url = 'https://xp41-soundgarden-api.herokuapp.com/events'

const exibirEventos = async () => {
    const resposta = await fetch(url);
    const data = await resposta.json();

    const card = document.querySelector('.table tbody');
    let htmlEventos = ""
    data.forEach((event) => {

        htmlEventos += `
        <tr>
        <th scope="row">${data.indexOf(event)+1}</th>
        <td>${event.scheduled}</td>
        <td>${event.name}</td>
        <td>${event.attractions}</td>
        <td>
            <a href="reservas.html?id=${event._id}" class="btn btn-dark">ver reservas</a>
            <a href="editar-evento.html?id=${event._id}" class="btn btn-secondary">editar</a>
            <a href="excluir-evento.html?id=${event._id}" class="btn btn-danger">excluir</a>
        </td>
        </tr>
        `
});
   card.innerHTML = htmlEventos
};

exibirEventos()