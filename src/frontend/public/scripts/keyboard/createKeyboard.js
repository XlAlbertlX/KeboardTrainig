const KeyboardBlock = document.querySelector('.keyboard-block');
//TODO: Узнать в чем отличия между keypress и keydown
//TODO: Написать уведомление, если выбрана не та раскладка
createKeyboard();

document.addEventListener('keydown', (e) => {
    e.preventDefault();
    let key = e.key;

    buttonHighlight(key);
});


function createKeyboard() {
    //массив рядов клавиатуры
    const keysValues = [
        ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
        ['tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'з', 'х', 'ъ', 'enter'],
        ['Caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\'],
        ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'shift'],
        ['ctrl', 'win', 'alt', 'space', 'alt', 'fn', 'cmd', 'ctrl']
    ];

    for (let i = 0; i < keysValues.length; i++) {
        const row = document.createElement("div");
        row.classList.add("keyboard-block__keyboard-row");

        for (let j = 0; j < keysValues[i].length; j++) {
            const keyValue = keysValues[i][j];
            const button = document.createElement("div");

            button.classList.add("keyboard-block__key");
            button.textContent = keyValue;
            button.dataset.key = keyValue.toLowerCase().replace(/\s+/g, '');

            row.appendChild(button);
        }
        KeyboardBlock.appendChild(row);
    }
}

function buttonHighlight(keyValue) {
    const normalizedKey = keyValue.toLowerCase().replace(/\s+/g, '');
    const button = document.querySelector(`.keyboard-block__key[data-key="${normalizedKey}"]`);

    if (button) {
        button.classList.add("keyboard-block__key--pressed");

        setTimeout(() => {
            button.classList.remove("keyboard-block__key--pressed");
        }, 120);
    }
}