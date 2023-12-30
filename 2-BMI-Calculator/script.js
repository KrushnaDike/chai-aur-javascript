const form = document.querySelector("form");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const result = document.getElementById("results");

    if(height == '' || height < 0 || isNaN(height)) {
        result.innerHTML = `<span> Please enter valid height ${height} </span>`;
    } else if (weight == '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `<span> Please enter valid weight ${weight} </span>`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi < 18.6) {
            result.innerHTML = `${bmi} ==> Under Weight`;
        } else if(bmi >= 18.6 && bmi <= 24.9) {
            result.innerHTML = `${bmi} ==> Normal Range, Much fitted`;
        } else {
            result.innerHTML = `${bmi} ==> Overweight, You need to follow strict diet`;
        }
    }
});