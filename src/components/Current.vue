<template>  
    <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">      
      <tbody>
        <tr>
          <td class="mdl-data-table__cell--non-numeric">
            <img src="../assets/bitcoin-icon.png" width="60" height="60" alt="bitcoin">
          </td>
          <td></td>
          <td>
            <ul>
              <li class="title">1 BTC</li>
              <li class="amount">$ {{currentCurrency.BTC}}</li>
              <li class="amount"> BsS {{ getAmountBsByCrypto() && formatPrice(bssToBtc) }} </li>
            </ul>
          </td>
        </tr>
        <tr> 
          <td class="mdl-data-table__cell--non-numeric">
            <img src="../assets/eth-icon.png" width="52" height="60" alt="ethereum">
          </td>
          <td></td>
          <td>
             <ul>
              <li class="title">1 ETH</li>
              <li class="amount">$ {{currentCurrency.ETH}}</li>
              <li class="amount"> BsS {{ getAmountBsByCrypto() && formatPrice(bssToEth) }} </li>
            </ul>            
          </td>
        </tr>        
        <tr> 
          <td class="mdl-data-table__cell--non-numeric">
            <img src="../assets/xrp-icon.png" width="50" height="50" alt="">
          </td>
          <td></td>
          <td>
            <ul>
              <li class="title">1 XRP</li>
              <li class="amount">$ {{currentCurrency.XRP}}</li>
              <li class="amount"> BsS {{ getAmountBsByCrypto() && formatPrice(bssToXrp) }} </li>
            </ul>
          </td>
        </tr>        
        <tr>
          <td class="mdl-data-table__cell--non-numeric">
            <img src="../assets/litecoin-icon.png" width="50" height="50" alt="">
          </td>
          <td></td>
          <td>
            <ul>
              <li class="title">1 LTC</li>
              <li class="amount">$ {{currentCurrency.LTC}}</li>
              <li class="amount"> BsS {{ getAmountBsByCrypto() && formatPrice(bssToLtc) }} </li>
            </ul>            
          </td>
        </tr>        
        <tr>
          <td class="mdl-data-table__cell--non-numeric">
            <img src="../assets/dash-icon.png" width="50" height="50" alt="">
          </td>
          <td></td>
          <td>
            <ul>
              <li class="title">1 DASH</li>
              <li class="amount">$ {{currentCurrency.DASH}}</li>
              <li class="amount"> BsS {{ getAmountBsByCrypto() && formatPrice(bssToDash) }} </li>
            </ul>            
          </td>
        </tr>        
        <tr>
          <td class="mdl-data-table__cell--non-numeric">
            <img src="../assets/Digibyte.png" width="50" height="50" alt="">
          </td>
          <td></td>
          <td>
            <ul>
              <li class="title">1 DGB</li>
              <li class="amount">$ {{currentCurrency.DGB}}</li>
              <li class="amount">BsS {{ getAmountBsByCrypto() && formatPrice(bssToDgb) }} </li>
            </ul>              
          </td>
        </tr>        
        <tr>
          <td class="mdl-data-table__cell--non-numeric">
            <img src="../assets/siacoin-icon.png" width="50" height="50" alt="">
          </td>
          <td></td>
          <td>
             <ul>
              <li class="title">1 SC</li>
              <li class="amount">$ {{currentCurrency.SC}}</li>
              <li class="amount">BsS {{ getAmountBsByCrypto() && formatPrice(bssToSc) }} </li>
            </ul>                            
          </td>
        </tr>               
      </tbody>
    </table>    
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
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
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
  },
}
</script>

<style scope>
.mdl-shadow--2dp{
  width: 100%;
}
.amount{
  font-size: 18px;
  font-weight: bold;
}
</style>

