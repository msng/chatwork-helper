{
  let currentHash: string
  let mainTimoutId: number
  let chatTextInput: HTMLTextAreaElement | null

  setInterval(() => {
    // 初期表示、またはルームを移動して hash が変わった場合のみ main を実行
    if (currentHash !== location.hash) {
      currentHash = location.hash
      clearTimeout(mainTimoutId)
      main()
    }
  }, 500)

  function main() {
    chatTextInput = getChatTextInput()

    if (!chatTextInput) {
      mainTimoutId = setTimeout(main, 500)
    }
  }

  function getChatTextInput(): HTMLTextAreaElement | null {
    return document.querySelector('#_chatText')
  }

  function getToButton(): HTMLButtonElement | null {
    return document.querySelector('#_to')
  }

    document.addEventListener('keyup', (e) => {
      if (!chatTextInput) {
        return
      }

      if (e.key === '@') {
        // 入力内容の末尾が @ だったら、@ を削除して送信ボタンをクリックする
        (chatTextInput.value.endsWith('@')) && (chatTextInput.value = chatTextInput.value.slice(0, -1))
        setTimeout(() => {
          getToButton()?.click()
        }, 100)
      }
    })
}
