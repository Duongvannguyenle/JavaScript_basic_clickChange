// gọi dữ liệu
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const tabActive = $('.tab-item.active')
const line = $('.tabs .line')


  
tabs.forEach((tab, index) => {
    const pane = panes[index]

    tab.onclick = function () {
    // remove 'active' when click on else
    $('.tab-item.active').classList.remove('active')
    $('.tab-pane.active').classList.remove('active')

    // line active
    line.style.left = this.offsetLeft + 'px'
    line.style.width = this.offsetWidth + 'px'

    // add active when on click
    this.classList.add('active')
    pane.classList.add('active')

    }
})


