console.log('js loaded');
// perfect number = 6, 28, 496 or 8128
// abundent number = 12, 18, 20, 24, 30,
// dificient number = 1, 2, 3, 4, 5, 7, 8

$(() => {

  //global varibles
  const $form = $('.form');
  const $result = $('.result');

  // function to find if a number is 'perfect', 'abundant', or 'deficient'
  function getClassification(integer) {

    if (isNaN(integer) || (integer <= 0)) {
      return 'Please input a greater number than 0';
    }

    let aliquotSum = 0;
    for (let i = 1; i < integer; i++) {
      if (integer % i === 0) {
        aliquotSum += i;
      }
    }

    if (aliquotSum < integer) {
      return `Answer: ${integer} is a deficient number`;
    } else if (aliquotSum > integer) {
      return `Answer: ${integer} is an abundant number`;
    } else {
      return `Answer: ${integer} is a perfect number`;
    }
  }
  $form.submit(function(e){
    e.preventDefault();
    const integer = $('.input').val();
    $result.text(''+getClassification(integer));
  });

});
