
let cmsFrontPic = document.querySelector('#cms_front_cover');

let eComFrontPic = document.getElementById('clothing_front_cover');
let takeAwayFrontPic =document.querySelector('#takeaway_front_cover');

cmsFrontPic.addEventListener('mouseenter',change_cms_background_in);
cmsFrontPic.addEventListener('mouseleave',change_cms_background_out);

eComFrontPic.addEventListener('mouseenter',change_eCom_background_in);
eComFrontPic.addEventListener('mouseleave',change_eCom_background_out);

takeAwayFrontPic.addEventListener('mouseenter',change_takeAway_background_in);
takeAwayFrontPic.addEventListener('mouseleave',change_takeAway_background_out);


function change_cms_background_in(){
    this.setAttribute('src','img/cms_hover.jpg')
}

function change_cms_background_out(){
    this.setAttribute('src','img/cms_frontcover.png')
}

function change_eCom_background_in(){
    this.setAttribute('src','img/clothing_hover.jpg');
}

function change_eCom_background_out(){
    this.setAttribute('src','img/clothing_frontcover.jpg');
}

function change_takeAway_background_in(){
    this.setAttribute('src','img/takeaway_hover.jpg');
}

function change_takeAway_background_out(){
    this.setAttribute('src','img/takeaway_frontcover.jpg');
}