let productName = "Laptop";

let costPerUnit = 12.50;
let basePrice = 19.99;
let discountRate = 0.15;
let salesTaxRate = 0.07;
const fixedMonthlyCost = 800;

let discountPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCost / profitPerUnit);
let isProfitPerUnit = profitPerUnit > 0;

console.log(`
    Product Name: ${productName}
    ---------------------------

    Discount price (before tax): ${discountPrice}
    Final price with tax: ${finalPriceWithTax}
    Profit per unit: ${profitPerUnit}
    Break-even units(integer): ${breakEvenUnits}
    Per-unit profitability (true/false): ${isProfitPerUnit}


    `);
