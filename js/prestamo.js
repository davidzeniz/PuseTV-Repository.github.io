function gen_table() {
    document.getElementById("tab").innerHTML = "";
    let n = Number(document.getElementById("capital").value);
    let n2 = Number(document.getElementById("couta").value);
    let n4 = Number(document.getElementById("montocuota").value);
    let interesInput = parseFloat(document.getElementById("interes").value); // Obtener la tasa de interés del campo de texto
    let tasatipo = document.querySelector('input[name="tasatipo"]:checked').value; // Obtener la selección de tasa (anual o mensual)

    if (n > 0 && n4 > 0) {
        let deuda = n;
        let i2 = interesInput;

        if (tasatipo === "mensual") {
            i2 = (Math.pow(1 + i2 / 100, 1 / 12) - 1) ; // Calcula la tasa mensual

        }else if (tasatipo === "anual") {
            i2 = i2/100; // La tasa ya es anual
        }

        for (let i = 1; i <= n2; i++) {
            let interes = deuda * i2;
            let amortizacion = n4 - interes;

            document.getElementById("tab").innerHTML += `<tr>
                <td>${i}</td>
                <td>${deuda.toFixed(2)}</td>
                <td>${i === 1 ? (n4 - interes).toFixed(2) : amortizacion.toFixed(2)}</td>
                <td>${interes.toFixed(2)}</td>
                <td>${n4.toFixed(2)}</td>
            </tr>`;

            deuda -= amortizacion;
        }


        let n1 = n.toFixed(2);
        let t_i = (n4 * n2) - n;
        let d4 = t_i.toFixed(2);
        let t_p = n4 * n2;
        let d5 = t_p.toFixed(2);

        document.getElementById("t1").innerHTML = n1;
        document.getElementById("t2").innerHTML = d4;
        document.getElementById("t3").innerHTML = d5;
        document.getElementById("t4").innerHTML = d5;

    } else {
        alert("Falta ingresar un número válido y el monto de la cuota debe ser mayor que 0.");
    }
}

function calcularCuota() {
    // Recuperar los valores necesarios
    let n = Number(document.getElementById("capital").value);
    let n2 = Number(document.getElementById("couta").value);
    let interesInput = parseFloat(document.getElementById("interes").value);
    let tasatipo = document.querySelector('input[name="tasatipo"]:checked').value;
  
    if (n > 0) {
      let i2 = interesInput;
      
      if (tasatipo === "mensual") {
        i2 = (Math.pow(1 + i2 / 100, 1 / 12) - 1); // Calcula la tasa mensual
      }else if (tasatipo === "anual") {
        i2 = i2/100; // La tasa ya es anual
    }
      
      // Realizar el cálculo de la cuota
      let montocuota = n * ((Math.pow(1 + i2, n2) * i2) / (Math.pow(1 + i2, n2) - 1));
      
  
      // Asignar el resultado al campo "MONTO CUOTA"
      document.getElementById("montocuota").value = montocuota.toFixed(2);
    } else {
      alert("Falta ingresar un número válido para el capital.");
    }
  }
  
	function calculate() {
  var annualRate = parseFloat(document.getElementById("annual-rate").value);
  var periods = 12; // número de periodos en el año
  var monthlyRate = ((Math.pow( (1 + (annualRate / 100) ), (30/360) ) - 1) * 100).toFixed(2)
  document.getElementById("monthly-rate").value = monthlyRate + "%";
}
