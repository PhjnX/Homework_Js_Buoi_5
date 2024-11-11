/**
 * Đầu vào
 * - Khai báo biến electric là số Kw của người dùng nhập vào
 * - Khai báo biến name, là tên khách hàng
 * - Khai báo biến result = 0
 * Xử lý
 * - 50kw đầu tiên là 500/1kw -> electric * 500
 * - 50kw tiếp theo là 650/1kw -> 50 * 500 + (electric - 50) * 650
 * - 100kw tiếp theo là 850/1kw -> 50 * 500 + 50 * 650 + (electric - 100) * 850
 * - 150kw tiếp theo là 1100/1kw -> 50 * 500 + 50 * 650 + 100 * 850 + (electric - 200) * 1100
 * - Còn lại là 1300/1kw -> 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (electric - 350) * 1300
 * Đầu ra
 * - In ra màn hình thông qua thẻ span
 * - Gán sự kiện click cho id btnTienDien
 */

function calculatePrice() {
  const electric = parseFloat(document.getElementById("txtDien").value);
  const name = document.getElementById("txtTen").value;
  let result = 0;

  if (electric <= 50) {
    result = electric * 500;
  } else if (electric <= 100) {
    result = 50 * 500 + (electric - 50) * 650;
  } else if (electric <= 200) {
    result = 50 * 500 + 50 * 650 + (electric - 100) * 850;
  } else if (electric <= 350) {
    result = 50 * 500 + 50 * 650 + 100 * 850 + (electric - 200) * 1100;
  } else {
    result =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (electric - 350) * 1300;
  }

  document.getElementById("rsDien").innerHTML =
    "Khách hàng: " +
    name +
    ", Số tiền điện: " +
    result.toLocaleString() +
    " đồng";
}

document
  .getElementById("btnTienDien")
  .addEventListener("click", calculatePrice);
