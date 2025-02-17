const ColorPicker = document.getElementById('colorPicker');
const fontSizeInput = document.getElementById('fontSizeInput');
const fontFamilySelect = document.getElementById('fontFamilySelect');
const paragraph = document.getElementById('paragraph');

function appliquerStyles() {
    paragraph.style.color = ColorPicker.value;
    paragraph.style.fontSize = fontSizeInput.value + 'px';
    paragraph.style.fontFamily = fontFamilySelect.value;
}
ColorPicker.addEventListener('input', appliquerStyles);
fontSizeInput.addEventListener('input', appliquerStyles);
fontFamilySelect.addEventListener('input', appliquerStyles);
appliquerStyles();



