document.getElementById('btnNavAssinatura').addEventListener("pointerover", function(){
    document.getElementById('btnNavAssinatura').innerHTML = `<img src="img/assinatura-removebg-preview.png" width="24px" height="24px" alt="" srcset="" id="imgAssinatura"> Assinaturas`
    
})

document.getElementById('btnNavAssinatura').addEventListener("pointerleave", function(){
    document.getElementById('btnNavAssinatura').innerHTML = `<img src="img/assinaturaBlack-removebg-preview.png" width="24px" height="24px" alt="" srcset="" id="imgAssinatura"> Assinaturas`
   
})







document.getElementById('btnNavPesquisa').addEventListener("pointerover", function(){
    document.getElementById('btnNavPesquisa').innerHTML = `<img src="img/icons8-pesquisar-30Black.png" width="18px" height="18px" alt="" srcset="" id="imgPesquisa">`
    
})

document.getElementById('btnNavPesquisa').addEventListener("pointerleave", function(){
    document.getElementById('btnNavPesquisa').innerHTML = `<img src="img/icons8-pesquisar-30White.png" width="18px" height="18px" alt="" srcset="" id="imgPesquisa">`
   
})










document.getElementById('btnNavCategoria').addEventListener("pointerover", function(){
    document.getElementById('btnNavCategoria').innerHTML = `<img src="img/squareCircleBlack.png"
          width="27px" height="25px" alt="" srcset="" id="imgCategoria">`
    
})

document.getElementById('btnNavCategoria').addEventListener("pointerleave", function(){
    document.getElementById('btnNavCategoria').innerHTML = `<img src="img/squareCircle-fotor-bg-remover-2024101192327.png"
          width="27px" height="25px" alt="" srcset="" id="imgCategoria">`
   
})
















////////////IDIOMA



// document.getElementById('btnNavIdioma').addEventListener("click", function(){
//     document.getElementById('btnNavIdioma').innerHTML = `PT <img src="img/icons8-divisa-para-cima-30.png" width="15px" height="15px" alt="" srcset="">`

//       document.getElementById('dropdown-menu').style.display = 'none'
      

 

// })




 



  document.getElementById('btnNavIdioma').addEventListener("pointerover", function(){
      document.getElementById('btnNavIdioma').innerHTML = `<p>PT</p> <img src="img/icons8-divisa-para-cima-30.png" width="15px" height="15px" alt="" srcset="">`

        document.getElementById('dropdown-menu').style.display = 'flex'
        
        

   
 
  })



 document.getElementById('btnNavIdioma').addEventListener("pointerleave", function(){
      document.getElementById('btnNavIdioma').innerHTML = `<p>PT</p> <img src="img/icons8-divisa-para-cima-30.png" width="15px" height="15px" alt="" srcset="">`

      document.getElementById('btnNavIdioma').style.backgroundColor = 'white'
      document.getElementById('btnNavIdioma').style.color = 'black'



      


      document.getElementById('dropdown-menu').style.display = 'flex'
      

 
  })



 document.getElementById('dropdown-menu').addEventListener("pointerover", function(){

    document.getElementById('dropdown-menu').style.display = 'flex'
    

  document.getElementById('btnNavIdioma').innerHTML = `<p>PT</p> <img src="img/icons8-divisa-para-cima-30.png" width="15px" height="15px" alt="" srcset="">`

  document.getElementById('btnNavIdioma').style.color = 'black'
  document.getElementById('btnNavIdioma').style.backgroundColor = 'white'

  
   
  
 })


 document.getElementById('dropdown-menu').addEventListener("pointerleave", function(){

     document.getElementById('btnNavIdioma').innerHTML = `<p>PT</p> <img src="img/icons8-divisa-para-baixo-30.png" width="15px" height="15px" alt="" srcset="">`
   
     document.getElementById('btnNavIdioma').style.color = ''
     document.getElementById('btnNavIdioma').style.backgroundColor = ''

     this.style.display = 'none'
   
     
      
     
    })




