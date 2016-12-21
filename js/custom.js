'use strict';
console.log('FFW FE theme');

jQuery(document).ready(function ($) {

  $('.expanded').hover(function() {
    $('.expanded .menu').stop().slideDown();
  }, function() {
    $('.expanded .menu').stop().slideUp();
  });



  
});
