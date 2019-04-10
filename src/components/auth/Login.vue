<template>
    <div class="container" id="login_page">
        <div>
            <h1>Log In</h1>
            <form  @submit.prevent="login">
                <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" v-model="email" placeholder="Email Address" required/>
                </div>
                <div class="form-group">
                    <label for="email">Password:</label>
                    <input type="password" class="form-control" id="password" v-model="password" placeholder="Password" required/>
                </div>
                <hr/>
                <div class="form-group" id="btn">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
            <p> If you don't have an account, please
                <router-link :to="{ name: 'register' }" class="btn btn-success">
                    Register
                </router-link>
            </p>
            <p class="error">{{ errorMessage }}</p>
        </div>
    </div>
</template>
<script>
      export default {
        data() {
            return {
                email: "",
                password: "",
                errorMessage: "",
            };
        },

        beforeCreate() {
			if (!this.$session.exists()) {
				this.$router.push('/login');
			}
		},

        methods: {
            login: function() {
                this.errorMessage = "";
                let data = {
                    user : {
                        email: this.email,
                        password: this.password
                    }
                };
                this.$store
                .dispatch("login", data)
                .then(() => {
                    this.$session.start();
                    this.$router.push("/books");
                })
                .catch((error) => {
                    let errors = error.response.data.error;
                    for (var key in errors) {
                        this.errorMessage += (errors[key][0]);
                    }
                });
            }
        }
    };
</script>
<style scoped>
    #login_page {
        display: flex;
        justify-content: center;
    }
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
</style>