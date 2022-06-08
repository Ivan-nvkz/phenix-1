'use strict';

document.addEventListener('DOMContentLoaded', () => {

   

});

//=====  JQuery  start  =============================================================

$(document).ready(function () {
   $("form").submit(function () { // Событие отправки с формы
      var form_data = $(this).serialize(); // Собираем данные из полей
      $.ajax({
         type: "POST", // Метод отправки
         url: "send.php", // Путь к PHP обработчику sendform.php
         data: form_data,
         success: function () {
            $('.overley').addClass('overley-visible');
            $('.modal').addClass('modal__visible');
         }
      }).done(function () {
         $(this).find('input').val('');
         $('form').trigger('reset');
      });
      event.preventDefault();
   });
});


// Slick slider start ====================================================================
$(function () {
   $('.header-slider').slick({
      dots:true,
       prevArrow: '<button class="header-slider-btn header-slider-btn__left"><svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="85" height="85" transform="matrix(-1 0 0 1 85 0)" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M38.7761 43.1667H48.5V41.8334H38.7761L42.9714 37.6381L42.0286 36.6953L36.2239 42.5001L42.0286 48.3048L42.9714 47.362L38.7761 43.1667Z" fill="#BF9D77"/></svg></button>',
       nextArrow: '<button class="header-slider-btn header-slider-btn__right"><svg width="136" height="85" viewBox="0 0 136 85" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="135" height="84" fill="#BF9D77"/><path  fill-rule="evenodd" clip-rule="evenodd" d="M103.724 43.4714H30V42.1381H103.724L99.5286 37.9428L100.471 37L106.276 42.8047L100.471 48.6095L99.5286 47.6667L103.724 43.4714Z" fill="white"/><rect x="0.5" y="0.5" width="135" height="84" stroke="#BF9D77"/></svg></button>',
   });

});

// Slick slider finish ====================================================================

//=====  JQuery  finish ===================================================================
