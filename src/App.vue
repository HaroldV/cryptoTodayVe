<template>
  <div>      
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <!-- Header -->
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">CryptoTodayVE</span>
        </div>          
      </header>
      <!-- Tabs -->
      <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        <div class="mdl-tabs__tab-bar">
            <a href="#ranking" class="mdl-tabs__tab is-active"><i class="fas fa-star"></i></a>
            <a href="#about" class="mdl-tabs__tab"><i class="fas fa-user"></i></a>
        </div>
        <div class="mdl-tabs__panel is-active" id="ranking">        
          <current :currentCurrency="currentCurrency"></current>
        </div>       
        <div class="mdl-tabs__panel center-items" id="about">   
          <div class="mdl-grid ">
            <div class="mdl-cell mdl-cell--6-col">
              <img src="./assets/team/hv.jpg" width="60" class="img-responsive" height="60" alt="hv">            
              <h4>Harold Villalobos</h4>
              <p class="text-muted">Full Stack Developer</p>
              <ul class="list-inline social-buttons">
                  <li><a href="https://twitter.com/haroldv22_" target="_blank"><i class="fab fa-twitter-square"></i></a>                                         
                  </li>
                  <li><a href="https://www.linkedin.com/in/haroldv22" target="_blank"><i class="fab fa-linkedin"></i></a>
                  </li>
                  <li><a href="https://github.com/HaroldV" target="_blank"><i class="fab fa-github"></i></a>
                  </li>
              </ul>
            </div>       
            <div class="mdl-cell mdl-cell--1-col">
                <img src="./assets/team/jg.jpg" width="60" height="60" alt="hv">
                <h4>Javier Gomez</h4>
                <p class="text-muted">Full Stack Developer</p>
                <ul class="list-inline social-buttons">
                    <li><a href="https://twitter.com/javiergomezve" target="_blank"><i class="fab fa-twitter-square"></i></a>
                    </li>                            
                    <li><a href="https://www.linkedin.com/in/javiergomezve/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    </li>
                    <li><a href="https://github.com/javiergomezve" target="_blank"><i class="fab fa-github"></i></a>
                    </li>
                </ul>
            </div>
          </div>
        </div>       
      </div>      
    </div>
  </div>
</template>

<script>
import Current from '@/components/Current'
import Previous from '@/components/Previous'
import moment from 'moment'
import axios from 'axios'
import Pusher from 'pusher-js'

export default {  
  name: 'app',  
  components: { Current, Previous },
  
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
.mdl-layout__header{ background-color: #4caf50; }
.mdl-tabs__tab-bar{ background-color: #4caf50; }
.mdl-tabs__tab{ color: white }
.mdl-tabs.is-upgraded .mdl-tabs__tab.is-active { color: chartreuse; }
ul, ol{ list-style-type: none; }

</style>