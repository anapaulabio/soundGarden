const postURL = 'https://xp41-soundgarden-api.herokuapp.com/events'

const cadastrarEvento = document.querySelector('#formulario') 

const novoEvento = (event) => {
    
    event.preventDefault()
    const preencherObjeto = new FormData(novoEvento)
    
    let cadEvento = {
        "name": preencherObjeto.get('nome-input'),
        "poster": preencherObjeto.get('banner-input'),
        "attractions": preencherObjeto.get('atracoes-input').split(','),
        "descripton": preencherObjeto.get('descricao-input'),
        "schedulet": preencherObjeto.get('data-input'),
        "number_tickets": preencherObjeto.get('lotacao-input')
    }

    console.log(cadEvento);   
    
    fetch(postURL, {
        "method": "POST",
        "headers":{"content-type":"application/json"},
        "body": JSON.stringify(response)
    }).then(response => console.log(log))
    .then( 
        alert('Evento cadastrados com sucesso!'),
        window.location.replace("admin.html")
    
    .catch(error => console.error(error))
    )
}


document.getElementById('botao').addEventListener('click', novoEvento);