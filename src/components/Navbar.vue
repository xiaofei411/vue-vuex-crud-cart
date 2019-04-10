<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link :to="{ name: 'home' }" class="navbar-brand">My Vue Project</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div v-if="!isLoggedIn" class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link :to="{ name: 'home' }" class="nav-item nav-link">Home</router-link>
          <router-link :to="{ name: 'about' }" class="nav-item nav-link">About</router-link>
        </div>
      </div>
      <div v-if="!isLoggedIn" class="nav navbar-nav navbar-right">
          <router-link tag="li" active-class="active" to="/login">
            <a class="nav-item nav-link">
              <span class="glyphicon glyphicon-log-in"></span>
              &nbsp;Log in
            </a>
          </router-link>

          <router-link tag="li" active-class="active" to="/register">
            <a class="nav-item nav-link">
              <span class="glyphicon glyphicon-user"></span>
              &nbsp;Sign up
            </a>
          </router-link>
      </div>
      <div v-if="isLoggedIn" class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link :to="{ name: 'books' }" class="nav-item nav-link">Books</router-link>
          <router-link :to="{ name: 'cart' }" class="nav-item nav-link">Shopping Cart</router-link>
        </div>
      </div>
      <div v-if="isLoggedIn" class="nav navbar-nav navbar-right">
          <a href="javascript:;" class="nav-item nav-link" @click.prevent="logout">
            <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span>
            &nbsp;Log out
          </a>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    computed: {
      isLoggedIn: function() {
        return this.$store.getters.isLoggedIn;
      }
    },
    methods: {
      logout: function() {
        this.$store.dispatch("logout").then(() => {
          this.$session.destroy();
          this.$router.push("/login");
        });
      }
    }
  }
</script>

<style scoped>
      
</style>
