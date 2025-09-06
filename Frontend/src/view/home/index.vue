<script>

</script>

<template>
   <main>
    <section class="hero">
      <h1>Đặt lịch hẹn trực tuyến tại Viettel Store</h1>
      <div class="buttons">
        <button class="primary">Đặt lịch hẹn</button>
        <button>Tra cứu lịch hẹn</button>
        <button>Liên hệ hỗ trợ</button>
      </div>
    </section>

    <section class="offers">
      <h2>Ưu đãi nổi bật</h2>
      <div class="cards">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
    </section>
  </main>
</template>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #fff;
  color: #333;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  border-bottom: 1px solid #eee;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: red;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #333;
}

nav button {
  background: #444;
  color: #fff;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
}

.hero {
  text-align: center;
  padding: 60px 20px;
  background: #f9f9f9;
}

.hero h1 {
  margin-bottom: 20px;
}

.buttons button {
  margin: 5px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: rgb(243, 235, 235);
}

button.primary {
  background: black;
  color: white;
}

.offers {
  padding: 40px;
}

.offers .cards {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.offers .card {
  width: 120px;
  height: 80px;
  background: #eee;
  border-radius: 8px;
}
</style>