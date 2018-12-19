<template>
    <div>
        <loading v-if="loading"></loading>

        <div v-else="loading" class="demo-list-action mdl-list">
            <crypto-currency v-for="currency in currencies" :currency="currency" :key="currency.id"></crypto-currency>
        </div>
    </div>
</template>

<script>
  import CryptoCurrency from "./CryptoCurrency"
  import Loading from "./Loading";

  export default {
    name: 'CryptoCurrencyList',
    components: { Loading, CryptoCurrency },
    props: {
      currencies: { type: Array },
      loading: { type: Boolean }
    }
  }
</script>