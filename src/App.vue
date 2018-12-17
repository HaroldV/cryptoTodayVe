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
                <current :currentCurrency="currentCurrency"></current>
            </section>
            <section class="mdl-layout__tab-panel" id="about">
                <div class="mdl-grid">
                    <developer v-for="dev in devs" :dev="dev"></developer>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
import Current from '@/components/Current'
import Previous from '@/components/Previous'
import Developer from "./components/Developer";
import axios from 'axios'


export default {
  name: 'app',
  components: {Developer, Current, Previous },

  data () {
    return {
      searchCurrency: '',
      currentCurrency: {
          BTC: '',
          DGB: '',
          SC: '',
          ETH: '',
          LTC: '',
          DASH: '',
          XRP: '',
      },
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

    if (! navigator.onLine) {

      this.currentCurrency = {
        BTC: localStorage.getItem('BTC'),
        DGB: localStorage.getItem('DGB'),
        SC: localStorage.getItem('SC'),
        ETH: localStorage.getItem('ETH'),
        LTC: localStorage.getItem('LTC'),
        LTC: localStorage.getItem('DASH'),
        LTC: localStorage.getItem('XRP'),
      }

    } else {
      this.cryptoToday(this.currentCurrency)
    }
  },

  methods: {
    cryptoToday: (currentCurrency) => {
      let url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,DGB,SC,ETH,LTC,DASH,XRP&tsyms=USD'
      axios.get(url).then(res => {
        localStorage.setItem('BTC', currentCurrency.BTC = res.data.BTC.USD)
        localStorage.setItem('DGB', currentCurrency.DGB = res.data.DGB.USD)
        localStorage.setItem('SC', currentCurrency.SC = res.data.SC.USD)
        localStorage.setItem('ETH', currentCurrency.ETH = res.data.ETH.USD)
        localStorage.setItem('LTC', currentCurrency.LTC = res.data.LTC.USD)
        localStorage.setItem('DASH', currentCurrency.DASH = res.data.DASH.USD)
        localStorage.setItem('XRP', currentCurrency.XRP = res.data.XRP.USD)
      })
    },
  },
}
</script>

<style scope>
.mdl-layout__header{ background-color: #1e8600; }
.mdl-layout__tab-bar{ background-color: #1e8600; }
.mdl-layout.is-upgraded .mdl-layout__tab.is-active::after {
    background: #efd500;
}
.mdl-tabs__tab{ color: white }
.mdl-tabs.is-upgraded .mdl-tabs__tab.is-active { color: chartreuse; }
ul, ol{ list-style-type: none; }
</style>