function temaDark() {
    const dark = document.getElementById('body');

    if (dark.classList.value == '' | dark.classList.value == 'increment-font' | dark.classList.value == 'decrement-font') {
        dark.classList.add('dark');
        console.log(dark.classList.value);
        return
    }
    dark.classList.remove('dark');

    console.log(dark.classList)
};

function incrementFont() {
    const font = document.getElementById('body')
    font.classList.remove('decrement-font');
    font.classList.add('increment-font');
};

function decrementFont() {
    const font = document.getElementById('body')
    font.classList.remove('increment-font');
    font.classList.add('decrement-font');
};

function fontPadrao() {
    font = document.getElementById('body');

    font.classList.remove('increment-font');
    font.classList.remove('decrement-font');
};

