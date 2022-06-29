let json = `[
    {   "nickname":"Бэтмен",
        "img":"./image/1.jpg",
        "universe": "DC Comics",
        "alterego": "Брюс Уэйн",
        "activity": "борец с преступностью, филантроп, миллиардер",
        "friends": "Робин, Бэтгерл",
        "superpowers": "интеллект, обширные познания, знания боевых искусств, ловкость"
    },
    {
        "nickname": "Супермен",
        "img":"./image/2.jpg",
        "universe": "DC Comics",
        "alterego": "Кларк Кент",
        "activity": "борец за справедливость",
        "friends": "собака Крипто",
        "superpowers": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм"

    },
    {
        "nickname": "Железный человек",
        "img":"./image/3.jpg",
        "universe": "Marvel Comics",
        "alterego": "Тони Старк",
        "activity": "гений, миллиардер, плейбой, филантроп",
        "friends": "Мстители",
        "superpowers": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы"
  
    },
    {
        "nickname": "Спайдер-мен/Человек-паук",
        "img":"./image/4.jpg",
        "universe": "Marvel Comics",
        "alterego": "Питер Паркер",
        "activity": "борец за справедливость, студент, фотограф",
        "friends": "Мстители, Фантастическая четверка, Люди Икс",
        "superpowers": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины"
    },
    {
        "nickname": "Капитан Америка",
        "img":"./image/5.jpg",
        "universe": "Marvel Comics",
        "alterego": "Стивен Роджерс",
        "activity": "супер-солдат",
        "friends": "Мстители",
        "superpowers": " сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя"
    },
    {
        "nickname": "Тор",
        "img":"./image/6.jpg",
        "universe": "Marvel Comics",
        "alterego": "нет; полное имя — Тор Одинсон",
        "activity": "борец за справедливость, скандинавский бог",
        "friends": "Мстители",
        "superpowers": " все, что может бог, плюс молот Мьелнир"
    },
    {
        "nickname": "Халк",
        "img":"./image/7.jpg",
        "universe": "Marvel Comics",
        "alterego": "Брюс Беннер",
        "activity": "супергерой, борец за справедливость, ученый-биохимик",
        "friends": "Мстители",
        "superpowers": "сверхчеловеческая сила искорость, выносливость, полет"

    },
    {
        "nickname": "Чудо-женщина",
        "img":"./image/8.jpg",
        "universe": "DC Comics",
        "alterego": "Диана Принс",
        "activity": "супергероиня, секретарь-референт",
        "friends": "Лига Справедливости, Бэтмен, Супермен",
        "superpowers": "сверхчеловеческая сила искорость, выносливость, полет"

    },
    {
        "nickname": "Черная вдова",
        "img":"./image/9.jpg",
        "universe": "Marvel Comics",
        "alterego": "Наташа Романоффv",
        "activity": "супергероиня, шпионка",
        "friends": "Мстители",
        "superpowers": "пик человеческого физического потенциала, замедленное старение, знание многих языков"
    },
    {
        "nickname": "Дэдпул",
        "img":"./image/10.jpg",
        "universe": "Marvel Comics",
        "alterego": "Уэйд Уинстон Уилсон",
        "activity": "антигерой, наемник",
        "friends": "частично Мстители, Человек-паук, Росомаха",
        "superpowers": "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система"
    }
]`;

    document.addEventListener("DOMContentLoaded", function (e) {
     let marvels = JSON.parse(json)
     let marvelContent = "";

     for (let marvel of marvels){
        marvelContent  += `<div class =marvel__box > <img src =${marvel.img} width = 300vw>
        <h2>${marvel.nickname}</h2>
            <p>Вселенная: ${marvel.universe}</p>
            <p>Альтер эго: ${marvel.alterego}</p>
            <p>Род деятельности: ${marvel.activity}</p>
            <p>Друзья:${marvel.friends}</p>
            <p>Суперсилы: ${marvel.superpowers}</p>
            <p>РЕЙТИНГ:</p>
            <div class="rating">
            <input id="rating-1" type="radio" class="item" name="${marvel['nickname']}" value="1">
            <label for="rating-1">1</label>
            <input id="rating-2" type="radio" class="item" name="${marvel['nickname']}" value="2">
            <label for="rating-2">2</label>
            <input id="rating-3" type="radio" class="item" name="${marvel['nickname']}" value="3">
            <label for="rating-3">3</label>
            <input id="rating-4" type="radio" class="item" name="${marvel['nickname']}" value="4">
            <label for="rating-4">4</label>
            <input id="rating-5" type="radio" class="item" name="${marvel['nickname']}" value="5">
            <label for="rating-5">5</label>
        </div> </div>`;
     }

     document.querySelector('.box').innerHTML = marvelContent;
     

     document.querySelector('.btn').addEventListener('click',(e)=>{
        e.preventDefault();
      ;
        let inputs = document.querySelectorAll('.item');

        for(let i = 0; i < inputs.length; i++){
            if(inputs[i].checked){
                localStorage.setItem('rating', inputs[i].value);
            }
        }
        


        
     })

    })
  




    