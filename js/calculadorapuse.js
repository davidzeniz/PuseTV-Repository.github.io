function calculateInterest() {
    // Obtener el valor de la Deuda Total
    var deudaTotalInput = document.getElementById("deudatotalInput").value.trim();
    
    // Obtener el valor del capital
    var capitalInput = document.getElementById("capitalInput").value.trim();

    // Validar que ambos campos no estén vacíos
    if (deudaTotalInput === "" || capitalInput === "") {
        alert("Por favor ingresa valores para la deuda total y el capital.");
        return; // Detener la ejecución de la función si falta algún valor
    }

    // Convertir los valores a números flotantes
    var deudat = parseFloat(deudaTotalInput);
    var cap = parseFloat(capitalInput);

    // Calcular el interés
    var totalInt = deudat - cap;

    // Mostrar el resultado en el campo de Interes
    document.getElementById("resultadoInteres").innerText = totalInt.toFixed(2); // toFixed(2) para redondear a 2 decimales



    // Calcular el valor INTERÉS DESCONTADO
    var descuentoCombo = parseFloat(document.getElementById("descuentoInteresesCombo").value);
    var valorInteresDescontado = descuentoCombo * totalInt ;
    // Mostrar el resultado en el campo de INTERÉS DESCONTADO 
    document.getElementById("interesDescontado").innerText = valorInteresDescontado.toFixed(2);



    // Calcular el PAGO TOTAL DSCTO I
    var valorPagoTotalDescuentoI = deudat - valorInteresDescontado;
    // Mostrar el resultado en el campo de PAGO TOTAL DSCTO I
    document.getElementById("pagototaldescuento").innerText = valorPagoTotalDescuentoI.toFixed(2);



    // Mostrar el valor del capital en el campo "CAPITAL"
    document.getElementById("capitalInicial").innerText = cap.toFixed(2);


     // Calcular el INTERES CON DSTO
     var valorInteresConDescuento = valorPagoTotalDescuentoI ;
     // Mostrar el resultado en el campo de "INTERES CON DSTO"
     document.getElementById("interesConDescuento").innerText = valorInteresConDescuento.toFixed(2);



     // Calcular PAGO TOTAL C/INTERES
    var valorPagoTotalCIntereses = deudat - valorInteresDescontado;

    // Mostrar el resultado en el campo de  PAGO TOTAL C/INTERES
    document.getElementById("pagototalconintereses").innerText = valorPagoTotalCIntereses.toFixed(2);

    

    ////SEGUNDO CARD VALORES -------

    // PARA LA DEUDA TOTAL
    var valorDeudaTotal2 = document.getElementById('deudatotalInput').value;   
    // Asignar el valor al input del segundo card
    document.getElementById('deudatotal2').value = valorDeudaTotal2;


    // PARA EL CAPITAL
    var valor = document.getElementById('capitalInput').value;
    // Asignar el valor al input del segundo card
    document.getElementById('capital2').value = valor;

    //INTERES 2
    document.getElementById("interes2").innerText = totalInt.toFixed(2); 




    // PARA EL INTERES CON/SIN DSTO
    document.getElementById('interesconsindescuento').innerText = valorPagoTotalDescuentoI.toFixed(2);




    calculateInterest2();

}


function calculateInterest2() {
   
    var capitalInput = document.getElementById("capitalInput").value.trim();
     var capital = parseFloat(capitalInput);

    // Calcular el CAPITAL DESCONTADO
    var descuentocombo2 = parseFloat(document.getElementById("descuentoCapitalCombo").value);
    var valorCapitalDescontado = capital * descuentocombo2
     // Mostrar el resultado en el campo de  CAPITAL DESCONTADO
     document.getElementById("capitaldescontado").innerText = valorCapitalDescontado.toFixed(2);



    // VALOR DE PAGO TOTAL CAPITAL
     var valorPagoTotalCapital = capital - valorCapitalDescontado ;
     document.getElementById("pagototalcapital").innerText = valorPagoTotalCapital.toFixed(2);



     // VALOR DE CAPITAL CON DSTO
     var capitalcondescuento = valorPagoTotalCapital ;

     document.getElementById("capitalcondescuento").innerText = capitalcondescuento.toFixed(2);


    //VALOR DEUDA TOTAL 02 SEGUNDO CARD 
  
    var valorinteresconsindescuento = parseFloat(document.getElementById("interesconsindescuento").innerText);
    var resultPagoTotalDsctoIC = valorinteresconsindescuento - valorCapitalDescontado;
    document.getElementById("pagototaldsctoic").innerText = resultPagoTotalDsctoIC.toFixed(2);




    //CALCULANDO RESUMEN 
    //total descuento
    var intdesc = parseFloat(document.getElementById("interesDescontado").innerText);
    var capdesc = parseFloat(document.getElementById("capitaldescontado").innerText);
    var resul = intdesc + capdesc;
    document.getElementById("totaldescuento").innerText = resul.toFixed(2); // toFixed(2) para redondear a 2 decimales


    //total porcentaje descuento
    var divisor = resul;
    var dividendo = parseFloat(document.getElementById("deudatotalInput").value);

    if (dividendo === 0) {
        document.getElementById("porcentajedescuento").innerText = "Error en los datos";
    } else {
        var factor = (divisor / dividendo) * 100;
        document.getElementById("porcentajedescuento").innerText = factor.toFixed(0);
    }

    var cuotainicialInput = document.getElementById("cuotainicial").value.trim();
    
    // Obtener el valor de cuotaaprox
    var valornumerodecuotasInput = document.getElementById("numerodecuotas").value.trim();

    // Validar que ambos campos no estén vacíos
    if (cuotainicialInput !== "" && valornumerodecuotasInput !== "") {
        calculateCoutizacion();
    }


}



function calculateCoutizacion() {

    var valorpagototaldsctoic = document.getElementById("pagototaldsctoic").innerText.trim();

    if (valorpagototaldsctoic === "") {
        alert("Por favor primero calcula el PAGO TOTAL DSCTO I+C del Capital");
        return; 
    }
    
    
    // Obtener el valor del monto a financiar
    var cuotainicialInput = document.getElementById("cuotainicial").value.trim();
    
    // Obtener el valor de cuotaaprox
    var valornumerodecuotasInput = document.getElementById("numerodecuotas").value.trim();

    // Validar que ambos campos no estén vacíos
    if (cuotainicialInput === "" || valornumerodecuotasInput === "") {
        alert("Por favor ingresa la cuota inicial y el numero de cuotas");
        return; 
    }

    // Convertir los valores a números flotantes
    var valorcuotaini = parseFloat(cuotainicialInput);
    var valorpagotdic= parseFloat(valorpagototaldsctoic);

    // Calcular el monto a financiar
    var valormontoafinanciar = valorpagotdic - valorcuotaini;

    // Mostrar el resultado en el campo montoafinanciar
    document.getElementById("montoafinanciar").innerText = valormontoafinanciar.toFixed(2); // toFixed(2) para redondear a 2 decimales


    //CALCULAR LA CUOTA APROX
    var valorcuotaaprox = valormontoafinanciar/ valornumerodecuotasInput;
    document.getElementById("cuotaaprox").innerText = valorcuotaaprox.toFixed(2); // toFixed(2) para redondear a 2 decimales





}