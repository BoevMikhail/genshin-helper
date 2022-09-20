const CHARACTERS = [
    {
        "id": "aloy",
        "name": "Элой",
        "day": "mon",
        "element": "cryo",
        "weapon": "bow",
        "region": "mondstadt"
    },
    {
        "id": "amber",
        "name": "Эмбер",
        "day": "mon",
        "element": "pyro",
        "weapon": "bow",
        "region": "mondstadt"
    },
    {
        "id": "barbara",
        "name": "Барбара",
        "day": "mon",
        "element": "hydro",
        "weapon": "catalyst",
        "region": "mondstadt"
    },
    {
        "id": "diona",
        "name": "Диона",
        "day": "mon",
        "element": "cryo",
        "weapon": "bow",
        "region": "mondstadt"
    },
    {
        "id": "klee",
        "name": "Кли",
        "day": "mon",
        "element": "pyro",
        "weapon": "catalyst",
        "region": "mondstadt"
    },
    {
        "id": "sucrose",
        "name": "Сахароза",
        "day": "mon",
        "element": "anemo",
        "weapon": "catalyst",
        "region": "mondstadt"
    },
    {
        "id": "tartaglia",
        "name": "Тарталья",
        "day": "mon",
        "element": "hydro",
        "weapon": "bow",
        "region": "mondstadt"
    },
    {
        "id": "keqing",
        "name": "Кэ Цин",
        "day": "mon",
        "element": "electro",
        "weapon": "sword",
        "region": "liyue"
    },
    {
        "id": "ningguang",
        "name": "Нин Гуан",
        "day": "mon",
        "element": "geo",
        "weapon": "catalyst",
        "region": "liyue"
    },
    {
        "id": "qiqi",
        "name": "Ци Ци",
        "day": "mon",
        "element": "cryo",
        "weapon": "sword",
        "region": "liyue"
    },
    {
        "id": "shenhe",
        "name": "Шэнь Хэ",
        "day": "mon",
        "element": "cryo",
        "weapon": "polearm",
        "region": "liyue"
    },
    {
        "id": "xiao",
        "name": "Сяо",
        "day": "mon",
        "element": "anemo",
        "weapon": "polearm",
        "region": "liyue"
    },
    {
        "id": "kokomi",
        "name": "Кокоми",
        "day": "mon",
        "element": "hydro",
        "weapon": "catalyst",
        "region": "inazuma"
    },
    {
        "id": "thoma",
        "name": "Тома",
        "day": "mon",
        "element": "pyro",
        "weapon": "polearm",
        "region": "inazuma"
    },
    {
        "id": "yoimiya",
        "name": "Ёимия",
        "day": "mon",
        "element": "pyro",
        "weapon": "bow",
        "region": "inazuma"
    },
    {
        "id": "Itto",
        "name": "Итто",
        "day": "tue",
        "element": "geo",
        "weapon": "claymore",
        "region": "inazuma"
    },
    {
        "id": "ayaka",
        "name": "Аяка",
        "day": "tue",
        "element": "cryo",
        "weapon": "sword",
        "region": "inazuma"
    },
    {
        "id": "ayato",
        "name": "Аято",
        "day": "tue",
        "element": "hydro",
        "weapon": "sword",
        "region": "inazuma"
    },
    {
        "id": "sara",
        "name": "Сара",
        "day": "tue",
        "element": "electro",
        "weapon": "bow",
        "region": "inazuma"
    },
    {
        "id": "bennett",
        "name": "Беннет",
        "day": "tue",
        "element": "pyro",
        "weapon": "sword",
        "region": "mondstadt"
    },
    {
        "id": "diluc",
        "name": "Дилюк",
        "day": "tue",
        "element": "pyro",
        "weapon": "claymore",
        "region": "mondstadt"
    },
    {
        "id": "eula",
        "name": "Эола",
        "day": "tue",
        "element": "cryo",
        "weapon": "claymore",
        "region": "mondstadt"
    },
    {
        "id": "jean",
        "name": "Джинн",
        "day": "tue",
        "element": "anemo",
        "weapon": "sword",
        "region": "mondstadt"
    },
    {
        "id": "mona",
        "name": "Мона",
        "day": "tue",
        "element": "hydro",
        "weapon": "catalyst",
        "region": "mondstadt"
    },
    {
        "id": "noelle",
        "name": "Ноэлль",
        "day": "tue",
        "element": "geo",
        "weapon": "claymore",
        "region": "mondstadt"
    },
    {
        "id": "razor",
        "name": "Рэйзор",
        "day": "tue",
        "element": "electro",
        "weapon": "claymore",
        "region": "mondstadt"
    },
    {
        "id": "chongyun",
        "name": "Чун Юнь",
        "day": "tue",
        "element": "cryo",
        "weapon": "claymore",
        "region": "liyue"
    },
    {
        "id": "ganyu",
        "name": "Гань Юй",
        "day": "tue",
        "element": "cryo",
        "weapon": "bow",
        "region": "liyue"
    },
    {
        "id": "hu_tao",
        "name": "Ху Тао",
        "day": "tue",
        "element": "pyro",
        "weapon": "polearm",
        "region": "liyue"
    },
    {
        "id": "kazuha",
        "name": "Кадзуха",
        "day": "tue",
        "element": "anemo",
        "weapon": "sword",
        "region": "liyue"
    },
    {
        "id": "xiangling",
        "name": "Сян Лин",
        "day": "tue",
        "element": "pyro",
        "weapon": "polearm",
        "region": "liyue"
    },
    {
        "id": "yun_jin",
        "name": "Юнь Цзинь",
        "day": "tue",
        "element": "geo",
        "weapon": "polearm",
        "region": "liyue"
    },
    {
        "id": "albedo",
        "name": "Альбедо",
        "day": "wed",
        "element": "geo",
        "weapon": "sword",
        "region": "mondstadt"
    },
    {
        "id": "fischl",
        "name": "Фишль",
        "day": "wed",
        "element": "electro",
        "weapon": "bow",
        "region": "mondstadt"
    },
    {
        "id": "kaeya",
        "name": "Кэйа",
        "day": "wed",
        "element": "cryo",
        "weapon": "sword",
        "region": "mondstadt"
    },
    {
        "id": "lisa",
        "name": "Лиза",
        "day": "wed",
        "element": "electro",
        "weapon": "catalyst",
        "region": "mondstadt"
    },
    {
        "id": "rosaria",
        "name": "Розария",
        "day": "wed",
        "element": "cryo",
        "weapon": "polearm",
        "region": "mondstadt"
    },
    {
        "id": "venti",
        "name": "Венти",
        "day": "wed",
        "element": "anemo",
        "weapon": "bow",
        "region": "mondstadt"
    },
    {
        "id": "beidou",
        "name": "Бэй Доу",
        "day": "wed",
        "element": "electro",
        "weapon": "claymore",
        "region": "liyue"
    },
    {
        "id": "xingqiu",
        "name": "Син Цю",
        "day": "wed",
        "element": "hydro",
        "weapon": "sword",
        "region": "liyue"
    },
    {
        "id": "xinyan",
        "name": "Синь Янь",
        "day": "wed",
        "element": "pyro",
        "weapon": "claymore",
        "region": "liyue"
    },
    {
        "id": "yanfei",
        "name": "Ян Фэй",
        "day": "wed",
        "element": "pyro",
        "weapon": "catalyst",
        "region": "liyue"
    },
    {
        "id": "zhongli",
        "name": "Джун Ли",
        "day": "wed",
        "element": "geo",
        "weapon": "polearm",
        "region": "liyue"
    },
    {
        "id": "gorou",
        "name": "Горо",
        "day": "wed",
        "element": "geo",
        "weapon": "bow",
        "region": "inazuma"
    },
    {
        "id": "raiden",
        "name": "Райден",
        "day": "wed",
        "element": "electro",
        "weapon": "polearm",
        "region": "inazuma"
    },
    {
        "id": "sayu",
        "name": "Саю",
        "day": "wed",
        "element": "anemo",
        "weapon": "claymore",
        "region": "inazuma"
    },
    {
        "id": "yae_miko",
        "name": "Яэ Мико",
        "day": "wed",
        "element": "electro",
        "weapon": "catalyst",
        "region": "inazuma"
    },
    {
        "id": "yelan",
        "name": "Е Лань",
        "day": "mon",
        "element": "hydro",
        "weapon": "bow",
        "region": "liyue"
    }
]
const LEVELUP = [3, 2 * 3, 4 * 3, 6 * 3, 9 * 3, 4 * 9, 6 * 9, 12 * 9, 16 * 9, 0];
const BOOKS = {
    "mon-mondstadt": "freedom",
    "tue-mondstadt": "resistance",
    "wed-mondstadt": "ballad",
    "mon-liyue": "prosperity",
    "tue-liyue": "diligence",
    "wed-liyue": "gold",
    "mon-inazuma": "transience",
    "tue-inazuma": "elegance",
    "wed-inazuma": "light"
}
/* Заполнение выбора персонажей */
CHARACTERS.forEach((character) => {
    let char_for_choose = document.createElement("img");
    char_for_choose.src = `img/characters/${character.id}.png`;
    char_for_choose.width = 50;
    char_for_choose.classList.add(`chooser__character`);
    char_for_choose.classList.add(`${character.id}`);
    char_for_choose.alt = `${character.name}`;
    document.querySelector(`.chooser__${character.element}-${character.weapon}`).appendChild(char_for_choose);
})

