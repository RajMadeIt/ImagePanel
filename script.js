const panels = document.querySelectorAll('.panel');

panels.forEach(item=>{
    item.addEventListener('click',()=>{
        item.classList.toggle('open');
    })
    item.addEventListener('transitionend',(e)=>{
        if(e.propertyName.includes('flex')){  //use this instead of `e.propertyName==='flex'` to avoid bug in different browser
            item.classList.toggle('active');  //some broswer use flex and some flex-grow
        }
    })
})