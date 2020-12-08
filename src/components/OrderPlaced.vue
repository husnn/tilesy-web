<template>
  <div id="order-placed" class="mx-auto">
    <div id="order-placed__main" class="p-8 sm:p-16 text-left grid auto-rows-auto gap-8 items-center">
      <div class="p-8 bg-green bg-opacity-10 rounded">
        <h2>You order has been placed!</h2>
        <p class="mt-2">An order confirmation will be sent to your email address shortly.</p>
      </div>
      <div v-if="order">
        <h3>Shipping address</h3>
        <p class="my-2"><strong>{{ order.shipping.name }}</strong></p>
        <ul class="text-sm">
          <li>{{ order.shipping.address.line1 }}, {{ order.shipping.address.line2 }}</li>
          <li>{{ order.shipping.address.city }}</li>
          <li>{{ order.shipping.address.postal_code }}</li>
          <li>{{ order.shipping.address.state }}</li>
          <li>{{ order.shipping.address.country }}</li>
        </ul>
      </div>
      <div>
        <p class="text-sm">If you have any questions, you can contact us at <a href="mailto:hello@tilesy.co">hello@tilesy.co</a>.</p>
      </div>
      <p>Return to <router-link to="/">home</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'OrderPlaced',
  data() {
    return {
      order: null
    }
  },
  mounted() {
    const { id } = this.$route.query;
    if (id) this.getOrderDetails(id);
  },
  methods: {
    async getOrderDetails(id) {
      try {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/get-order`, { params: { id } });
        this.order = response.data;
      } catch (err) {
        return;
      }
    }
  }
}
</script>

<style>

</style>
