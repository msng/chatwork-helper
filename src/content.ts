{
  let currentHash: string
  let mainTimoutId: number

  setInterval(() => {
    if (currentHash !== location.hash) {
      currentHash = location.pathname
      clearTimeout(mainTimoutId)
      main()
    }
  }, 500)

  function main() {
    const chatTextInput: HTMLTextAreaElement | null = getChatTextInput()

    if (chatTextInput) {
      init(chatTextInput)
    } else {
      mainTimoutId = setTimeout(main, 500)
    }
  }

  function getChatTextInput(): HTMLTextAreaElement | null {
    return document.querySelector('#_chatText')
  }

  function getToButton(): HTMLButtonElement | null {
    return document.querySelector('#_to')
  }

  function init(chatTextInput: HTMLTextAreaElement) {
    document.addEventListener('keyup', (e) => {
      if (e.key === '@') {
        // 入力内容の末尾が @ だったら、@ を削除して送信ボタンをクリックする
        (chatTextInput.value.endsWith('@')) && (chatTextInput.value = chatTextInput.value.slice(0, -1))
        setTimeout(() => {
          getToButton()?.click()
        }, 100)
      }
    })
  }
}
