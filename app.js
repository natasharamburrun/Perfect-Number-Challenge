console.log('js loaded');
// perfect number = 6, 28, 496 or 8128
// abundent number = 12, 18, 20, 24, 30,
// dificient number = 1, 2, 3, 4, 5, 7, 8

$(() => {

  //global varibles

  const $form = $('.form');
  const $result = $('.result');

  //enable submit function

  $form.submit(function(e){
    e.preventDefault();
    const integer = $('.input').val();
    $result.text(''+getClassification(integer));
  });

  function getClassification(integer) {
    // returns 'perfect', 'abundant', or 'deficient'
    let i = 1, aliquotSum = 0;
    // check each of the divisors. Can stop at int/2 for performance
    while(i < integer){
      if (integer % i === 0)
        aliquotSum = aliquotSum + i;
      i++;
    }
    if (aliquotSum > integer) return `${integer} is a abundant number`;
    else if (aliquotSum < integer) return `${integer} is a deficient number`;
    else return `${integer} is a perfect number`;
  }

});
