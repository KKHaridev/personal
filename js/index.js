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
function ready(fn) {
    if (document.readyState != "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
HTMLElement.prototype.serialize = function () {
    var res = "";
    var elements = this.querySelectorAll("input, select, textarea");
    for (let i = 0; i < elements.length; i++) {
        const e = elements[i];
        if (e.name) {
            res = res + `${e.name}=${e.value}&`;
        }
    }
    console.log(res);
    return res;
};

ready(() => {

    const copyright = document.getElementById("copyright");
    const date = new Date();
    const year = date.getFullYear();
    const copyright_str = `&#169; ${year} <a href="#">K K HARIDEV</a> All Rights Reserved`;
    copyright.innerHTML = copyright_str;

    document.getElementById("submit-form").addEventListener(
        "submit",
        function (e) {
            const google_script_url =
                "https://script.google.com/macros/s/AKfycbyQRViOnZkxkuPg_5XnpZxichQYtij06RY2XpYLyEDot5hx4sSJfaNXbfi2_M1FUgI/exec";

            const request = new XMLHttpRequest();
            request.open("POST", google_script_url, true);
            request.setRequestHeader(
                "Content-Type",
                "application/x-www-form-urlencoded"
            );
            const data = document.getElementById("submit-form").serialize();
            try {
                request.send(data);
                alert("Sent successfully!");
                document.getElementById("submit-form").reset();
                e.preventDefault();
            } catch (err) {
                alert("Sending failed.");
                window.location.reload();
            }
        },
        false
    );
});