////////////IDIOMA











/////////////////////CONTA



 



document.getElementById('btnNavConta').addEventListener("pointerover", function(){
     

      document.getElementById('dropdown-conta').style.display = 'flex'

      document.getElementById('btnNavConta').style.color = 'black'
      document.getElementById('btnNavConta').style.backgroundColor = 'white'
      
      

 

})



document.getElementById('btnNavConta').addEventListener("pointerleave", function(){
    


    


    document.getElementById('dropdown-conta').style.display = 'flex'
    


})



document.getElementById('dropdown-conta').addEventListener("pointerover", function(){

  document.getElementById('dropdown-conta').style.display = 'flex'
  

 

 

})


document.getElementById('dropdown-conta').addEventListener("pointerleave", function(){

   

   this.style.display = 'none'

   document.getElementById('btnNavConta').style.color = ''
      document.getElementById('btnNavConta').style.backgroundColor = ''
 
   
    
   
  })





/////////////////////CONTA








///////////////////////MENU






document.getElementById('menuDropDown').addEventListener("pointerover", function(){

    document.getElementById('menuDropDown').innerHTML = `<p>Menu</p> <img src="img/icons8-divisa-para-cima-30.png" width="15px" height="15px" alt="" srcset="">`
     

    document.getElementById('dropdown-menuBtnNav').style.display = 'flex'

    document.getElementById('menuDropDown').style.color = 'black'
    document.getElementById('menuDropDown').style.backgroundColor = 'white'
    
    



})



document.getElementById('menuDropDown').addEventListener("pointerleave", function(){

     document.getElementById('menuDropDown').innerHTML = `<p>Menu</p> <img src="img/icons8-divisa-para-cima-30.png" width="15px" height="15px" alt="" srcset="">`
  


  


  document.getElementById('dropdown-menuBtnNav').style.display = 'flex'
  


})



document.getElementById('dropdown-menuBtnNav').addEventListener("pointerover", function(){

     document.getElementById('menuDropDown').innerHTML = `<p>Menu</p> <img src="img/icons8-divisa-para-cima-30.png" width="15px" height="15px" alt="" srcset="">`

document.getElementById('dropdown-menuBtnNav').style.display = 'flex'






})


document.getElementById('dropdown-menuBtnNav').addEventListener("pointerleave", function(){

    document.getElementById('menuDropDown').innerHTML = `<p>Menu</p> <img src="img/icons8-divisa-para-baixo-30.png" width="15px" height="15px" alt="" srcset="">`

 

 this.style.display = 'none'

 document.getElementById('menuDropDown').style.color = ''
    document.getElementById('menuDropDown').style.backgroundColor = ''

 
  
 
})


 
















































































document.getElementById('btnNavAssinatura2').addEventListener("pointerover", function(){
    document.getElementById('btnNavAssinatura2').innerHTML = `<img src="img/assinatura-removebg-preview.png" width="24px" height="24px" alt="" srcset="" id="imgAssinatura"> Explorar tudo`
    
})

document.getElementById('btnNavAssinatura2').addEventListener("pointerleave", function(){
    document.getElementById('btnNavAssinatura2').innerHTML = `<img src="img/assinaturaBlack-removebg-preview.png" width="24px" height="24px" alt="" srcset="" id="imgAssinatura"> Explorar tudo`
   
})







document.getElementById('btnNavPesquisa2').addEventListener("pointerover", function(){
    document.getElementById('btnNavPesquisa2').innerHTML = `<img src="img/icons8-pesquisar-30Black.png" width="18px" height="18px" alt="" srcset="" id="imgPesquisa">`
    
})

document.getElementById('btnNavPesquisa2').addEventListener("pointerleave", function(){
    document.getElementById('btnNavPesquisa2').innerHTML = `<img src="img/icons8-pesquisar-30White.png" width="18px" height="18px" alt="" srcset="" id="imgPesquisa">`
   
})










