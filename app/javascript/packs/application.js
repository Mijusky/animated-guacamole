// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")



// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
// External imports
import "bootstrap";
import { temperatureSlider } from '../plugins/init_noUiSlider';
import { submitValues } from '../plugins/init_noUiSlider';
import { changeLabels } from '../plugins/init_noUiSlider';
import { initSlider } from '../plugins/init_slider'
import 'nouislider';
import 'nouislider/distribute/nouislider.css';
import "../plugins/flatpickr"
// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
// import { initSlider } from '../plugins/init_slider';
import { allowLocation } from '../components/allow_location';
window.jQuery = $;
window.$ = $;
document.addEventListener('turbolinks:load', () => {
//  allowLocation();
//    initSlider();
//
//
submitValues();
temperatureSlider();
changeLabels();
//
//  $('i').on('click', function(){
//
//  if($(this).text() == 'done'){
//    return false;
//  }
//
//  $(this).addClass('animating');
//
//  var activeStep = $('.step.active');
//  activeStep.addClass('sliding-out');
//  var nextStep = activeStep.next('.step');
//  nextStep.addClass('sliding-in');
//  nextStep.on('animationend', function(){
//    $(this).off('animationend');
//    activeStep.removeClass('active sliding-out').addClass('previous');
//    $(this).removeClass('next sliding-in').addClass('active');
//    $('i').removeClass('animating');
//
//    if(!$(this).next('.step').length){
//      $('i').html('done');
//    }
//    else {
//      $(this).next('.step').addClass('next');
//    }
//
//  })
//})

// Resources
  // Call your functions here, e.g:
  // initSelect2();
});
