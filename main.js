

// preeentrega 2
let continuar = true;
let prestamos = [];
while (continuar) {
  let prestadores = {
    ganadera: {
      nombre: "Frigorificos S.A.",
      tasaInteres: 15,
      montoMinimo: 5000,
      montoMaximo: 50000,
      plazoPagos: 12
    },
    avicola: {
      nombre: "Avicola Ala S.A.",
      tasaInteres: 20,
      montoMinimo: 10000,
      montoMaximo: 100000,
      plazoPagos: 36
    },
    mineria: {
      nombre: "Petrohard",
      tasaInteres: 12,
      montoMinimo: 20000,
      montoMaximo: 200000,
      plazoPagos: 18
    }
  };

  let seleccion = "";
  let empresa;
  let monto = 0;

  while (seleccion !== "1" && seleccion !== "2" && seleccion !== "3") {
    seleccion = prompt("Seleccione una de las empresas:\n1. Frigorificos S.A.\n2. Avicola Ala S.A\n3. Petrohard");

    switch (seleccion) {
      case "1":
        empresa = prestadores.ganadera;
        break;
      case "2":
        empresa = prestadores.avicola;
        break;
      case "3":
        empresa = prestadores.mineria;
        break;
      default:
        alert("Selección inválida");
        break;
    }
  };

  if (empresa) {
    alert(`Usted ha seleccionado a ${empresa.nombre} como su prestador.\n\nTasa de Interés: ${empresa.tasaInteres}%\nMonto Mínimo: ${empresa.montoMinimo}\nMonto Máximo: ${empresa.montoMaximo}\nPlazo de Pagos: ${empresa.plazoPagos} meses`);
  };

  while (monto < empresa.montoMinimo || monto > empresa.montoMaximo) {
    monto = parseInt(prompt(`Ingrese el monto del préstamo (entre ${empresa.montoMinimo} y ${empresa.montoMaximo}):`));
  
    if (isNaN(monto)) {
      alert("Debe ingresar un valor numérico");
    } else if (monto < empresa.montoMinimo) {
      alert(`El monto mínimo permitido es de ${empresa.montoMinimo}`);
    } else if (monto > empresa.montoMaximo) {
      alert(`El monto máximo permitido es de ${empresa.montoMaximo}`);
    }
  }
  
  function calcularPrestamo(monto, tasaInteres, plazoPagos) {
    let intereses = monto * tasaInteres / 100;
    let total = monto + intereses;
    let cuotaMensual = total / plazoPagos;
    return { intereses, total, cuotaMensual };
  }
  
  let {intereses, total, cuotaMensual} = calcularPrestamo(monto, empresa.tasaInteres, empresa.plazoPagos);
  alert(`Usted ha solicitado un préstamo por un monto de $${monto} a ${empresa.nombre}.\n\nTasa de Interés: ${empresa.tasaInteres}%\nMonto Total a Pagar: $${total}\nIntereses: $${intereses}\nCuota Mensual: $${cuotaMensual.toFixed(2)}\nPlazo de Pagos: ${empresa.plazoPagos} meses`);
  
  prestamos.push({
    empresa: empresa.nombre,
    monto: monto,
    intereses: intereses,
    total: total,
    cuotaMensual: cuotaMensual.toFixed(2)
  });
  
  console.log("Préstamos realizados:");
  prestamos.forEach((prestamo, index) => {
    console.log(`Préstamo ${index + 1}: Empresa: ${prestamo.empresa}, Monto: $${prestamo.monto}, Intereses: $${prestamo.intereses}, Total: $${prestamo.total}, Cuota Mensual: $${prestamo.cuotaMensual}`);
  });
  
  continuar = confirm("¿Desea continuar operando?");
}