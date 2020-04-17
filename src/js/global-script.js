document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
function cth(c) {document.documentElement.classList.add(c)}
'ontouchstart' in window?cth('touch'):cth('no-touch');
if(typeof InstallTrigger!=='undefined')cth('firefox');
if(/constructor/i.test(window.HTMLElement)||(function(p){return p.toString()==="[object SafariRemoteNotification]"})(!window['safari']||(typeof safari!=='undefined'&&safari.pushNotification)))cth('safari');
if(/*@cc_on!@*/false||!!document.documentMode)cth('ie');
if(!(/*@cc_on!@*/false||!!document.documentMode)&&!!window.StyleMedia)cth('edge');
if(!!window.chrome&&(!!window.chrome.webstore||!!window.chrome.runtime))cth('chrome');
if(~navigator.appVersion.indexOf("Win"))cth('windows');
if(~navigator.appVersion.indexOf("Mac"))cth('osx');
if(~navigator.appVersion.indexOf("Linux"))cth('linux');

// Если на проекте jQuery
// $( document ).ready(function() {
//   // code
// });

// Изоляция без jQuery
// (function(){
//   // code
// }());

(function(){
  var bLazy = new Blazy({
    selector: '.b-lazy'
  });
}());

(function(){
  var phoneElems = document.getElementsByClassName('phone-mask');
  Array.prototype.forEach.call(phoneElems, function (item) {
    var phoneMask = IMask(
      item, {
        mask: '+{38\\0} (00) 000 00 00',
        lazy: false // make placeholder always visible
    });
  });

}());

$( document ).ready(function() {
  // focus в поле при скроде до попадания в окно
  var target = document.getElementById('target-field');

  if (target) {

    var ifShown = false;

    function scrollTracking() {

      if (ifShown) {
        return false;
      }

      var wt = $(window).scrollTop();
      var wh = $(window).height();
      var et = $('#target-field').offset().top;
      var eh = $('#target-field').outerHeight();
      var dh = $(document).height();

      if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
        //console.log('Элемент показан');
        ifShown = true;
        $('#target-field').focus();
      }
    };

    $(window).scroll(function(){
      scrollTracking();
    });

  }

  return;
});
