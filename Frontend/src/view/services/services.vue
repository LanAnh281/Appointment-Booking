<script>

</script>

<template>

<section class="options-container">
  <h2>Xác chọn trấn gấu</h2>

  <form class="options-form" method="post" action="/options/submit">
    <label class="option-item">
      <input type="checkbox" name="service" value="notify" />
      <span>Nhận để in ra câu này giữ tiện</span>
    </label>

    <label class="option-item">
      <input type="checkbox" name="service" value="sms" />
      <span>Gửi tin nhắn SMS</span>
    </label>

    <label class="option-item">
      <input type="checkbox" name="service" value="email" />
      <span>Gửi email thông báo</span>
    </label>

    <label class="option-item">
      <input type="checkbox" name="service" value="code" />
      <span>Mã lịch hẹn</span>
    </label>

    <button type="submit" class="btn-primary">Xác nhận</button>
  </form>
</section>
</template>

<style>
.options-container {
  padding: 30px 40px;
}

.options-container h2 {
  margin-bottom: 20px;
}

.options-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.option-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f9f9f9;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
}

.option-item:hover {
  background: #ececec;
}

.btn-primary {
  margin-top: 20px;
  padding: 12px;
  background: black;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
}

</style>