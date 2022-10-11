let page1 = document.querySelector('#page1');
let page2 = document.querySelector('#page2');
let page3 = document.querySelector('#page3');

window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        page1.classList.add('hidden');
        page2.classList.remove('hidden');
    },1500);
    setTimeout(()=>{
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
    },3000);
    setTimeout(()=>{
        page3.classList.add('hidden');
        page4.classList.remove('hidden');
    },5000);
    setTimeout(()=>{
        page4.classList.add('hidden');
        page5.classList.remove('hidden');
    },7000);
    setTimeout(()=>{
        page5.classList.add('hidden');
        page6.classList.remove('hidden');
    },9000);
    setTimeout(()=>{
        page6.classList.add('hidden');
        page7.classList.remove('hidden');
    },10000);
    setTimeout(()=>{
        page7.classList.add('hidden');
        page8.classList.remove('hidden');
    },12000);
    setTimeout(()=>{
        page8.classList.add('hidden');
        page9.classList.remove('hidden');
        autoplay();
    },14000);
})

function autoplay() {
    var t = setTimeout(function(){
        var button = document.querySelector('[title="Play"]') || false;
        if (button) {
            console.log('Click', button)
            button.click()
        }
    }, 999)
}