const inputs = document.querySelectorAll("#verifiCode input");
document.addEventListener('paste', function(e) {
    const paste = e.clipboardData.getData('text');
    if (paste) {
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = paste[i];
            inputs[i].dispatchEvent(new InputEvent('input'));
        }
    }
});
