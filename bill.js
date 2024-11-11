/**
 * Đầu vào
 * - Loại khách hàng (customerType) từ dropdown (id="type"), giá trị có thể là "a" (khách hàng cá nhân) hoặc "b" (khách hàng doanh nghiệp).
 * - Số kết nối (numConnections) được nhập vào trường văn bản (id="txtKetNoi"), chỉ áp dụng cho khách hàng loại "b".
 * - Số kênh (numChannels) được nhập vào trường văn bản (id="txtKenh"), áp dụng cho cả khách hàng loại "a" và "b".
 *
 * Xử lý
 * - Nếu loại khách hàng là "b", kiểm tra số kết nối:
 *   - Nếu số kết nối ≤ 10, tính phí là 15 + 75 + (số kênh * 50).
 *   - Nếu số kết nối > 10, tính thêm 5 USD cho mỗi kết nối vượt quá 10 và cộng vào phí tính được.
 * - Nếu loại khách hàng là "a", tính hóa đơn cơ bản là 4.5 + 20.5 + (số kênh * 7.5).
 * - Tính tổng hóa đơn dựa trên loại khách hàng và các thông số nhập vào.
 *
 * Đầu ra
 * - Hiển thị tổng tiền hóa đơn trong phần tử có id "rsCap" theo định dạng tiền tệ (USD).
 */

function BusinessConnect() {
  const customerType = document.getElementById("type").value;
  const connectionsInput = document.getElementById("txtKetNoi");

  if (customerType === "b") {
    connectionsInput.style.display = "block";
  } else {
    connectionsInput.style.display = "none";
  }
}

function calculateBill() {
  const customerType = document.getElementById("type").value;
  const numConnections =
    parseInt(document.getElementById("txtKetNoi").value) || 0;
  const numChannels = parseInt(document.getElementById("txtKenh").value) || 0;
  let totalBill = 0;

  if (customerType === "a") {
    totalBill = 4.5 + 20.5 + numChannels * 7.5;
  } else if (customerType === "b") {
    if (numConnections <= 10) {
      totalBill = 15 + 75 + numChannels * 50;
    } else {
      totalBill = 15 + 75 + (numConnections - 10) * 5 + numChannels * 50;
    }
  }

  document.getElementById("rsCap").innerText =
    "Tổng tiền hóa đơn: $" + totalBill.toFixed(2);
}
