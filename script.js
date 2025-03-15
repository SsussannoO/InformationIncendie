let tab = ['1.jpg','2.jpg','3.jpg','4.jpg'];
const spans = document.querySelectorAll('span');
const section = document.querySelector('section')
let i = 0;

if(i==0){
    spans[0].style.display = 'none';
}
else{
    spans[0].style.display = 'block';
}

if(i==tab.length-1){
    spans[1].style.display = 'none';
}
else{
    spans[1].style.display = 'block';
}

spans.forEach(span => {
    span.addEventListener('click',()=>{
        if(span.classList.contains('plus')){
            i++;           
            section.style.background = `url('images/${tab[i]}')`;
            spans[0].style.display = 'block';
            if(i==tab.length-1){
                spans[1].style.display = 'none';
                spans[0].style.display = 'block';
            }
        }
        if(span.classList.contains('moins')){
            i--;           
            section.style.background = `url('images/${tab[i]}')`;
            if(i==0){
                spans[0].style.display = 'none';
                spans[1].style.display = 'block';
            }
        }
    })
})