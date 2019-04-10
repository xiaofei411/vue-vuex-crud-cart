    
<template>
    <div id="cart_page">
        <div class="container">
          <h1>Your Cart</h1>
          <p v-show="!cart.length">
            <i>Your cart is empty!</i>
            <router-link to="/books">Go shopping</router-link>
          </p>
          <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Price($)</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr v-for="item in cart" :key="item.id">
                        <td>{{ item.title }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.quantity }}</td>
                      </tr>
                      <tr>
                        <td><b>Total:</b></td>
                        <td></td>
                        <td><b>${{ total }}</b></td>
                      </tr>
                  </tbody>
          </table>
          <p id="btn"><button v-show="cart.length" class='btn btn-primary' @click='checkout'>Checkout</button></p>
        </div>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        cart: 'cartBooks'
      }),
      total () {
        return this.cart.reduce((total, item) => {
          return total + item.price * item.quantity
        }, 0)
      }
    },
    methods: {
      checkout(){
        alert('Pay us $' + this.total);
        this.$router.push("/books")
      }
    }
  }
</script>
<style scoped>
    h1 {
      text-align: center;
    }
    #cart_page {
        margin-top: 30px;
    }
    .table-hover{
        text-align: center;
    }
    .btn-danger {
      margin-left: 10px;
    }
    p {
      text-align: center;
    }
    i {
      margin-right: 10px;
    }
    #btn {
        display: flex;
        justify-content: center;
    }
</style>