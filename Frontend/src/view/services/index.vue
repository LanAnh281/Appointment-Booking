<script>

</script>

<template>
<section class="services-container">
  <h2>Serv ớch vắng</h2>

  <div class="service-list">
    <div class="service-item">
      <span>📱</span>
      <p>Mua điện thoại / máy in nâng</p>
      <span class="arrow">➔</span>
    </div>
    <div class="service-item">
      <span>🌐</span>
      <p>Tư vấn gói cước / Internet / Di động</p>
      <span class="arrow">➔</span>
    </div>
    <div class="service-item">
      <span>🛠</span>
      <p>Hỗ trợ kỹ thuật</p>
      <span class="arrow">➔</span>
    </div>
    <div class="service-item">
      <span>🔧</span>
      <p>Bảo hành - Sửa chữa</p>
      <span class="arrow">➔</span>
    </div>
  </div>

  <button class="btn-primary">Tiếp tục</button>
</section>

</template>

<style>
.services-container {
  padding: 30px 40px;
}

.services-container h2 {
  margin-bottom: 20px;
}

.service-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;
}

.service-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  padding: 15px 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: background 0.3s;
}

.service-item:hover {
  background: #ececec;
}

.service-item span {
  font-size: 20px;
  margin-right: 10px;
}

.service-item p {
  flex: 1;
  margin: 0;
  font-size: 16px;
}

.arrow {
  font-size: 18px;
  color: #333;
}

</style>