<template>
    <div class="container" id="register_page">
        <div>
            <h1>Register</h1>
            <form @submit.prevent="register">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="name" class="form-control" id="name" v-model="name" placeholder="Name" required>
                </div>
                <div class="form-group">
                    <label for="email">E-Mail Address:</label>
                    <input type="email" class="form-control" id="email" v-model="email" placeholder="Email" required>
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Password" required>
                </div>
                <div class="form-group">
                    <label for="password-confirm">Confirm Password:</label>
                    <input type="password" class="form-control" id="password-confirm" v-model="password_confirmation" placeholder="Confirm Password" required>
                </div>
                <hr/>
                <div class="form-group" id="btn">
                    <button type="submit" class="btn btn-primary">Register</button>
                    <router-link :to="{ name: 'login'}" class="btn btn-info">
                        Cancel
                    </router-link>
                </div>
                <p class="error">{{ errorMessage }}</p>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                errorMessage: "",
            };
        },

        // beforeCreate() {
		// 	if (!this.$session.exists()) {
		// 		this.$router.push('/login');
		// 	}
        // },
        
        methods: {
            register: function() {
            this.errorMessage = "";
            let data = {
                user : {
                    name: this.name,
                    email: this.email,
                    password: this.password
                }
            };
            this.$store
                .dispatch("register", data)
                .then(() => {
                    this.$session.start();
                    this.$router.push("/books");
                })
                .catch((error) => {
                    let errors = error.response.data.errors;
                    for (var key in errors) {
                        this.errorMessage += key + " " + (errors[key][0]);
                    }
                });
            }
        }
    };
</script>
<style scoped>
    h1 {
        text-align: center;
        margin-top: 20px;
    }
    p {
        text-align: center;
    }
    .error {
        color: red;
        margin-top: 20px;
    }
    #btn {
        display: flex;
        justify-content: center;
    }
    .btn-primary {
        margin-right: 10px;
    }
    .register {
        width: 340px;
    }
    #register_page {
        display: flex;
        justify-content: center;
    }
</style>