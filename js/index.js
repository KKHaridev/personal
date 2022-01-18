const contact=document.querySelector('#contact')
const con = document.querySelector('.msg')
const works = document.querySelector('#works')
const img = document.querySelector('.wrk')
const skill = document.querySelector('#skills')
const percent = document.querySelector('.skills')


skill.addEventListener('click',() => {
    new WinBox({
        title: '>cd skills',
        height: '500px',
        width:'300px',
        top:'50px',
        mount: percent,
        background: 'rgb(5, 170, 18)',
        onfocus: function(){
            this.setBackground('rgb(5, 170, 18)')
        },
        onblur: function(){
          this.setBackground('darkgrey')
        }
    })
})

works.addEventListener('click',() => {
    new WinBox({
        title: '>cd works',
        height: '500px',
        width:'300px',
        top:'60px',
        left: '20px',
        mount: img,
        background: 'rgb(5, 170, 18)',
        onfocus: function(){
            this.setBackground('rgb(5, 170, 18)')
        },
        onblur: function(){
          this.setBackground('#302c2c')
        }
    })
})

contact.addEventListener('click',() => {
    new WinBox({
        title: '>cd contact',
        height: '500px',
        width:'300px',
        top:'70px',
        left: '30px',
        mount: con,
        background: 'rgb(5, 170, 18)',
        onfocus: function(){
            this.setBackground('rgb(5, 170, 18)')
        },
        onblur: function(){
            this.setBackground('#303c3c')
        }
    })
})


var typed = new Typed("#typed", {
    strings: ["HARIDEV"],
    smartBackspace: true, // Default value
    startDelay: 10,
    typeSpeed: 100,
    backSpeed: 100,
    startDelay: 500,
    /*loop: true,*/
});