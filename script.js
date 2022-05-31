// 메뉴창기능
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// 롤링텍스트 효과
const pTag1 = document.querySelector('.first_parallel')

const textArr1 = 'ON FAIRBITION ON FAIRBITION ON FAIRBITION ON FAIRBITION ON FAIRBITION ON FAIRBITION ON FAIRBITION ON FAIRBITION ON FAIRBITION'.split(' ')

function initTexts(element, textArray) {
    textArray.push(...textArray)
    for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00a0\u00a0`
    }
}

initTexts(pTag1, textArr1)

let count1 = 0

function marqueeText(count, element, direction) {
    if (count > element.scrollwidth / 2) {
        element.style.transform = `translateX(0)`
        count = 0
    }
    element.style.transform = `translateX(${count * direction}px)`
    return count
}

function animate() {
    count1++

    count1 = marqueeText(count1, pTag1, -1)

    window.requestAnimationFrame(animate)
}

animate()

// 메인 슬라이드 버튼
document.querySelector('.slide_btn1').addEventListener('click', function () {
    document.querySelector('.slides').style.transform = 'translate(0)';
    document.querySelector('.slide_btn1').style.opacity = '0';
    document.querySelector('.slide_btn1_2').style.opacity = '1';
});

document.querySelector('.slide_btn1_2').addEventListener('click', function () {
    document.querySelector('.slides').style.transform = 'translate(0)';
    // document.querySelector('.slide_btn1').style.opacity = '1';
    // document.querySelector('.slide_btn1_2').style.opacity = '0';
    document.querySelector('.slide_btn2').style.opacity = '1';
    document.querySelector('.slide_btn2_2').style.opacity = '0';
    document.querySelector('.slide_btn3').style.opacity = '1';
    document.querySelector('.slide_btn3_2').style.opacity = '0';
    document.querySelector('.slide_btn4').style.opacity = '1';
    document.querySelector('.slide_btn4_2').style.opacity = '0';
});

// ----------------
document.querySelector('.slide_btn2').addEventListener('click', function () {
    document.querySelector('.slides').style.transform = 'translate(-1344px)';
    document.querySelector('.slide_btn1').style.opacity = '0';
    document.querySelector('.slide_btn1_2').style.opacity = '1';
    document.querySelector('.slide_btn2').style.opacity = '0';
    document.querySelector('.slide_btn2_2').style.opacity = '1';
});

document.querySelector('.slide_btn2_2').addEventListener('click', function () {
    document.querySelector('.slides').style.transform = 'translate(-0px)';
    document.querySelector('.slide_btn2').style.opacity = '1';
    document.querySelector('.slide_btn2_2').style.opacity = '0';
    document.querySelector('.slide_btn3').style.opacity = '1';
    document.querySelector('.slide_btn3_2').style.opacity = '0';
    document.querySelector('.slide_btn4').style.opacity = '1';
    document.querySelector('.slide_btn4_2').style.opacity = '0';
});

// ----------------
document.querySelector('.slide_btn3').addEventListener('click', function () {
    document.querySelector('.slides').style.transform = 'translate(-2688px)';
    document.querySelector('.slide_btn1').style.opacity = '0';
    document.querySelector('.slide_btn1_2').style.opacity = '1';
    document.querySelector('.slide_btn2').style.opacity = '0';
    document.querySelector('.slide_btn2_2').style.opacity = '1';
    document.querySelector('.slide_btn3').style.opacity = '0';
    document.querySelector('.slide_btn3_2').style.opacity = '1';
});

document.querySelector('.slide_btn3_2').addEventListener('click', function () {
    document.querySelector('.slides').style.transform = 'translate(-1344px)';
    document.querySelector('.slide_btn3').style.opacity = '1';
    document.querySelector('.slide_btn3_2').style.opacity = '0';
    document.querySelector('.slide_btn4').style.opacity = '1';
    document.querySelector('.slide_btn4_2').style.opacity = '0';
});

// ----------------
document.querySelector('.slide_btn4').addEventListener('click', function () {
    document.querySelector('.slides').style.transform = 'translate(-4032px)';
    document.querySelector('.slide_btn1').style.opacity = '0';
    document.querySelector('.slide_btn1_2').style.opacity = '1';
    document.querySelector('.slide_btn2').style.opacity = '0';
    document.querySelector('.slide_btn2_2').style.opacity = '1';
    document.querySelector('.slide_btn3').style.opacity = '0';
    document.querySelector('.slide_btn3_2').style.opacity = '1';
    document.querySelector('.slide_btn4').style.opacity = '0';
    document.querySelector('.slide_btn4_2').style.opacity = '1';
});

document.querySelector('.slide_btn4_2').addEventListener('click', function () {
    document.querySelector('.slides').style.transform = 'translate(-2688px)';
    document.querySelector('.slide_btn4').style.opacity = '1';
    document.querySelector('.slide_btn4_2').style.opacity = '0';
});

