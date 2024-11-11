let down = document.getElementById('down');
let about = document.getElementById('about')
let reserv = document.getElementById('reserv')
let cards = document.getElementById('cards')
let images = document.getElementById('images')
let first = document.getElementById('first')
let second = document.getElementById('second')
let solve = document.getElementById('solve')
let resservee = document.getElementById('resservee') 
down.onclick = function (){

    scroll({
        top:745,
      
        behavior:"smooth",
        
      })

    
}

about.onclick = function (){

  scroll({
      top:745,
    
      behavior:"smooth",
      
    })

}


reserv.onclick = function (){

  scroll({
      top:1500,
    
      behavior:"smooth",
      
    })
    solve.style.gap=('100px')
}
 window.onscroll = function (){

  if(scrollY=700){
cards.style.gap=('50px')

  }
  else{cards.style.gap=('500px')}
  
  if(scrollY=1700){
solve.style.gap=('100px');

  }
  else{
solve.style.gap=('50px');

  }
  

 }


 window.onload = function(){
first.style.height=('500px')
second.style.height=('450px')
}

