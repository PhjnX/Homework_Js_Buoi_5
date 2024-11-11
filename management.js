/**
 * Đầu vào
 * - Điểm chuẩn
 * - Khu vực
 * - Đối tượng
 * - Điểm môn thứ nhất
 * - Điểm môn thứ hai
 * - Điểm môn thứ 3
 * Xử lý
 * - Điểm chuẩn <= 30
 * - Khu vực A -> + 2.5
 * - Khu vực B -> + 1
 * - Khu vực C -> + 0.5
 * - Không nằm trong khu vực A, B, C -> + 0
 * - Đối tượng 1 -> + 2.5
 * - Đối tượng 2 -> + 1.5
 * - Đối tượng 3 -> + 1
 * - Không nằm trong đối tượng 1, 2, 3 -> + 0
 * - Nhập các điểm thứ nhất, hai, ba
 * Đầu ra
 * - Đậu: (Điểm thứ 1 + thứ 2 + thứ 3) > điểm chuẩn
 * - Rớt: (Điểm thứ 1 + thứ 2 + thứ 3) < điểm chuẩn
 * - Một trong 3 điểm <= 0 -> Rớt luôn
 */

function Place(khuVuc) {
  switch (khuVuc) {
    case "A":
      return 2.5;
    case "B":
      return 1;
    case "C":
      return 0.5;
    default:
      return 0;
  }
}

function Object(doiTuong) {
  switch (parseInt(doiTuong)) {
    case 1:
      return 2.5;
    case 2:
      return 1.5;
    case 3:
      return 1;
    default:
      return 0;
  }
}

function calculateResult() {
  const first_score = parseFloat(document.getElementById("txtDiem1").value);
  const second_score = parseFloat(document.getElementById("txtDiem2").value);
  const third_score = parseFloat(document.getElementById("txtDiem3").value);
  const area = document.getElementById("area").value;
  const category = document.getElementById("category").value;
  const standard_score = parseFloat(
    document.getElementById("txtDiemChuan").value
  );
  if (first_score === 0 || second_score === 0 || third_score === 0) {
    document.getElementById("ketqua").textContent =
      "Bạn đã rót. Do có điểm nhỏ hơn hoặc bằng 0";
    return;
  }
  const totalPoints =
    first_score + second_score + third_score + Object(category) + Place(area);

  if (totalPoints >= standard_score) {
    document.getElementById("ketqua").textContent =
      "Bạn đã đậu. Tổng điểm: " + totalPoints;
  } else {
    document.getElementById("ketqua").textContent =
      "Bạn đã rớt. Tổng điểm: " + totalPoints;
  }
}

document.getElementById("btnketqua").addEventListener("click", calculateResult);
