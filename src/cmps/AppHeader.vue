<template>
  <header>
    <nav>
      <RouterLink to="/">
        <span role="img" aria-label="logo">🙏</span>
        <h1>Heloooooo</h1>
        <h2>AmitCohen</h2>
      </RouterLink>
      <RouterLink to="/station">Stations</RouterLink>
      <RouterLink to="/review">Reviews</RouterLink>
      <RouterLink to="/chat">Chat</RouterLink>
      <RouterLink to="/login">Login / Signup</RouterLink>
    </nav>
    <section class="loggedin-user" v-if="loggedInUser">
      <RouterLink :to="`/user/${loggedInUser._id}`">
        {{ loggedInUser.fullname }}
      </RouterLink>
      <span>{{ loggedInUser.score.toLocaleString() }}</span>
      <img :src="loggedInUser.imgUrl" />
    </section>
  </header>
</template>
<script>
export default {
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser;
    },
  },
};
</script>
