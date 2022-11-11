const swiper = new Swiper('.swiper', {
 
    autoplay:{
        deley: 3000,
        disableOnIteration: false,
    },
    loop: true,
   
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


  });