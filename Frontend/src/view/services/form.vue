<script>
</script>

<template>
    <section class="customer-container">
  <h2>Thông tin khách hàng</h2>

  <form class="customer-form" method="post" action="/submit">
    <div class="form-row">
      <input type="text" name="fullname" placeholder="Họ và tên" required />
      <input type="text" name="phone" placeholder="Số điện thoại" required />
    </div>

    <input type="email" name="email" placeholder="Email (tùy chọn)" />

    <textarea name="note" placeholder="Ghi chú thêm"></textarea>

    <label class="checkbox">
      <input type="checkbox" name="later" />
      Đặt lịch hẹn
    </label>

    <button type="submit" class="btn-primary">Đặt lịch</button>
  </form>
</section>
</template>
<style>
.customer-container {
  padding: 30px 40px;
}

.customer-container h2 {
  margin-bottom: 20px;
}

.customer-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-row {
  display: flex;
  gap: 10px;
}

.form-row input {
  flex: 1;
}

.customer-form input,
.customer-form textarea {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 15px;
}

.customer-form textarea {
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