'use strict';

document.addEventListener(`DOMContentLoaded`, () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    let adv = document.querySelectorAll(`.promo__adv img`),
        poster = document.querySelector(`.promo__bg`),
        genre = poster.querySelector(`.promo__genre`),
        movieList = document.querySelector(`.promo__interactive-list`),
        addForm = document.querySelector(`form.add`),
        addInput = addForm.querySelector(`.adding__input`),
        checkbox = addForm.querySelector(`[type='checkbox']`);

    addForm.addEventListener(`submit`, (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        let favorite = checkbox.checked;

        if (newFilm) {
            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            };

            if(favorite) {
                console.log (`Улюблений фільм`)
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        };

        event.target.reset();
    });

    let deleteADV = (arr) => {
            arr.forEach (i => {
            i.remove();
        });
    };

    deleteADV(adv);
    
    let makeChanges = () => {
        genre.textContent = `Драма`;
    
        poster.style.backgroundImage = `url('img/bg.jpg')`; 
    };
    
    makeChanges ();

    let sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {

        sortArr(films);

        parent.innerHTML = ``;
    
            films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll(`.delete`).forEach ((btn, i) => {
            btn.addEventListener(`click`, () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            })
        })
    };

    createMovieList(movieDB.movies, movieList);

});

