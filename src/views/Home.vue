<template>
  <div class="p-10 container mx-auto">
    <h1 class="text-2xl font-bold">Cryptocurrency Prices</h1>
    <div class="mt-3">
      <data-table :data="coins" />
    </div>
  </div>
</template>

<script lang="ts">
import DataTable from "@/components/DataTable.vue"
export default {
  name: 'Home',
  components: {
    DataTable
  },
  data() {
    return {
      coins: [
        {
          name: 'Bitcoin',
          price: 50000,
          image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png'
        },
        {
          name: 'Ethereum',
          price: 3000,
          image: 'https://cryptologos.cc/logos/ethereum-eth-logo.png'
        },
        {
          name: 'Cardano',
          price: 2.5,
          image: 'https://cryptologos.cc/logos/cardano-ada-logo.png'
        }
      ]
    }
  }
}
</script>