document.getElementById('btnNavCategoria2').addEventListener("pointerover", function(){
    document.getElementById('btnNavCategoria2').innerHTML = `<img src="img/squareCircleBlack.png"
          width="27px" height="25px" alt="" srcset="" id="imgCategoria">`
    
})

document.getElementById('btnNavCategoria2').addEventListener("pointerleave", function(){
    document.getElementById('btnNavCategoria2').innerHTML = `<img src="img/squareCircle-fotor-bg-remover-2024101192327.png"
          width="27px" height="25px" alt="" srcset="" id="imgCategoria">`
   
})






////////////IDIOMA



// document.getElementById('btnNavIdioma').addEventListener("click", function(){
//     document.getElementById('btnNavIdioma').innerHTML = `PT <img src="img/icons8-divisa-para-cima-30.png" width="15px" height="15px" alt="" srcset="">`

//       document.getElementById('dropdown-menu').style.display = 'none'
      

 

// })




 



document.getElementById('btnNavIdioma2').addEventListener("pointerover", function(){
    document.getElementById('btnNavIdioma2').innerHTML = `<p>PT</p> <img src="img/icons8-divisa-para-cima-30.png" width="15px" height="15px" alt="" srcset="">`

      document.getElementById('dropdown-menu').style.display = 'flex'
      
      

 

})



document.getElementById('btnNavIdioma2').addEventListener("pointerleave", function(){
    document.getElementById('btnNavIdioma2').innerHTML = `<p>PT</p> <img src="img/icons8-divisa-para-cima-30.png" width="15px" height="15px" alt="" srcset="">`

    document.getElementById('btnNavIdioma2').style.backgroundColor = 'white'
    document.getElementById('btnNavIdioma2').style.color = 'black'



    


    document.getElementById('dropdown-menu').style.display = 'flex'
    


})



document.getElementById('dropdown-menu').addEventListener("pointerover", function(){

  document.getElementById('dropdown-menu').style.display = 'flex'
  

document.getElementById('btnNavIdioma2').innerHTML = `<p>PT</p> <img src="img/icons8-divisa-para-cima-30.png" width="15px" height="15px" alt="" srcset="">`

document.getElementById('btnNavIdioma2').style.color = 'black'
document.getElementById('btnNavIdioma2').style.backgroundColor = 'white'


 

})


document.getElementById('dropdown-menu').addEventListener("pointerleave", function(){

   document.getElementById('btnNavIdioma2').innerHTML = `<p>PT</p> <img src="img/icons8-divisa-para-baixo-30.png" width="15px" height="15px" alt="" srcset="">`
 
   document.getElementById('btnNavIdioma2').style.color = ''
   document.getElementById('btnNavIdioma2').style.backgroundColor = ''

   this.style.display = 'none'
 
   
    
   
  })




////////////IDIOMA











/////////////////////CONTA







document.getElementById('btnNavConta2').addEventListener("pointerover", function(){
   

    document.getElementById('dropdown-conta').style.display = 'flex'

    document.getElementById('btnNavConta2').style.color = 'black'
    document.getElementById('btnNavConta2').style.backgroundColor = 'white'
    
    



})



document.getElementById('btnNavConta2').addEventListener("pointerleave", function(){
  


  


  document.getElementById('dropdown-conta').style.display = 'flex'
  


})



document.getElementById('dropdown-conta').addEventListener("pointerover", function(){

document.getElementById('dropdown-conta').style.display = 'flex'






})


document.getElementById('dropdown-conta').addEventListener("pointerleave", function(){

 

 this.style.display = 'none'

 document.getElementById('btnNavConta2').style.color = ''
    document.getElementById('btnNavConta2').style.backgroundColor = ''

 
  
 
})





/////////////////////CONTA




/////////Avoid zooming

 


 