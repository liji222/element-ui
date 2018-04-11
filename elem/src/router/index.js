import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import MyElement from "@/components/MyElement";
import MyForm from "@/components/MyForm";
import MyTable from "../components/MyTable";

import SubRouter from "@/components/SubRouter";

import ToggleTabs from "../components/Toggletabs";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "MyElement",
      component: MyElement
    },

    {
      path: "/table",
      name: "MyTable",
      component: MyTable
    },
    {
      path: "/tabs",
      name: "ToggleTabs",
      component: ToggleTabs
    },
    {
      path: "/demo",
      name: "MyElement",
      component: MyElement
    },
    {
      path: "/help",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/:module",
      name: "SubRouter",
      component: SubRouter
    }
  ]
});
