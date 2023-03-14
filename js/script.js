document.addEventListener('DOMContentLoaded', () => {
  const selectDrop = document.querySelector('#countries');

  fetch('https://restcountries.com/v3.1/all')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let output = '';
      let countryArr = [];
      data.forEach((country) => {
        countryArr.push(country.name.common);
      });
      countryArr.sort();
      //   output += `<option value="${country.name.common}">${country.name.common}</option>`;
      countryArr.forEach((item) => {
        output += `<option value="${item}">${item}</option>`;
      });
      selectDrop.innerHTML = output;
    })
    .catch((err) => {
      console.log(err);
    });
});