/* Убирает оповещение об отсутствии персонажей в списке */
let chooserCharacters = document.querySelectorAll(".chooser__character");
function removeAlert(day) {
    let dayAlert = day.querySelector('.day__alert');
    if (dayAlert != null)
        day.removeChild(dayAlert);
}

/* Переключение отображения чузера */
let chooser = document.querySelector(".greyscreen");
function toggleChooser() {
    chooser.toggleAttribute("hidden");
}

/* Переменные списков относительно дней */
let mon = document.querySelector(".mon");
let tue = document.querySelector(".tue");
let wed = document.querySelector(".wed");

let createCharacter = (char, skill) => {
    let template = document.querySelector(".new__char");
    let newChar = template.content.cloneNode(true);
    let charCard = newChar.querySelector(`.character`);
    let charImage = newChar.querySelector(".character__image");
    let charName = newChar.querySelector(".character__name");
    let charTalents = newChar.querySelectorAll(".skill__level");
    let counter = 1;


    let currentCharacter;
    CHARACTERS.forEach((curChar) => {
        if (char.classList.contains(`${curChar.id}`))
            currentCharacter = curChar;
    })

    let book = BOOKS[`${currentCharacter.day}-${currentCharacter.region}`];
    let bookBronze = document.getElementById(`${book}_bronze`);
    let bookSilver = document.getElementById(`${book}_silver`);
    let bookGold = document.getElementById(`${book}_gold`);


    charTalents.forEach((talent) => {
        talent.id = `${currentCharacter.id}_${counter}`;
        if (skill)
            talent.textContent = skill[counter - 1];
        counter++;
    });
    charCard.id = `${currentCharacter.id}`;
    charCard.classList.add(`${currentCharacter.id}`);
    charImage.src = `img/characters/${currentCharacter.id}.png`;
    charImage.alt = `${currentCharacter.name}`;
    charName.textContent = `${currentCharacter.name}`;



    let currentDay;
    if (currentCharacter.day == `mon`)
        currentDay = mon;
    if (currentCharacter.day == `tue`)
        currentDay = tue;
    if (currentCharacter.day == `wed`)
        currentDay = wed;

    let place = currentDay.querySelector(`.day__${currentCharacter.region}`);
    if (place.classList.contains(`visually-hidden`)) {
        place.classList.remove(`visually-hidden`);
    }

    char.remove();
    place.appendChild(newChar);
    toggleChooser();
    removeAlert(currentDay);

    newChar = document.querySelector(`.${currentCharacter.id}`);
    let talents = newChar.querySelectorAll(`.skill`);
    talents.forEach((talent) => {
        let skillLevel = talent.querySelector(`.skill__level`);
        let head6 = talent.querySelector(`.skill__head-6`);
        let head9 = talent.querySelector(`.skill__head-9`);
        let need1 = talent.querySelector(`.skill__need-1`);
        let need6 = talent.querySelector(`.skill__need-6`);
        let need9 = talent.querySelector(`.skill__need-9`);
        let left1 = talent.querySelector(`.skill__left-1`);
        let left6 = talent.querySelector(`.skill__left-6`);
        let left9 = talent.querySelector(`.skill__left-9`);
        let attempt1 = talent.querySelector(`.skill__attempt-1`);
        let attempt6 = talent.querySelector(`.skill__attempt-6`);
        let attempt9 = talent.querySelector(`.skill__attempt-9`);
        let skillMath = talent.querySelector(`.skill__math`);

        need1.textContent = LEVELUP[skillLevel.textContent - 1];
        for (let i = skillLevel.textContent - 1; i < 5; i++) {
            need6.textContent = Number(need6.textContent) + LEVELUP[i];
        }
        if (need6.textContent == "")
            need6.textContent = 0;
        for (let i = skillLevel.textContent - 1; i < 8; i++) {
            need9.textContent = Number(need9.textContent) + LEVELUP[i];
        }
        if (need9.textContent == "")
            need9.textContent = 0;

        let getLeft1 = () => {
            left1.textContent = need1.textContent - bookBronze.value;
            if (skillLevel.textContent > 1)
                left1.textContent = left1.textContent - bookSilver.value * 3;
            if (skillLevel.textContent >= 6)
                left1.textContent = left1.textContent - bookGold.value * 9;
            if (left1.textContent < 0)
                left1.textContent = 0;

            if (left1.textContent == 0 && skillLevel.textContent < 10) {
                need1.style.backgroundColor = 'lightgreen';
                left1.style.backgroundColor = 'lightgreen';
                attempt1.style.backgroundColor = 'lightgreen';
            } else {
                need1.style.background = 'none';
                left1.style.background = 'none';
                attempt1.style.background = 'none';
            }
        }
        let getLeft6 = () => {
            left6.textContent = need6.textContent - bookBronze.value - bookSilver.value * 3;
            if (left6.textContent < 0)
                left6.textContent = 0;

            if (skillLevel.textContent == 1 && bookBronze.value < 3) {
                left6.textContent = need6.textContent - 3 - bookSilver.value * 3;
                if (left6.textContent < 0)
                    left6.textContent = 0;
                left6.textContent = Number(left6.textContent) + Number(left1.textContent);
            }

            if (left6.textContent == 0 && skillLevel.textContent < 6) {
                need6.style.backgroundColor = 'lightgreen';
                left6.style.backgroundColor = 'lightgreen';
                attempt6.style.backgroundColor = 'lightgreen';
            } else {
                need6.style.background = 'none';
                left6.style.background = 'none';
                attempt6.style.background = 'none';
            }
        }
        let getLeft9 = () => {
            left9.textContent = need9.textContent - bookBronze.value - bookSilver.value * 3 - bookGold.value * 9;
            if (left9.textContent < 0)
                left9.textContent = 0;

            if (skillLevel.textContent < 6) {
                left9.textContent = need9.textContent - need6.textContent - bookGold.value * 9;
                if (left9.textContent < 0)
                    left9.textContent = 0;

                if (skillLevel.textContent == 1 && bookBronze.value < 3) {
                    left9.textContent = Number(left9.textContent) + Number(need6.textContent) - 3 - bookSilver.value * 3;
                    if (left9.textContent < 0)
                        left9.textContent = 0;
                    left9.textContent = Number(left9.textContent) + Number(left1.textContent);
                } else {
                    left9.textContent = Number(left9.textContent) + Number(need6.textContent) - bookSilver.value * 3 - bookBronze.value;
                }

            }

            if (left9.textContent < 0)
                left9.textContent = 0;

            if (left9.textContent == 0 && skillLevel.textContent < 9) {
                need9.style.backgroundColor = 'lightgreen';
                left9.style.backgroundColor = 'lightgreen';
                attempt9.style.backgroundColor = 'lightgreen';
            } else {
                need9.style.background = 'none';
                left9.style.background = 'none';
                attempt9.style.background = 'none';
            }

        }

        let getAttempt1 = () => {
            attempt1.textContent = Math.ceil(left1.textContent / 17);
        }
        let getAttempt6 = () => {
            attempt6.textContent = Math.ceil(left6.textContent / 17);
        }
        let getAttempt9 = () => {
            attempt9.textContent = Math.ceil(left9.textContent / 17);
        }

        let removeMath = () => {
            if (skillLevel.textContent >= 6) {
                head6.classList.add(`visually-hidden`);
                need6.classList.add(`visually-hidden`);
                left6.classList.add(`visually-hidden`);
                attempt6.classList.add(`visually-hidden`);
            } else if (head6.classList.contains(`visually-hidden`)) {
                head6.classList.remove(`visually-hidden`);
                need6.classList.remove(`visually-hidden`);
                left6.classList.remove(`visually-hidden`);
                attempt6.classList.remove(`visually-hidden`);
            }


            if (skillLevel.textContent == 9) {
                head9.classList.add(`visually-hidden`);
                need9.classList.add(`visually-hidden`);
                left9.classList.add(`visually-hidden`);
                attempt9.classList.add(`visually-hidden`);
            } else if (head6.classList.contains(`visually-hidden`)) {
                head9.classList.remove(`visually-hidden`);
                need9.classList.remove(`visually-hidden`);
                left9.classList.remove(`visually-hidden`);
                attempt9.classList.remove(`visually-hidden`);
            }


            if (skillLevel.textContent == 10)
                skillMath.classList.add(`visually-hidden`);
            else
                skillMath.classList.remove(`visually-hidden`);;

        }

        let letsMath = () => {
            getLeft1();
            getLeft6();
            getLeft9();
            getAttempt1();
            getAttempt6();
            getAttempt9();
            removeMath();
        }

        letsMath();

        skillLevel.previousElementSibling.addEventListener('click', () => {
            if (skillLevel.textContent > 1) {
                skillLevel.textContent--;
                if (skillLevel.textContent < 6)
                    need6.textContent = Number(need6.textContent) + LEVELUP[skillLevel.textContent - 1];
                need9.textContent = Number(need9.textContent) + LEVELUP[skillLevel.textContent - 1];
            }
            need1.textContent = LEVELUP[skillLevel.textContent - 1];
            if (skillLevel.textContent == 9)
                need9.textContent = 0;
            letsMath();
        })
        skillLevel.nextElementSibling.addEventListener('click', () => {
            if (skillLevel.textContent < 10) {
                skillLevel.textContent++;
                need9.textContent = Number(need9.textContent) - LEVELUP[skillLevel.textContent - 2];
            }
            need1.textContent = LEVELUP[skillLevel.textContent - 1];
            if (skillLevel.textContent <= 6)
                need6.textContent = Number(need6.textContent) - LEVELUP[skillLevel.textContent - 2];
            if (skillLevel.textContent == 10)
                need9.textContent = 0;
            letsMath();
        })

        bookBronze.previousElementSibling.addEventListener('click', () => {
            letsMath();
        })
        bookBronze.addEventListener('change', () => {
            letsMath();
        })
        bookBronze.nextElementSibling.addEventListener('click', () => {
            letsMath();
        })

        bookSilver.previousElementSibling.addEventListener('click', () => {
            letsMath();
        })
        bookSilver.addEventListener('change', () => {
            letsMath();
        })
        bookSilver.nextElementSibling.addEventListener('click', () => {
            letsMath();
        })

        bookGold.previousElementSibling.addEventListener('click', () => {
            letsMath();
        })
        bookGold.addEventListener('change', () => {
            letsMath();
        })
        bookGold.nextElementSibling.addEventListener('click', () => {
            letsMath();
        })

    })

}

