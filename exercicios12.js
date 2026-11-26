// 12. Relógio de minutos:
let totalMinutos = Number(prompt(":"));
let horas = Math.floor(totalMinutos / 60);
let minutosRestantes = totalMinutos % 60;
console.log(`${horas}h ${minutosRestantes}min`);
