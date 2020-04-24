// document.addEventListener('DOMContentLoaded', function(){});

(function(){

  var totalPrice = document.querySelector('#total-price');
  var totalField = document.querySelector('#total-field');
  var suiteCardsArr = document.querySelectorAll('.suite-card');
  var cardTotalArr = document.querySelectorAll('.suite-card__price-value');


  if (suiteCardsArr.length) {

    var summarize = function () {
      var sum = 0;

      for (var i = 0; i < cardTotalArr.length; i++) {
        var elem = cardTotalArr[i];
        var elemStr = elem.dataset.total;
        var elemVal = parseInt(elemStr, 10);
        sum += elemVal;
        //console.log( elemVal );
      }
        console.log( sum );
        totalPrice.innerText = sum;
        totalField.value = sum;
        return true;
    };

    Array.prototype.forEach.call( suiteCardsArr, function( card ) {
      var numInput = card.querySelector('.field-num__input');
      var controls = card.querySelectorAll('.field-num__btn');
      var priceElem = card.querySelector('.suite-card__price-value');
      var priceElemText = priceElem.innerText.replace(/\s+/g, '');
      var priceValue = parseInt(priceElemText, 10);
      var fieldAmout = card.querySelector('input[name="amount"]');
      //console.log( fieldAmout.value );

      var priceCalc = function (counter) {
        var thisPriceValue = priceValue * counter;
        priceElem.dataset.total = thisPriceValue;
        if (fieldAmout) {
          fieldAmout.value = counter;
        }
      };

      var changeFieldHandler = function (e) {
        var input = card.querySelector('.field-num__input');
        var counterValue = parseInt(input.value, 10);

        if ( counterValue !== 0 ) {
          card.classList.add('suite-card--selected');
        } else {
          card.classList.remove('suite-card--selected');
        }

        priceCalc(counterValue);
        summarize();
      };

      Array.prototype.forEach.call( controls, function( btn ) {
        btn.addEventListener('click', function (e) {
          setTimeout(function() {
            changeFieldHandler();
          }, 100);
        });
      });

      if (numInput) {
        numInput.addEventListener('change', changeFieldHandler);
      }

    });
  }

}());
