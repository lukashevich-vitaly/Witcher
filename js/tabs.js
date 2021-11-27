const tabs = (option) => {
    const {
        selectorTabsButton,
        activeClassButton,
        selectorTabsElement,
        activeClassTab,
        callback = () => {},
    } = option

    const tabsBtns = document.querySelectorAll(selectorTabsButton)
    const tabsElems = document.querySelectorAll(selectorTabsElement)

    tabsBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            for (let i = 0; i < tabsBtns.length; i++){
                if(tabsBtns[i] === btn) {
                    tabsBtns[i].classList.add(activeClassButton)
                    tabsElems[i].classList.add(activeClassTab)
                    callback(i)
                } else {
                    tabsBtns[i].classList.remove(activeClassButton)
                    tabsElems[i].classList.remove(activeClassTab)
                }
            }
        })
    })
}

export default tabs