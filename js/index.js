const contact=document.querySelector('#contact')
const con = document.querySelector('.content')

contact.addEventListener('click',() => {
    new WinBox({
        title: 'contact',
        height: '500px',
        mount: con,
        background: 'rgb(5, 170, 18)'
    })
})