var elTitle = document.querySelector('.title')
var elInp1 = document.querySelector('.inp1')
var elInp2 = document.querySelector('.inp2')
var ranNum = Math.floor(Math.random() * 10)
var count = 0
// var elInp3 = document.querySelector('.inp3')
function fn() {
    count = count + 1
    var val1 = elInp1.value
    if(count <= 2){
        if(ranNum > val1){
            elTitle.textContent = 'Kompyuter oylagan raqam katta'
        }else if(ranNum < val1){
            elTitle.textContent = 'Kompyuter oylagan raqam kichik'
        }else if(ranNum == val1){
            elTitle.textContent = 'Topdingiz'
        }
    }else{
        elTitle.textContent = 'Yutqazdingiz javob-' + ranNum
    }
    elInp1.value = ''
    elInp1.focus()
}


 // var val1 = elInp1.value
    // var val2 = elInp2.value
    // var son = elInp3.value

    // if(val1 < val2 < val3){
    //     elTitle.textContent = val1
    // }else if(val1 < val3 < val2){
    //     elTitle.textContent = val2
    // }else if(val1 < val2 < val3){
    //     elTitle.textContent = val3
    // }