<template lang="pug">
  #sec-admin-reviews    
    .container
      .A_head-sec
        h1.A_title  Блок «Отзывы»



      .WWW

      .admin-change
        .change-title Новый отзыв
        form.change-reviews__wrap
          .change-src
            .change-src__block
            label.change-src__box
              input(type="file")#inp-reviews.admin-inp-file
              a(type="button").src-img.btn_2.btn_2-w Добавить фото

          .chenge-content
            .chenge-content__block
              label.chenge-content__box
                .text Имя автора
                input(type="text" required).admin-inp-text
              label.chenge-content__box
                .text Титул автора
                input(type="text" required).admin-inp-text
            .chenge-content__block
              label.chenge-content__box
                .text Отзыв
                textarea(type="text" required).admin-textarea
            .chenge-content__block
              input(type="reset", value="Отмена").btn_2.admin-reset   
              input(type="submit", value="Сохранить").admin-save.btn.btn_admin    

      //- content

      .admin-reviews
        .admin-reviews__list
          button.admin-add-btn.admin-add-btn_works
            span.admin-add-btn-plus +
            span.admin-add-btn-title Добавить группу
          .admin-reviews-content__el
            .admin-user
              .admin-user-image
                .admin-user-img  
              .admin-user__info
                h4.admin-user__title Ковальчук Дмитрий
                p.text Основатель Loftschool  

            .admin-works-content__el-text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, eos.
            .admin-works-content__el-block
              button.admin-works-content__el-box 
                .text Править
                span.admin-btn-mod.admin-btn-mod_fix  
              button.admin-works-content__el-box
                .text Удалить
                span.admin-btn-mod.admin-btn-mod_remove
</template>



<style>
  
  
  .WWW{
    border:1px solid red;
    padding: 100px 20px;
    margin-bottom: 1000px;
  }



</style>