const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);
    //show the result
    // result.innerHTML = `<spam>${bmi}:${condition2}</span>`;
    let condition2 = null;
    if (bmi < 18.6) {
      condition2 = `underwight = ${bmi}`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      condition2 = `Normal Range = ${bmi}`;
    } else if (bmi > 24.9) {
      condition2 = `OverWeight = ${bmi}`;
    }
    result.innerHTML = `<span>${condition2}</span>`;
  }
});

// if(bmi>0 && bmi < 18.6){
//   const condition2 = `underwight = ${bmi}`;
// }else  if(bmi> 18.6 && bmi < 24.9){
//   const condition2 = `Normal Range = ${bmi}`;
// }
// else if (bmi > 24.9){
//   const condition2 = `OverWeight = ${bmi}`;
// }
// result.innerHTML = `<spam>${condition2} = ${bmi}</span>`;
