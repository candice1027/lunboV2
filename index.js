let n;
init();
setInterval(function() {
    makeLeave(getNode(n))
    .one('transitionend',function(e) {
        makeEnter($(e.currentTarget))
    });
    makeCurrent(getNode(n+1))
   n += 1;
},2000);

function x(n) {
    if (n > 4) {
        n = n % 4; 
        if ( n === 0) {
            n = 4;
        }
    }
    return n;
}
function getNode(n) {
    return $(`.images>img:nth-child(${x(n)})`);
}
function  makeCurrent($node) {
    $node.removeClass('enter leave').addClass('current');
    return $node;
}
function makeEnter($node) {
    $node.removeClass('enter leave').addClass('enter');
    return $node;
}
function makeLeave($node) {
    $node.removeClass('enter current').addClass('leave');
    return $node;
}
function init() {
    n = 1;
    $(`.images>img:nth-child(${n})`).addClass('current').siblings().addClass('enter');
}

