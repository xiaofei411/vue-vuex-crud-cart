<template>
    <div class="container" id="edit_page">
    <h1>Edit a Book</h1>
    <form @submit.prevent="updateBook">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Title:</label>
                    <input type="text" class="form-control" v-model="book.title" required/>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Author:</label>
                    <input type="text" class="form-control" v-model="book.author" required/>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Create Date:</label>
                    <input type="date" class="form-control" v-model="book.created_at" required/>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Modify Date:</label>
                    <input type="date" class="form-control" v-model="book.updated_at" required/>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>Price($):</label>
                    <input type="number" class="form-control" v-model="book.price" required/>
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Publish:</label>
                    <input type="checkbox" class="form-control" v-model="book.publish" />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label>Description:</label>
                    <input type="text" class="form-control" v-model="book.description" required/>
                </div>
            </div>
        </div>
        <hr/>
        
        <div class="form-group" id="btn">
            <button class="btn btn-success">Update</button>
            <router-link class="nav-link btn btn-primary" to="/books" >Cancel</router-link>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        name: 'Edit',
        data() {
            return {
                book: {}
            }
        },
        created() {
            let id = this.$route.params.id;
            let book = this.$store.state.book.books.find(book => book.id == id);
            this.book.id = id;
            this.book.title = book.title;
            this.book.description = book.description;
            this.book.author = book.author;
            this.book.created_at = book.created_at;
            this.book.updated_at = book.updated_at;
            this.book.publish = book.publish;
            this.book.price = book.price;
        },
        methods: {
            updateBook(){
                this.$store.dispatch('updateBook', this.book);
                this.$router.push("/books");
            }
        }
    }
</script>

<style>
    h1 {
        text-align: center;
    }
    #edit_page {
        margin-top: 20px;
    }
    #btn {
        justify-content: center;
        display: flex;
    }
    .btn-success {
        margin-right: 20px;
    }
</style>
