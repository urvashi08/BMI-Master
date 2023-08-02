document.addEventListener("DOMContentLoaded", function () {
  const bmiForm = document.getElementById("bmiForm");
  const resultDiv = document.getElementById("result");

  bmiForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const weight = parseFloat(document.getElementById("weight").value);
      const height = parseFloat(document.getElementById("height").value);
      const unit = document.getElementById("unit").value;

      let bmi;

      if (unit === "metric") {
          bmi = weight / (height / 100) ** 2;
      } else {
          bmi = (weight / (height ** 2)) * 703;
      }

      let classification;

      if (bmi < 18.5) {
          classification = "Underweight";
      } else if (bmi < 24.9) {
          classification = "Normal Weight";
      } else if (bmi < 29.9) {
          classification = "Overweight";
      } else {
          classification = "Obese";
      }

      resultDiv.innerHTML = `
          <p>Your BMI: ${bmi.toFixed(2)}</p>
          <p>Classification: ${classification}</p>
      `;
  });
});
