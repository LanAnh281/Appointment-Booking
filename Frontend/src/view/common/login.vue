<script>
export default {
  components: {},
  setup() {
    const login = () => {
      console.log("Login now");
    };
    return {
      login,
    };
  },
};
</script>
<template>
  <div class="login container-fluid">
    <div class="row justify-content-around align-items-center vh-100">
      <div class="card shadow col-4">
        <div class="row justify-content-center">
          <router-link :to="{ name: 'Account' }" class="col-3">
            <img
              src="../../assets/image/logo.PNG"
              style="width: 100%; height: 100%"
            />
          </router-link>
          <h4 class="text-center mt-3 ml-3 col-12">Đăng nhập</h4>
        </div>
        <form @submit.prevent="login" class="container mt-3">
          <div class="form-group row">
            <label for="inputUserName" class="col-sm-3 col-form-label p-0"
              >Mã tài khoản :</label
            >
            <div class="col-sm-9">
              <input type="text" class="form-control" id="inputUserName" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-3 col-form-label p-0"
              >Mật khẩu :</label
            >
            <div class="col-sm-9">
              <input type="password" class="form-control" id="inputPassword" />
            </div>
          </div>
          <div class="form-group row justify-content-around mb-0">
            <button type="submit" class="btn btn-login col-sm-3">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style></style>
