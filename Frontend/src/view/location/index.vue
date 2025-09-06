<script>
</script>
<template>
    <section class="booking-container">
  <h2>Sàn my Xi</h2>

  <div class="map-section">
    <div class="map-placeholder">[Bản đồ hiển thị ở đây]</div>
    <div class="store-info">
      <div class="store-card">
        <h3>Viettel Store</h3>
        <p>Địa chỉ: Đường số X, Quận Y</p>
        <p>Thời gian: 8:00 - 20:00</p>
      </div>
      <div class="store-card">
        <h3>18an hẻm 15m</h3>
        <p>Chi nhánh phụ</p>
        <p>Mở cửa: 9:00 - 18:00</p>
      </div>
      <div class="store-card">
        <h3>Mom chùi Lìed</h3>
        <p>Chi nhánh khác</p>
        <p>Cửa hàng tiện lợi</p>
      </div>
    </div>
  </div>

  <div class="search-section">
    <input type="text" placeholder="Tìm cửa hàng gần bạn..." />
    <button class="btn-primary">Tạo lịch hẹn</button>
  </div>
</section>
</template>
<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #fff;
  border-bottom: 1px solid #ddd;
}
header .logo {
  font-size: 20px;
  font-weight: bold;
  color: red;
}
header nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}
.login-btn {
  background: black;
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
}
.booking-container {
  padding: 20px 40px;
}
.map-section {
  display: flex;
  margin-top: 20px;
}
.map-placeholder {
  width: 250px;
  height: 250px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
.store-info {
  margin-left: 20px;
}
.store-card {
  background: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
}
.search-section {
  margin-top: 20px;
}
.search-section input {
  padding: 10px;
  width: 250px;
  margin-right: 10px;
}
.btn-primary {
  padding: 10px 15px;
  background: black;
  color: white;
  border: none;
  border-radius: 4px;
}

</style>