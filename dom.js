document.getElementById('apply-bg').addEventListener('click',function(){
    const friends = document.getElementsByClassName('friend');
    for ( const friend of friend){
        friend.style.backgroundcolor = 'lightblue';
    }
});

