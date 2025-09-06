<script>

</script>

<template>
<section class="confirm-container">
  <h2>Chọn dịch hạy</h2>

  <!-- Dịch vụ đã chọn -->
  <div class="selected-services">
    <div class="service-box">
      <span>📱</span>
      <p>Mua điện thoại / Uư đãi cộng thêm</p>
    </div>
    <div class="service-box">
      <span>💻</span>
      <p>Tư vấn gói cước / Internet bdt / các dịch vụ</p>
    </div>
  </div>

  <!-- Form nhập thông tin -->
  <form class="booking-form" method="post" action="/submit">
    <input type="text" name="fullname" placeholder="Họ và tên, khách hàng" required />
    <input type="text" name="phone" placeholder="Số điện thoại" required />
    <input type="email" name="email" placeholder="Email (tùy chọn)" />
    <textarea name="note" placeholder="Ghi chú thêm"></textarea>

    <label class="checkbox">
      <input type="checkbox" required />
      Tôi đồng ý với các điều khoản sử dụng dịch vụ
    </label>

    <button type="submit" class="btn-primary">Đặt lịch</button>
  </form>
</section>
</template>
<style>
.confirm-container {
  padding: 30px 40px;
}

.selected-services {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.service-box {
  flex: 1;
  display: flex;
  align-items: center;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.service-box span {
  font-size: 24px;
  margin-right: 10px;
}

.booking-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.booking-form input,
.booking-form textarea {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 15px;
}

.booking-form textarea {
  resize: none;
  height: 80px;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.btn-primary {
  background: black;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

</style>