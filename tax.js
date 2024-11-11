/**
 * Đầu vào
 * - Tên người nhập (txtName)
 * - Thu nhập cá nhân (txtSalary)
 * - Số người phụ thuộc (txtPeople)
 *
 * Xử lý
 * - Tính thu nhập chịu thuế = Tổng thu nhập - Giảm trừ bản thân (4 triệu VND) - Giảm trừ cho người phụ thuộc (1.6 triệu VND/người).
 * - Nếu thu nhập chịu thuế <= 0, thuế phải trả = 0.
 * - Áp dụng các mức thuế sau:
 *   - 5% cho phần thu nhập ≤ 60 triệu VND.
 *   - 10% cho phần thu nhập từ 60 triệu đến 120 triệu VND.
 *   - 15% cho phần thu nhập từ 120 triệu đến 210 triệu VND.
 *   - 20% cho phần thu nhập từ 210 triệu đến 384 triệu VND.
 *   - 25% cho phần thu nhập từ 384 triệu đến 624 triệu VND.
 *   - 30% cho phần thu nhập từ 624 triệu đến 960 triệu VND.
 *   - 35% cho phần thu nhập trên 960 triệu VND.
 *
 * Đầu ra
 * - Tên người nhập và thuế phải trả theo dạng tiền tệ (VND).
 * - Nếu thu nhập chịu thuế ≤ 0, kết quả là "Thuế phải trả: 0 VND".
 * - Nếu thu nhập chịu thuế > 0, tính thuế theo các bậc và hiển thị số tiền thuế phải trả.
 */

function calculatePersonalTax() {
  const totalIncome = parseFloat(document.getElementById("txtSalary").value);
  const totalPeople = parseFloat(document.getElementById("txtPeople").value);

  const result = totalIncome - 4e6 - totalPeople * 1.6e6;
  if (result <= 0) {
    return 0;
  }

  const tax = [
    { salary: 60e6, percentageTax: 0.05 },
    { salary: 120e6, percentageTax: 0.1 },
    { salary: 210e6, percentageTax: 0.15 },
    { salary: 384e6, percentageTax: 0.2 },
    { salary: 624e6, percentageTax: 0.25 },
    { salary: 960e6, percentageTax: 0.3 },
    { salary: Infinity, percentageTax: 0.35 },
  ];

  let totalTax = 0;
  let limitSalary = 0;

  for (const { salary, percentageTax } of tax) {
    if (result > limitSalary) {
      const salaryTax = Math.min(result, salary) - limitSalary;
      totalTax += salaryTax * percentageTax;
      limitSalary = salary;
      break;
    }
  }

  return totalTax;
}

document.getElementById("btnTienThue").addEventListener("click", function () {
  const name = document.getElementById("txtName").value;
  const taxPay = calculatePersonalTax();

  // Hiển thị kết quả ra thẻ span
  document.getElementById("rsThue").innerText =
    "Họ tên: " +
    name +
    " - Thuế phải trả: " +
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(taxPay);
});
