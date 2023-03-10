import {superheroesJSON} from './superheroes.js';
const main=document.querySelector('.wrapper');

const superheroes=JSON.parse(superheroesJSON);

document.addEventListener('DOMContentLoaded', function() {
    let heroesContent='';
    for (let hero of superheroes) {
        heroesContent +=`<div class="superhero">
        <div class="superhero__name">${hero.name}</div>
        <div class="superhero__universe"><span>Вселенная:</span> ${hero.universe}</div>
        <div class="superhero__alterego"><span>Альтер-эго:</span> ${hero.alterego}</div>
        <div class="superhero__occupation"><span>Род деятельности:</span> ${hero.occupation}</div>
        <div class="superhero__friends"><span>Друзья:</span> ${hero.friends}</div>
        <div class="superhero__superpowers"><span>Суперсилы:</span> ${hero.superpowers}</div>
        <div class="superhero__info"><span>Описание:</span> ${hero.info}</div>
        <div class="superhero__picture"><img class="hero-image" src="${hero.url}" alt="superheroImage"></div>
        <div class="rating-box">
        <div class="superhero__rating rating">
        <div id="${hero.name}" class="rating__items">
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
    
    for (let hero of superheroes) {
        document.getElementById(`${hero.name}`).onclick = function (e) {
            const chosenRating = Array.from(e.currentTarget.children).filter((child) => {
                return child.checked===true;
            });
            window.localStorage.setItem(`${hero.name}_rating`, chosenRating[0].value)
        };
    }
});