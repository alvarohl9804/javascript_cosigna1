

function pedirPlato() {
    let plato = prompt("Por favor, elige tu plato (lomo saltado, causa rellena o ceviche):").toLowerCase();

    switch (plato) {
        case "lomo saltado":
            return "Lomo Saltado";
        case "causa rellena":
            return "Causa Rellena";
        case "ceviche":
            return "Ceviche";
        default:
            alert("Plato no válido. Por favor, elige entre lomo saltado, causa rellena o ceviche.");
            return pedirPlato(); // Se llama a sí misma si la entrada es inválida
    }
}

function pedirBebida() {
    let bebida = prompt("Por favor, elige tu bebida (agua, gaseosa o jugo):").toLowerCase();

    switch (bebida) {
        case "agua":
            return "Agua";
        case "gaseosa":
            return "Gaseosa";
        case "jugo":
            return "Jugo";
        default:
            alert("Bebida no válida. Por favor, elige entre agua, gaseosa o jugo.");
            return pedirBebida(); // Se llama a sí misma si la entrada es inválida
    }
}

function tomarPedido(infoCliente) {

    alert(`Cliente ${infoCliente}, es tu turno.`);

    let platoElegido = pedirPlato();
    let bebidaElegida = pedirBebida();

    alert(`Has elegido ${platoElegido} con ${bebidaElegida}. ¡Gracias por tu pedido!`);
}

function atenderClientes() {
    for (let infoCliente = 1; infoCliente <= 4; infoCliente++) {
        tomarPedido(infoCliente);
    }

    alert("Hoy ya se han atendido 4 turnos. Por favor, vuelva mañana.");
}

// Iniciar el proceso de atención al cliente
atenderClientes();
