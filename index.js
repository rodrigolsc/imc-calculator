function calculate() {
    var height = document.getElementById("height").value / 100;
    var weight = document.getElementById("weight").value;
  
    var imc = weight / height ** 2;
    var text=""
    if (imc < 18.5) {
      text="Magreza"
    } else if (imc < 24.9) {
      text="Normal"
    } else if (imc < 29.9) {
      text="Sobrepeso"
    } else if (imc > 30.0) {
      text="Obesidade"
    }
    document.getElementById("text_area").innerText=text
  }