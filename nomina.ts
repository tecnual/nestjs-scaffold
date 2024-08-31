/* eslint-disable hexagonal-architecture/enforce */
/* eslint-disable prettier/prettier */
interface Deductions {
    incomeTax: number;   // Porcentaje de retención de impuestos
    socialSecurity: number;  // Porcentaje de retención de seguridad social
}

interface Extras {
    bonus: number;       // Bonificaciones extras
    overtime: number;    // Pagos por horas extras
}

interface Payroll {
    grossSalary: number;  // Salario bruto
    deductions: Deductions;
    extras: Extras;
}

function calculateNetSalary(payroll: Payroll): number {
    // Calcular las deducciones
    const totalDeductions = (payroll.grossSalary * payroll.deductions.incomeTax) +
                            (payroll.grossSalary * payroll.deductions.socialSecurity);
    
    // Calcular el salario bruto con los extras añadidos
    const grossWithExtras = payroll.grossSalary + payroll.extras.bonus + payroll.extras.overtime;

    // Calcular el salario neto
    const netSalary = grossWithExtras - totalDeductions;

    return netSalary;
}

// Ejemplo de uso
const payroll: Payroll = {
    grossSalary: 3191,
    deductions: {
        incomeTax: 0.02, // 15% de retención de impuestos
        socialSecurity: 0.07 // 6% de retención de seguridad social
    },
    extras: {
        bonus: 0,    // Bono de 200
        overtime: 0  // Pago por horas extras de 100
    }
};

const netSalary = calculateNetSalary(payroll);
console.log(`El salario neto es: ${netSalary}`);
