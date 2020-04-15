// document.addEventListener('DOMContentLoaded', function(){});

(function(){

  var totalPrice = document.querySelector('#total-price');
  var totalPriceValue = parseInt((totalPrice.innerText.replace(/\s+/g, '')), 10);
  var suiteCardsArr = document.querySelectorAll('.suite-card');

  if(suiteCardsArr.length) {
    Array.prototype.forEach.call( suiteCardsArr, function( card ) {
      var numInput = card.querySelector('.field-num__input');
      var controls = card.querySelectorAll('.field-num__btn');
      var priceElem = card.querySelector('.suite-card__price-value');
      priceElem = priceElem.innerText.replace(/\s+/g, '');
      var priceValue = parseInt(priceElem, 10);
      //console.log(priceValue);

      var priceCalc = function (counter) {
        var thisPriceValue = priceValue * counter;
        console.log(thisPriceValue);
        var newTotal = totalPriceValue + thisPriceValue;
        console.log(newTotal);
        totalPriceValue = newTotal;
        totalPrice.innerText = newTotal;
      };

      var changeFieldHandler = function (e) {
        var input = card.querySelector('.field-num__input');
        var counterValue = parseInt(input.value, 10);

        if ( counterValue !== 0 ) {
          //console.log('не ноль');
          card.classList.add('suite-card--selected');
        } else {
          //console.log('ноль');
          card.classList.remove('suite-card--selected');
        }
        //console.log(counterValue);
        priceCalc(counterValue);
      };


      Array.prototype.forEach.call( controls, function( btn ) {
        btn.addEventListener('click', function (e) {
          setTimeout(function() {
            changeFieldHandler();
          }, 100);
        });
      });

      numInput.addEventListener('change', changeFieldHandler);
    });
  }

}());
