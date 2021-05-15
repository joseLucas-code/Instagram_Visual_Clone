const allPosts = Array.from({length: 20})

function createNewPosts(){
    const postContainer = document.querySelector('#posts-container .center-content')
    
    for(let n in allPosts){

        n = parseInt(n) + 1
        postContainer.innerHTML += `

            <article class="post-single">

                        <header class="post-header">

                            <div class="post-profile">
                                <div class="profile-img"></div>
                                <h2 class="profile-name">Lorem Ipsum</h2>
                            </div>

                            <i class="fas fa-ellipsis-h post-menu"></i>

                        </header>

                        <figure class="post-img"></figure>

                        <div class="interact-container">
                            <div class="like-container">
                                <i class="far fa-heart js-like"></i>
                                <i class="far fa-comment"></i>
                                <i class="fas fa-location-arrow"></i>
                            </div>

                            <div class="bookmark">
                                <i class="far fa-bookmark"></i>
                            </div><!--## BOOKMARK ##-->
                        </div>

                        <div class="comments-container">
                            <div class="likes-scores">
                                <p>Curtido por <span class="profile">Lorem Ipsum</span> e <span class="peoples-likes"> outras <span class="peoples-count">${n}</span> pessoas</span></p>
                            </div>

                            <div class="post-subtitle">
                                <p><span class="profile-name">Lorem Ipsum</span> Lorem ipsum Dolor sit</p>
                            </div>

                            <span class="post-ago">Há 10 Horas</span>
                        </div>

                    </article>

            `
    }

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
}

createNewPosts()