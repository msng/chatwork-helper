"use strict";
{
    const toMessagePattern = /@(\[To:\d+].+さん\n?)$/;
    const actionsOnLocationHashChange = [];
    let currentLocationHash;
    let toList;
    let toListShown = false;
    let chatTextInput;
    let toRemoveTrigger = false;
    init();
    function init() {
        watchLocationHash();
        watchToListShown();
        watchChatTextInput();
        listenKeyUp();
        actionsOnLocationHashChange.push(unsetToList);
        actionsOnLocationHashChange.push(unsetChatTextInput);
    }
    function watchLocationHash() {
        if (currentLocationHash !== location.hash) {
            currentLocationHash = location.hash;
            actionsOnLocationHashChange.forEach(action => action());
        }
        requestAnimationFrame(watchLocationHash);
    }
    function watchToListShown() {
        !toList && (toList = document.querySelector('#_toList'));
        if (toList) {
            toListShown = toList.getBoundingClientRect().height > 0;
        }
        requestAnimationFrame(watchToListShown);
    }
    function unsetToList() {
        toList = null;
    }
    function watchChatTextInput() {
        const currentChatTextInput = document.querySelector('#_chatText');
        if (chatTextInput !== currentChatTextInput) {
            chatTextInput = currentChatTextInput;
        }
        if (toRemoveTrigger && chatTextInput && toMessagePattern.test(chatTextInput.value)) {
            chatTextInput.value = chatTextInput.value.replace(toMessagePattern, '$1');
            toRemoveTrigger = false;
            toList && (toList.style.removeProperty('display'));
        }
        requestAnimationFrame(watchChatTextInput);
    }
    function unsetChatTextInput() {
        chatTextInput = null;
    }
    function listenKeyUp() {
        document.addEventListener('keyup', (e) => {
            if (!toListShown) {
                if (e.key === '@') {
                    toRemoveTrigger = true;
                    document.querySelector('#_to').click();
                }
            }
        });
    }
}
