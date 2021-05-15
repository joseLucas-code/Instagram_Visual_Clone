// profile page change tabs

const tabBtn = document.querySelectorAll('.js-tab')



tabBtn.forEach(function(tab,index){
    const section = document.querySelectorAll(`section#profile-container section`)
    tab.addEventListener('click', function(){
        
        tabBtn.forEach(function(tecla){
            tecla.classList.remove('active');
        })

        section.forEach(function(section){
            section.classList.remove('tab-active');
        })

        tab.classList.add('active')
        section[index].classList.add('tab-active')
        
    })
    
})

// profile like btn

const likeBtn = document.querySelectorAll('.js-like'); // variable after create posts
    // Active like btn
    likeBtn.forEach((btn) => btn.addEventListener('click', function(){

        if(btn.classList.contains('far')){
            btn.classList.remove('far');
            btn.classList.add('fas');
            btn.classList.toggle('like-active')
        }else{
            btn.classList.add('far');
            btn.classList.remove('fas');
            btn.classList.toggle('like-active')
        }
        
    }))