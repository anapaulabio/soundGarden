const url = 'https://xp41-soundgarden-api.herokuapp.com/bookings'

const exibirReservas = async () => {
    const resposta = await fetch(url);
    const data = await resposta.json();

    const tabela = document.querySelector('.table-2');
    data.forEach((event) => {
        
        tabela.innerHTML += `
        <tr>
        <th scope="row">1</th>
        <td>${event.owner_name}</td>
        <td>${event.owner_email}</td>
        <td>${event.number_tickets}</td>
        <td>
            <a href="#" class="btn btn-danger">excluir</a>
        </td>
        </tr>`
});
   
};

exibirReservas() 