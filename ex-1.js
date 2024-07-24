function sortCustomerName(customers) {
  const n = customers.length;
  let result;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (customers[j] > customers[j + 1]) {
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
        result = customers;
      }
    }
  }
  return result;
}

console.log(
  sortCustomerName(["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"])
);

// ตอบคำถามตรงนี้จ้า
// Big O = o(n**2) เนื่องจาก function มี loop ซ้อนกันอยู่สองชั้นส่งผลให้ Big O มีค่าเท่ากับ n**2
