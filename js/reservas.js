const iniciaModal = (modalID) => {
    const modal = document.querySelector(modalID)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar')
        modal.classList.remove('mostrar')
    })
}


const botao = document.querySelectorAll('.btn')
for (let i = 0; i < botao.length; i++) {
    botao[i].addEventListener('click', () => iniciaModal('.reserva-modal'))
}

