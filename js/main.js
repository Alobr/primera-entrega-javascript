

let savedPassword = "505050";

function login() {
  let logear = false;
  for (let i = 2; i >= 0; i--) {
    let ingresarPassword = prompt(
      "Ingresa tu contraseña(505050). Tienes " + (i + 1) + " oportunidades"
    );
    if (ingresarPassword === savedPassword) {
      alert("Bienvenido/a te has logeado correctamente");
      logear = true;
      break;
    } else {
      alert("Contraseña incorrecta");
    }
  }

  return logear;
}

let success = login();

if (success) {
  let tasaCambioVentaDolar = 283;
  let tasaCambioCompraDolar = 287;
  let opcion = prompt(
    "Elige una opción: \n1 - Consulta de tasas. \n2 - Comprar dolares. \n3 - Vender dolares. \nEscribe X para finalizar."
  );

  while (opcion != "X" && opcion != "x") {

    switch (opcion) {
      case "1":
        alert("Tasa de compra: " + tasaCambioCompraDolar + " pesos por dolar. Tasa de venta: " + tasaCambioVentaDolar + " pesos por dolar.");
        break;
      case "2":
        let comprarDolares = parseInt(prompt("Ingresa el monto"));
        let pesosCompra = (comprarDolares * tasaCambioCompraDolar);
        alert("Compraste dolares: " + comprarDolares + " a cambio de pesos: " + pesosCompra);
        break;
      case "3":
        let venderDolares = parseInt(prompt("Ingresa el monto"));
        let pesosVenta = (venderDolares * tasaCambioVentaDolar);
        alert("Vendiste dolares: " + venderDolares + " y recibiste pesos: " + pesosVenta);
        break;

      default:
        alert("opcion no valida");
        break;
    }
    opcion = prompt(
      "Elige una opción: \n1 - Consulta la comision por compra/venta. \n2 - Comprar dolares. \n3 - Vender dolares. \nEscribe X para finalizar."
    );
  }
} else {
  alert("Tu cuenta ha sido restringida por 10 dias para mas info comnunicate por mail a NoMandesMails@gmail.com");
}