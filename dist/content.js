"use strict";
{
    let currentHash;
    let mainTimoutId;
    let chatTextInput;
    setInterval(() => {
        if (currentHash !== location.hash) {
            currentHash = location.hash;
            clearTimeout(mainTimoutId);
            main();
        }
    }, 500);
    function main() {
        chatTextInput = getChatTextInput();
        if (!chatTextInput) {
            mainTimoutId = setTimeout(main, 500);
        }
    }
    function getChatTextInput() {
        return document.querySelector('#_chatText');
    }
    function getToButton() {
        return document.querySelector('#_to');
    }
    document.addEventListener('keyup', (e) => {
        if (!chatTextInput) {
            return;
        }
        if (e.key === '@') {
            (chatTextInput.value.endsWith('@')) && (chatTextInput.value = chatTextInput.value.slice(0, -1));
            setTimeout(() => {
                var _a;
                (_a = getToButton()) === null || _a === void 0 ? void 0 : _a.click();
            }, 100);
        }
    });
}
