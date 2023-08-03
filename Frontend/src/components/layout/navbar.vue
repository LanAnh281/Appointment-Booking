<template>
  <div class="navbar">
    <p>Navbar</p>
    <button class="btn btn-primary float-right my-1" @click="signOut">
      Đăng xuất
    </button>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { clearCookieValue } from "../../assets/js/common.login";

export default {
  components: {},
  setup() {
    const router = useRouter();
    const signOut = () => {
      console.log("sign out");
      clearCookieValue();
      router.push({ name: "Login" });
    };
    return {
      signOut,
    };
  },
};
</script>
