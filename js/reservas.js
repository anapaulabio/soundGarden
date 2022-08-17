const url = 'https://xp41-soundgarden-api.herokuapp.com/bookings'

const exibirEventos = async () => {
    const resposta = await fetch(url);
    const data = await resposta.json();

    const card = document.querySelector('.table-2 tbody');
    let htmlEventos = ""
    data.forEach((event) => {

        htmlEventos += `
        <tr>
        <th scope="row">${data.indexOf(event)+1}</th>
        <td>${event.owner_name}</td>
        <td>${event.owner_email}</td>
        <td>${event.number_tickets}</td>
        <td>
            <a href="excluir-evento.html?id=${event._id}" class="btn btn-danger">excluir</a>
        </td>
        </tr>
        `
});
   card.innerHTML = htmlEventos
};

exibirEventos()