/* Добавление персонажа в список */
chooserCharacters.forEach((character) => {
    character.addEventListener("click", () => createCharacter(character));

})

/* Открытие чузера */
let chooserButton = document.querySelector(`.menu__chooser-show`);
chooserButton.addEventListener(`click`, () => {
    toggleChooser();
})

/* Закрытие чузера при клике по подложке */
document.addEventListener('click', (e) => {
    if (e.target == chooser)
        toggleChooser();
})

let books = document.querySelectorAll(".others__book");
books.forEach((book) => {
    let bookMinus = book.querySelector(`.book__minus`);
    let bookPlus = book.querySelector(`.book__plus`);
    let bookLevel = book.querySelector(`.book__count`);

    bookMinus.addEventListener('click', () => {
        if (bookLevel.value > 0)
            bookLevel.value--;
    })

    bookPlus.addEventListener('click', () => {
        bookLevel.value++;
    })

    bookLevel.addEventListener('change', () => {
        if (bookLevel.value < 0 || bookLevel.value == "") {
            bookLevel.value = 0;
        }
    })
})

window.onbeforeunload = () => {
    let chars = document.querySelectorAll('.character');
    chars.forEach((char) => {
        let skills = char.querySelectorAll('.skill__level');
        for (let i = 0; i < 3; i++) {
            localStorage.setItem(`${skills[i].id}`, `${skills[i].textContent}`);
        }
    })
    let books = document.querySelectorAll('.book__count');
    books.forEach((book) => {
        if (book.value != "") {
            localStorage.setItem(`${book.id}`, `${book.value}`);
        } else {
            localStorage.setItem(`${book.id}`, "0");
        }
    })
}

window.onload = () => {
    let books = document.querySelectorAll('.book__count');
    books.forEach((book) => {
        book.value = localStorage.getItem(`${book.id}`);
        if (!localStorage.getItem(`${book.id}`))
            book.value = 0;
    })

    CHARACTERS.forEach((char) => {
        if (localStorage.getItem(`${char.id}_1`)) {
            let currentCharacter;
            chooserCharacters.forEach((curChar) => {
                if (curChar.classList.contains(`${char.id}`))
                    currentCharacter = curChar;
            })
            createCharacter(currentCharacter, [localStorage.getItem(`${char.id}_1`), localStorage.getItem(`${char.id}_2`), localStorage.getItem(`${char.id}_3`)]);
            toggleChooser();
        }
    })
}