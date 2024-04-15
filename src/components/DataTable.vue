<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table
              class="min-w-full text-left text-sm text-surface">
            <thead
                class="border-b border-neutral-200 font-medium">
            <tr>
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">Coin</th>
              <th scope="col" class="px-6 py-4">Price</th>
            </tr>
            </thead>
            <tbody>

            <tr
                class="border-b border-neutral-200 hover:bg-neutral-100 hover:cursor-pointer"
                v-for="(coin, index) in data"
                :key="index"
                @click="handleClickCoin(coin)"
            >
              <td class="whitespace-nowrap px-6 py-4 font-medium">{{ index }}</td>
              <td class="whitespace-nowrap px-6 py-4">
                <img
                    :src="coin.image"
                    :alt="coin.name"
                    class="w-6 h-6 inline-block mr-2"
                />
                {{ coin.name }}
              </td>
              <td class="whitespace-nowrap px-6 py-4">{{ formatPriceToCurrency(coin.price) }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ICoin } from "@/interfaces/coin";
import { PropType } from "vue";

export default {
  name: 'DataTable',
  props: {
    data: {
      type: Array as PropType<ICoin[]>,
      required: true
    }
  },
  methods: {
    formatPriceToCurrency(price: number) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(price)
    },
    handleClickCoin(coin: ICoin) {
      console.log(coin)
    }
  }
}
</script>
