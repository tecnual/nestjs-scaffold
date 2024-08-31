/* eslint-disable hexagonal-architecture/enforce */
/* eslint-disable prettier/prettier */
function calculateBaseCotization(grossAnnualSalary: number, exemptions: number, nonSalaryRemunerations: number): number {
    const baseCotization = grossAnnualSalary - exemptions + nonSalaryRemunerations;
    return baseCotization;
}

// Ejemplo de uso
const grossAnnualSalary = 38300; // Salario bruto anual
const exemptions = 0;         // Exenciones que no cotizan
const nonSalaryRemunerations = 0; // Otros pagos que sí cotizan

const baseCotization = calculateBaseCotization(grossAnnualSalary, exemptions, nonSalaryRemunerations);
console.log(`La base de cotización es: ${baseCotization}`);