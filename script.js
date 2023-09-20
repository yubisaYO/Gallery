const container = document.querySelector('.container');
const main = document.querySelector('.main');
const thumbs = document.querySelectorAll('.thumb');

var thumbActive = null;
container.addEventListener('click',function(e){
    if(e.target.className = 'thumb'){
        if(thumbActive != null){
            thumbActive.classList.remove('active');
        }
        //console.log(e.target);
        //console.log(e);
        main.src = e.target.src;
        main.classList.add('fade');
        setTimeout(function(){
            main.classList.remove('fade');
        }, 500);
        // thumbs.forEach(function(thumb){
        //     if(thumb.classList.contains('active')){
        //         thumb.classList.remove('active');
        //     }
        // });
        
        e.target.classList.add('active');
        thumbActive = e.target;
        //thumbActive = e.target;
        console.log('thumbactive = ' + thumbActive.classList);
    }
});

