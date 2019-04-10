import Vue from "vue";
import Router from "vue-router";
import VueSession from 'vue-session';
import store from "./store";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Login from "./components/auth/Login.vue";
import Register from "./components/auth/Register.vue";
// books route
import Book from "./components/books/Index.vue";
import BookCreate from "./components/books/Create.vue";
import BookEdit from "./components/books/Edit.vue";
// cart route
import Cart from "./components/cart/Index.vue";
Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        requireSession: true
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        requireSession: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requireSession: true
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/books",
      name: "books",
      component: Book,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/books/create",
      name: "books_create",
      component: BookCreate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/books/edit/:id",
      name: "books_edit",
      component: BookEdit,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

const options = {
  persist: true
}

Vue.use(VueSession, options);
const session = Vue.prototype.$session;


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireSession)) {
    if (session.exists()) {
        next('/books');
        return;
    }
    next();
  } 
  else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } 
  else {
    next();
  }
});

export default router;