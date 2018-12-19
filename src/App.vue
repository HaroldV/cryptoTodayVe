<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs">
        <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
                <span class="mdl-layout-title">CryptoTodayVE</span>
            </div>

            <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
                <a href="#currencies" class="mdl-layout__tab is-active">
                    <i class="fas fa-star fa-2x"></i>
                </a>
                <a href="#about" class="mdl-layout__tab">
                    <i class="fas fa-user fa-2x"></i>
                </a>
            </div>
        </header>

        <main class="mdl-layout__content">
            <section class="mdl-layout__tab-panel is-active" id="currencies">
                <crypto-currency-list :loading="loading" :currencies="currencies"></crypto-currency-list>
            </section>

            <section class="mdl-layout__tab-panel" id="about">
                <div class="mdl-grid">
                    <developer v-for="dev in devs" :dev="dev" :key="dev.name"></developer>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
  import CryptoCurrencyList from '@/components/CryptoCurrencyList'
  import Previous from '@/components/Previous'
  import Developer from "./components/Developer";
  import axios from 'axios'

  export default {
    name: 'app',
    components: { Developer, CryptoCurrencyList, Previous },

    data () {
      return {
        loading: true,
        currencies: [
          {
            id: 'BTC',
            img: '/static/currencies/bitcoin.svg',
            name: 'Bitcoin',
            usd: 0,
            bss: 0
          },
          {
            id: 'ETH',
            img: '/static/currencies/ethereum.svg',
            name: 'Ethereum',
            usd: 0,
            bss: 0
          },
          {
            id: 'XRP',
            img: '/static/currencies/ripple.svg',
            name: 'Ripple',
            usd: 0,
            bss: 0
          },
          {
            id: 'LTC',
            img: '/static/currencies/litecoin.svg',
            name: 'Litecoin',
            usd: 0,
            bss: 0
          },
          {
            id: 'DASH',
            img: '/static/currencies/dash.svg',
            name: 'Dash',
            usd: 0,
            bss: 0
          },
          {
            id: 'DGB',
            img: '/static/currencies/digibyte.svg',
            name: 'Digibyte',
            usd: 0,
            bss: 0
          },
          {
            id: 'SC',
            img: '/static/currencies/siacoin.svg',
            name: 'Siacoin',
            usd: 0,
            bss: 0
          },
        ],
        devs: [
          {
            name: 'Harold Villalobos', img: '/static/team/hv.jpg', headline: 'Full Stack Developer', socialLinks: [
              {url: 'https://twitter.com/haroldv22_', icon: 'fab fa-twitter-square'},
              {url: 'https://www.linkedin.com/in/haroldv22', icon: 'fab fa-linkedin'},
              {url: 'https://github.com/HaroldV', icon: 'fab fa-github'},
            ]
          },
          {
            name: 'Javier Gomez', img: '/static/team/jg.jpg', headline: 'Full Stack Developer', socialLinks: [
              {url: 'https://twitter.com/javiergomezve', icon: 'fab fa-twitter-square'},
              {url: 'https://www.linkedin.com/in/javiergomezve', icon: 'fab fa-linkedin'},
              {url: 'https://github.com/javiergomezve', icon: 'fab fa-github'},
            ]
          }
        ]
      }
    },

    created() {
      const refreshData = () => axios.all([
        getCryptoCurrenciesValues(),
        getDollarValue()
      ])
        .then(axios.spread((cryptos, dollar) => {
          this.setData({currencies: cryptos.data, dollar: dollar.data})
        }))
      
      refreshData()
      
      setInterval(() => {
        refreshData()
      }, 180000)
    },

    methods: {
      setData(data) {
        this.currencies.map((currency) => {
          try {
            currency.usd = data.currencies[currency.id].USD
            currency.bss = currency.usd * data.dollar.USD.transferencia
          } catch (e) {
            console.error('La moneda ${currency.id} no pudo ser encontrada');
          }
        })

        this.loading = false
      }
    },
  }

  const getCryptoCurrenciesValues = () => axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,DGB,SC,ETH,LTC,DASH,XRP&tsyms=USD')
  const getDollarValue = () => axios.get('https://s3.amazonaws.com/dolartoday/data.json')
  
</script>

<style scoped>
  .mdl-layout__header{ background-color: #1e8600; }

  .mdl-layout__tab-bar{ background-color: #1e8600; }

  .mdl-layout.is-upgraded .mdl-layout__tab.is-active::after {
    background: #efd500;
  }

  .mdl-tabs__tab { color: white }

  .mdl-tabs.is-upgraded .mdl-tabs__tab.is-active { color: chartreuse; }

  ul, ol { list-style-type: none; }
</style>