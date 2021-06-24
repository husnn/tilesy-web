import { createWebHistory, createRouter } from "vue-router";

import ProductPage from "@/components/ProductPage";
import OrderPlaced from "@/components/OrderPlaced";

const routes = [
  {
    path: "/",
    name: "Custom Music Player Plaque",
    component: ProductPage,
  },
  {
    path: "/order-placed",
    name: "Order Placed",
    component: OrderPlaced
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
