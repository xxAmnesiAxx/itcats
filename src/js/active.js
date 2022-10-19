let kcal = document.querySelector('.item');

kcal.addEventListener('click', ()=> {
    if (kcal.classList.contains('no-active')) {
        kcal.classList.add('active')
        kcal.classList.remove('no-active')
    } else {
        kcal.classList.add('no-active')
        kcal.classList.remove('active')
    }
});

let prote = document.querySelector('.item1');

prote.addEventListener('click', ()=> {
    if (prote.classList.contains('no-active')) {
        prote.classList.add('active')
        prote.classList.remove('no-active')
    } else {
        prote.classList.add('no-active')
        prote.classList.remove('active')
    }
});

let fats = document.querySelector('.item2');

fats.addEventListener('click', ()=> {
    if (fats.classList.contains('no-active')) {
        fats.classList.add('active')
        fats.classList.remove('no-active')
    } else {
        fats.classList.add('no-active')
        fats.classList.remove('active')
    }
});

let carbs = document.querySelector('.item3');

carbs.addEventListener('click', ()=> {
    if (carbs.classList.contains('no-active')) {
        carbs.classList.add('active')
        carbs.classList.remove('no-active')
    } else {
        carbs.classList.add('no-active')
        carbs.classList.remove('active')
    }
});

let kcalClick = document.querySelector('.item4');

kcalClick.addEventListener('click', ()=> {
    if (kcalClick.classList.contains('no-active')) {
        kcalClick.classList.add('active')
        kcalClick.classList.remove('no-active')
    } else {
        kcalClick.classList.add('no-active')
        kcalClick.classList.remove('active')
    }
});

let proteClick = document.querySelector('.item5');

proteClick.addEventListener('click', ()=> {
    if (proteClick.classList.contains('no-active')) {
        proteClick.classList.add('active')
        proteClick.classList.remove('no-active')
    } else {
        proteClick.classList.add('no-active')
        proteClick.classList.remove('active')
    }
});

let fatsClick = document.querySelector('.item6');

fatsClick.addEventListener('click', ()=> {
    if (fatsClick.classList.contains('no-active')) {
        fatsClick.classList.add('active')
        fatsClick.classList.remove('no-active')
    } else {
        fatsClick.classList.add('no-active')
        fatsClick.classList.remove('active')
    }
});

let carbsClick = document.querySelector('.item7');

carbsClick.addEventListener('click', ()=> {
    if (carbsClick.classList.contains('no-active')) {
        carbsClick.classList.add('active')
        carbsClick.classList.remove('no-active')
    } else {
        carbsClick.classList.add('no-active')
        carbsClick.classList.remove('active')
    }
});

let kcalOnClick = document.querySelector('.item8');

kcalOnClick.addEventListener('click', ()=> {
    if (kcalOnClick.classList.contains('no-active')) {
        kcalOnClick.classList.add('active')
        kcalOnClick.classList.remove('no-active')
    } else {
        kcalOnClick.classList.add('no-active')
        kcalOnClick.classList.remove('active')
    }
});

let proteOnClick = document.querySelector('.item9');

proteOnClick.addEventListener('click', ()=> {
    if (proteOnClick.classList.contains('no-active')) {
        proteOnClick.classList.add('active')
        proteOnClick.classList.remove('no-active')
    } else {
        proteOnClick.classList.add('no-active')
        proteOnClick.classList.remove('active')
    }
});

let fatsOnClick = document.querySelector('.item10');

fatsOnClick.addEventListener('click', ()=> {
    if (fatsOnClick.classList.contains('no-active')) {
        fatsOnClick.classList.add('active')
        fatsOnClick.classList.remove('no-active')
    } else {
        fatsOnClick.classList.add('no-active')
        fatsOnClick.classList.remove('active')
    }
});

let carbsOnClick = document.querySelector('.item11');

carbsOnClick.addEventListener('click', ()=> {
    if (carbsOnClick.classList.contains('no-active')) {
        carbsOnClick.classList.add('active')
        carbsOnClick.classList.remove('no-active')
    } else {
        carbsOnClick.classList.add('no-active')
        carbsOnClick.classList.remove('active')
    }
});


let closeModal = document.querySelector('.close'); 
 
    closeModal.addEventListener('click', () => { 
        let classes = document.querySelectorAll(".no-active"); 
        for (let one_class of classes) { 
            one_class.classList.remove('no-active'); 
        }    
    });

let closeIceCoffee = document.querySelector('.closes'); 
 
    closeIceCoffee.addEventListener('click', () => { 
        let clas = document.querySelectorAll(".no-active"); 
        for (let one_clas of clas) { 
            one_clas.classList.remove('no-active'); 
        }    
    });

let closeMilkShakes = document.querySelector('.closess'); 
 
    closeMilkShakes.addEventListener('click', () => { 
        let cla = document.querySelectorAll(".no-active"); 
        for (let one_cla of cla) { 
            one_cla.classList.remove('no-active'); 
        }    
    });
