let n
chu()
setInterval(() => {
    makeLeave(getImage(n))
        .one('transitionend', (e) => {
            makeEnter($(e.currentTarget))
        })
    makeCurrent(getImage(n + 1))
    n = n + 1
}, 2000)




function x(n) {
    if (n > 4) {
        n = n % 4
        if (n === 0) { n = 4 }
    }//满足n=1 2 3
    return n
}
function getImage(n) {
    return $(`.images>img:nth-child(${x(n)})`)
}
function chu() {
    n = 1
    $(`.images>img:nth-child(${x(n)})`).addClass('current').siblings().addClass('enter')

}
function makeCurrent($node) {
    return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node) {
    return $node.removeClass('enter current').addClass('leave')

}
function makeEnter($node) {
    return $node.removeClass('leave current').addClass('enter')
}
