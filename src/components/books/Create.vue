<template>
  <div class="container" id="create_page">
    <h1>Create a Book</h1>
    <form @submit.prevent="addBook">
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
                    <input type="checkbox" class="form-control" v-model="book.publish"/>
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
            <button type="submit" class="btn btn-success">Create</button>
            <router-link class="nav-link btn btn-primary" to="/books" >Cancel</router-link>
        </div>
    </form>
  </div>
</template>

<script>
export default {
    name: 'Create',
    data() {
        return {
            book: {}
        }
    },
    methods: {
        addBook(){
            this.$store.dispatch('addBook', this.book);
            this.$router.push("/books");
        }
    }
}
</script>
<style scoped>
    #create_page {
        margin-top: 30px;
    }
    h1 {
        text-align: center;
    }
    #btn {
        justify-content: center;
        display: flex;
    }
    .btn-success {
        margin-right: 20px;
    }
</style>