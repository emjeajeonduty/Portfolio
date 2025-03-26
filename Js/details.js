const popUp_imgPage = document.querySelectorAll('main .container .p_card .pc_view');
const btn_xPage = document.querySelector('main .container .popUp_img span');

const popUp_img = document.querySelectorAll('main #gallery img');
const btn_x = document.querySelector('main #description .popUp_img span');

popUp_imgPage.forEach(pImgPage => {
    pImgPage.onclick = () => {
        document.querySelector('main .container .popUp_img').classList.add('active')
        document.querySelector('main .container .popUp_img').style.display = 'grid';
        document.querySelector('main .container .popUp_img img').src = pImgPage.querySelector('img').getAttribute('src')
    }

    btn_xPage.addEventListener('click',()=>{
        document.querySelector('main .container .popUp_img').style.display = 'none';
        document.querySelector('main .container .popUp_img').classList.remove('active')
    })
})

popUp_img.forEach(pImg => {
    pImg.onclick = () => {
        document.querySelector('main #description .popUp_img').classList.add('active')
        document.querySelector('main #description .popUp_img').style.display = 'grid';
        document.querySelector('main #description .popUp_img img').src = pImg.getAttribute('src')
    }

    btn_x.addEventListener('click',()=>{
        document.querySelector('main #description .popUp_img').style.display = 'none';
        document.querySelector('main #description .popUp_img').classList.remove('active')
    })
})
