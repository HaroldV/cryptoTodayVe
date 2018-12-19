<template>
    <div class="demo-list-action mdl-list">
        <crypto-currency
                :img="`/static/currencies/bitcoin-icon.png`"
                :name="`Bitcoin`"
                :diminutive="`BTC`"
                :usd="currentCurrency.BTC"
                :bss="getAmountBsByCrypto() && formatPrice(bssToBtc)"
        ></crypto-currency>
        <crypto-currency
                :img="`/static/currencies/eth-icon.png`"
                :name="`Ethereum`"
                :diminutive="`ETH`"
                :usd="currentCurrency.ETH"
                :bss="getAmountBsByCrypto() && formatPrice(bssToEth)"
        ></crypto-currency>
        <crypto-currency
                :img="`/static/currencies/xrp-icon.png`"
                :name="`Ripple`"
                :diminutive="`XRP`"
                :usd="currentCurrency.XRP"
                :bss="getAmountBsByCrypto() && formatPrice(bssToXrp)"
        ></crypto-currency>
        <crypto-currency
                :img="`/static/currencies/litecoin-icon.png`"
                :name="`Litecoin`"
                :diminutive="`LTC`"
                :usd="currentCurrency.LTC"
                :bss="getAmountBsByCrypto() && formatPrice(bssToLtc)"
        ></crypto-currency>
        <crypto-currency
                :img="`/static/currencies/dash-icon.png`"
                :name="`Dash`"
                :diminutive="`DASH`"
                :usd="currentCurrency.DASH"
                :bss="getAmountBsByCrypto() && formatPrice(bssToDash)"
        ></crypto-currency>
        <crypto-currency
                :img="`/static/currencies/Digibyte.png`"
                :name="`Digibyte`"
                :diminutive="`DGB`"
                :usd="currentCurrency.DGB"
                :bss="getAmountBsByCrypto() && formatPrice(bssToDgb)"
        ></crypto-currency>
        <crypto-currency
                :img="`/static/currencies/siacoin-icon.png`"
                :name="`Siacoin`"
                :diminutive="`SC`"
                :usd="currentCurrency.SC"
                :bss="getAmountBsByCrypto() && formatPrice(bssToSc)"
        ></crypto-currency>
    </div>
</template>

<script>
  import axios from 'axios'
  import CryptoCurrency from "./CryptoCurrency";

  export default {
    name: 'CryptoCurrencyList',
    components: { CryptoCurrency },
    props: {
    currentCurrency: {  type: Object  }
  },
  data () {
    return {
      bssToBtc: 0,
      bssToEth: 0,
      bssToXrp: 0,
      bssToLtc: 0,
      bssToDash: 0,
      bssToDgb: 0,
      bssToSc: 0,
    }
  },
  methods: {
    getAmountBsByCrypto() {
      return axios.get('https://s3.amazonaws.com/dolartoday/data.json')
        .then(res => {          
          this.bssToBtc = this.currentCurrency.BTC * res.data.USD.transferencia
          this.bssToEth = this.currentCurrency.ETH * res.data.USD.transferencia
          this.bssToXrp = this.currentCurrency.XRP * res.data.USD.transferencia
          this.bssToLtc = this.currentCurrency.LTC * res.data.USD.transferencia
          this.bssToDash = this.currentCurrency.DASH * res.data.USD.transferencia
          this.bssToDgb = this.currentCurrency.DGB * res.data.USD.transferencia
          this.bssToSc = this.currentCurrency.SC * res.data.USD.transferencia
        }).catch(error => console.log(error))
    },
    data () {
      return {
        bssToBtc: 0,
        bssToEth: 0,
        bssToXrp: 0,
        bssToLtc: 0,
        bssToDash: 0,
        bssToDgb: 0,
        bssToSc: 0,
      }
    },
    methods: {
      getAmountBsByCrypto() {
        return axios.get('https://s3.amazonaws.com/dolartoday/data.json')
          .then(res => {
            this.bssToBtc = this.currentCurrency.BTC * res.data.USD.transferencia
            this.bssToEth = this.currentCurrency.ETH * res.data.USD.transferencia
            this.bssToXrp = this.currentCurrency.XRP * res.data.USD.transferencia
            this.bssToLtc = this.currentCurrency.LTC * res.data.USD.transferencia
            this.bssToDash = this.currentCurrency.DASH * res.data.USD.transferencia
            this.bssToDgb = this.currentCurrency.DGB * res.data.USD.transferencia
            this.bssToSc = this.currentCurrency.SC * res.data.USD.transferencia
          }).catch(error => console.log(error))
      },
      formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
<<<<<<< HEAD
    }
  },
}
</script>
=======
      }
    },
  }
</script>
>>>>>>> 28ce0f7c3857270218ce546573e13bc54ae3954c
