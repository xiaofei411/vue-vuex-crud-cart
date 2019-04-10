<template>
  <div class="container" id="book_page">
      <h1>Books</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'books_create' }" class="btn btn-info">Create Book</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Author</th>
              <th>Create Date</th>
              <th>Modify Date</th>
              <th>Publish</th>
              <th>Price($)</th>
              <th colSpan="2">Action</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book.id">
                    <td>{{ book.id }}</td>
                    <td>{{ book.title }}</td>
                    <td>{{ book.description }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ book.created_at }}</td>
                    <td>{{ book.updated_at }}</td>
                    <td v-if="book.publish">Published</td>
                    <td v-else>Not Published</td>
                    <td>{{ book.price }}</td>
                    <td>
                        <router-link :to="{name: 'books_edit', params: { id: book.id }}" class="btn btn-primary">Edit</router-link>
                        <button class="btn btn-danger" @click.prevent="remove(book)">Delete</button>
                        <button class="btn btn-success" @click.prevent="addBookToCart(book)">Add Cart</button>
                    </td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
    methods: {
      remove(book){
        this.$store.dispatch('removeBook', book)
      },
      addBookToCart(book){
        this.$store.dispatch('addBookToCart', book)
      }
    },
    computed: {
        books(){
          return this.$store.state.book.books
        }
    }
  }
</script>

<style scoped>
    #book_page {
      margin-top: 20px;
    }
    .table-hover{
        text-align: center;
    }
    .table td {
      vertical-align: middle !important;
    }
    .btn-danger {
      margin-left: 10px;
    }
    .btn-success {
      margin-left: 10px;
    }
    .btn {
      width: 90px !important;
    }
</style>