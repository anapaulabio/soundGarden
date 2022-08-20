const url = 'https://xp41-soundgarden-api.herokuapp.com/bookings'

const findID = () => {

    const url = new URL(window.location.href);
    const id = url.searchParams.get('id')

    return id;
}

const exibirEventos = async () => {
    const resposta = await fetch( `${url}/event/${findID()}`);
    const data = await resposta.json();

    const card = document.querySelector('tbody');
    let htmlEventos = ""
    data.forEach((event) => {

        htmlEventos += `
        <tr>
        <th scope="row">${data.indexOf(event)+1}</th>
        <td>${event._id}</td>
        <td>${event.owner_name}</td>
        <td>${event.owner_email}</td>
        <td>${event.number_tickets}</td>
        </tr>
        `
});
   card.innerHTML = htmlEventos
};

exibirEventos()