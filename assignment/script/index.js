import {superheroesJSON} from './superheroes.js';

let superheroes=JSON.parse(superheroesJSON);

const main=document.querySelector('.wrapper');
document.addEventListener('DOMContentLoaded', function() {
    let heroesContent='';
    for (let hero of superheroes) {
        heroesContent +=`<div class="superhero">
        <div class="superhero__name">${hero.name}</div>
        <div class="superhero__universe">Вселенная: ${hero.universe}</div>
        <div class="superhero__alterego">Альтер-эго: ${hero.alterego}</div>
        <div class="superhero__occupation">Род деятельности: ${hero.occupation}</div>
        <div class="superhero__friends">Друзья: ${hero.friends}</div>
        <div class="superhero__superpowers">Суперсилы: ${hero.superpowers}</div>
        <div class="superhero__info">Описание: ${hero.info}</div>
        <div class="superhero__picture"><img class="hero-image" src="${hero.url}" alt="superheroImage"></div>
        <div class="rating-box">
        <div class="superhero__rating rating">
        <div class="rating__items">
            <input id="rating__5${hero.name}" type="radio" class="rating__item" name="rating" value="5">
            <label for="rating__5${hero.name}" class="rating__label"></label>
            <input id="rating__4${hero.name}" type="radio" class="rating__item" name="rating" value="4">
            <label for="rating__4${hero.name}" class="rating__label"></label>
            <input id="rating__3${hero.name}" type="radio" class="rating__item" name="rating" value="3">
            <label for="rating__3${hero.name}" class="rating__label"></label>
            <input id="rating__2${hero.name}" type="radio" class="rating__item" name="rating" value="2">
            <label for="rating__2${hero.name}" class="rating__label"></label>
            <input id="rating__1${hero.name}" type="radio" class="rating__item" name="rating" value="1">
            <label for="rating__1${hero.name}" class="rating__label"></label>
        </div>
    </div>
    </div>
        </div>`
    }
    main.innerHTML=heroesContent;
})