import Vue from "vue";
import VueRouter from "vue-router";

import MixinsPage from "./pages/MixinsPage.vue";
import CustomDirectivesPage from "./pages/CustomDirectivesPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    { path: "/", redirect: "/MixinsPage" },
    {
      name: "mixins",
      path: "/mixins",
      component: MixinsPage
    },
    {
      name: "scroll",
      path: "/scroll",
      component: CustomDirectivesPage
    }
  ]
});

export default router;
