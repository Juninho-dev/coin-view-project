<template>
  <div class="p-10 container mx-auto">
    <h1 class="text-2xl font-bold">Cryptocurrency Prices</h1>
    <div class="mt-3">
      <data-table :value="coins" paginator :rows="10" :rowsPerPageOptions="[5, 10, 20, 50]" striped-rows selection-mode="single" @select="handleClickCoin">
        <column field="id" header="#"/>
        <column field="name" header="Coin">
          <template #body="slotProps">
            <div class="flex items-center">
              <img
                  :src="slotProps.data.image"
                  :alt="slotProps.data.name"
                  class="w-6 h-6 inline-block mr-2"
              />
              <span>{{ slotProps.data.name }}</span>
            </div>
          </template>
        </column>
        <column field="current_price" header="Price">
          <template #body="slotProps">
            {{ formatPriceToCurrency(slotProps.data.current_price) }}
          </template>
        </column>
      </data-table>
    </div>
  </div>
</template>

<script lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column';
import { getCoinMarketList } from "@/services/gecko";
import { ICoinMarketList } from "@/interfaces/gecko";
import { ICoin } from "@/interfaces/coin";

export default {
  name: 'Home',
  components: {
    DataTable,
    Column,
  },
  data() {
    return {
      coins: [] as ICoinMarketList[]
    }
  },
  created() {
    this.fetchCoinsData()
  },
  methods: {
    handleClickCoin(coin: ICoin) {
      console.log(coin)
    },
    formatPriceToCurrency(price: number) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(price)
    },
    async fetchCoinsData() {
      try {
        this.coins = await getCoinMarketList(["usd"])
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
