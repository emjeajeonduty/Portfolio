const frame = document.querySelectorAll('main section');
const menuNav = document.querySelectorAll('nav .container ul li a');
const navBurger = document.querySelector('nav .container ul');
const burgerMenu = document.querySelector('nav .container .nav-burger input');

window.onscroll = () => {
    frame.forEach(e => {
        let valueTop = window.scrollY;
        let offset = e.offsetTop-100;
        let height = e.offsetHeight;
        let id = e.getAttribute('id');

        if(valueTop >= offset && valueTop < offset+height){
            menuNav.forEach(e=>{
                e.classList.remove('active');
                document.querySelector('nav .container ul li a[href*='+id+']').classList.add('active');
            })
            // section home
            if(id==='home'){
                document.querySelector('#home .hImage .borderImage img').classList.add('active');
            }else{
                document.querySelector('#home .hImage .borderImage img').classList.remove('active');
            }
            // section about
            if(id==='about'){
                document.querySelector('#about .container .aKiri h1').classList.add('active');

                document.querySelector('#about .container .aKanan h1').classList.add('active');
                document.querySelector('#about .container .aKanan h2').classList.add('active');
                const pAbout = document.querySelectorAll('#about .container .aKanan p');
                pAbout.forEach((e)=>{
                    e.classList.add('active')
                })
                document.querySelector('#about .container .aKanan .btnContact').classList.add('active');


            }else{
                document.querySelector('#about .container .aKiri h1').classList.remove('active');

                document.querySelector('#about .container .aKanan h1').classList.remove('active');
                document.querySelector('#about .container .aKanan h2').classList.remove('active');
                const pAbout = document.querySelectorAll('#about .container .aKanan p');
                pAbout.forEach((e)=>{
                    e.classList.remove('active')
                })
                document.querySelector('#about .container .aKanan .btnContact').classList.remove('active');
            }
            // section project
            if(id==='project'){
                document.querySelector('#project .container .title').classList.add('active');
                document.querySelector('#project .container .pmenu a:nth-child(odd)').classList.add('active');
                document.querySelector('#project .container .pmenu a:nth-child(even)').classList.add('active');
            }else{
                document.querySelector('#project .container .title').classList.remove('active');
                document.querySelector('#project .container .pmenu a:nth-child(odd)').classList.remove('active');
                document.querySelector('#project .container .pmenu a:nth-child(even)').classList.remove('active');
            }
        }
    })
};

//actionmethod
burgerMenu.addEventListener('click',()=>{
    navBurger.classList.toggle('toggle');
});