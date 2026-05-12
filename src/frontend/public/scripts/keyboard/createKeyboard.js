import Notification from '../../common/Notification.js'
import Dictionary from '../dictionary/Dictionary.js'
const KeyboardBlock = document.querySelector('.keyboard-block');
const ChangeLayoutNotification = new Notification("Переключите раскладку!");
const Color = {
    transparent: "rgba(0, 0, 0, 0)",
    blue: "rgb(87 147 255 / 0.5)",
    purple: "rgb(116 82 255 / 0.5)",
    green: "rgb(119 255 82 / 0.5)",
    yellow: "rgb(255 241 82 / 0.5)",
    pink: "rgb(255 82 241 / 0.5)",
}
//TODO: Узнать в чем отличия между keypress и keydown
//TODO: начать делать во вторник:
//      - словарь фраз
//      - ввод слов
createKeyboard();


document.addEventListener('keydown', (e) => {
    e.preventDefault();
    let key = e.key;
    checkKeyboardLayout(key);
    buttonHighlight(key);
});


function createKeyboard() {
    const dic = new Dictionary();


    for(let i = 0; i < 10; i++) {
        console.log(dic.getRandomStringFromDictionary());
    }




    //массив рядов клавиатуры
    const keysValues = [
        ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
        ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'enter'],
        ['Caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\'],
        ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'shift'],
        ['control', 'win', 'alt', ' ', 'altgraph', 'fn', 'cmd', 'control']
    ];


    for (let i = 0; i < keysValues.length; i++) {
        const row = document.createElement("div");
        row.classList.add("keyboard-block__keyboard-row");

        for (let j = 0; j < keysValues[i].length; j++) {
            const keyValue = keysValues[i][j];
            const button = document.createElement("div");

            button.classList.add("keyboard-block__key");
            switch (keyValue) {
                case " ":
                    button.textContent = "space";
                    button.classList.add("keyboard-block__key--space");
                    break;
                case "altgraph":
                    button.textContent = "alt";
                    break;
                case "control":
                    button.textContent = "ctrl";
                    break;
                case "Caps lock":
                    button.textContent = "caps";
                    break;
                default:
                    button.textContent = keyValue;
            }


            button.dataset.key = keyValue.toLowerCase().replace(/\s+/g, '');

            row.appendChild(button);
        }
        KeyboardBlock.appendChild(row);
    }
}

function buttonHighlight(keyValue) {
    const blueButtons = ['4', '5', '6', 'к', 'е', 'а', 'а', 'п', 'м', 'и'];
    const purpleButtons = ['7', 'н', 'г', 'р', 'о', 'т', 'ь'];
    const greenButtons = ['3', 'у', 'в', 'с', '8', 'ш', 'л', 'б',];
    const yellowButtons = ['2', 'ц', 'ы', 'ч', '9', 'щ', 'д', 'ю'];
    const pinkButtons = ['ё', '1', 'й', 'ф', 'я', '0', '-', '=', 'з', 'х', 'ъ', 'enter', 'ж', 'э', '.', ' '];

    const normalizedKey = keyValue.toLowerCase().replace(/\s+/g, '');
    const button = document.querySelector(`.keyboard-block__key[data-key="${normalizedKey}"]`);

    if (button) {
        if(blueButtons.includes(keyValue.toLowerCase())) {
            button.style.backgroundColor = Color.blue;
        }

        if(purpleButtons.includes(keyValue.toLowerCase())) {
            button.style.backgroundColor = Color.purple;
        }

        if(greenButtons.includes(keyValue.toLowerCase())) {
            button.style.backgroundColor = Color.green;
        }

        if(yellowButtons.includes(keyValue.toLowerCase())) {
            button.style.backgroundColor = Color.yellow;
        }

        if(pinkButtons.includes(keyValue.toLowerCase())) {
            button.style.backgroundColor = Color.pink;
        }

        setTimeout(() => {
            button.style.backgroundColor = Color.transparent;
        }, 120);

    }
}

function checkKeyboardLayout(char) {
    let isRussian = /^[а-яё.,;:!?]$/i.test(char);

    //TODO: при нажатии на altgraph в тренажере показывается, что нажаты 2 клавищи - левый ctrl и правый alt
    if(['shift', ' ', 'control', 'shift', 'alt', 'meta', 'caps lock', 'altgraph', 'enter'].includes(char.toLowerCase())) {
        isRussian = true;
    }

    if (!isRussian) {
        ChangeLayoutNotification.show();
    }
}
