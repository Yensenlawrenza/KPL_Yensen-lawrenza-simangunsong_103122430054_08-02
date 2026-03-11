const textarea = document.getElementById('inputText');

textarea.addEventListener('input', () => {
    const text = textarea.value;
    document.getElementById('charCount').innerText = text.length;
    document.getElementById('upperCount').innerText = (text.match(/[A-Z]/g) || []).length;
    document.getElementById('lowerCount').innerText = (text.match(/[a-z]/g) || []).length;
});

function transform(type) {
    let text = textarea.value;
    if (type === 'upper') text = text.toUpperCase();
    if (type === 'lower') text = text.toLowerCase();
    if (type === 'sentence') {
        text = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
    }
    textarea.value = text;
}