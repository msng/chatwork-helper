"use strict";
{
    let currentHash;
    let mainTimoutId;
    setInterval(() => {
        if (currentHash !== location.hash) {
            currentHash = location.pathname;
            clearTimeout(mainTimoutId);
            main();
        }
    }, 500);
    function main() {
        const chatTextInput = getChatTextInput();
        if (chatTextInput) {
            init(chatTextInput);
        }
        else {
            mainTimoutId = setTimeout(main, 500);
        }
    }
    function getChatTextInput() {
        return document.querySelector('#_chatText');
    }
    function getToButton() {
        return document.querySelector('#_to');
    }
    function init(chatTextInput) {
        document.addEventListener('keyup', (e) => {
            if (e.key === '@') {
                (chatTextInput.value.endsWith('@')) && (chatTextInput.value = chatTextInput.value.slice(0, -1));
                setTimeout(() => {
                    var _a;
                    (_a = getToButton()) === null || _a === void 0 ? void 0 : _a.click();
                }, 100);
            }
        });
    }
}
