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
            </div>
        </header>

        <main class="mdl-layout__content">
            <section class="mdl-layout__tab-panel is-active" id="currencies">
                <crypto-currency-list :loading="loading" :currencies="currencies"></crypto-currency-list>

                <div id="demo-snackbar-example" class="mdl-js-snackbar mdl-snackbar mdl-snackbar--active" v-if="showError">
                    <div class="mdl-snackbar__text">
                        Ocurrió un error consultando los datos
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
  import CryptoCurrencyList from '@/components/CryptoCurrencyList'
  import Previous from '@/components/Previous'
  import axios from 'axios'

  export default {
    name: 'app',
    components: { CryptoCurrencyList, Previous },

    data () {
      return {
        showError: false,
        loading: true,
        currencies: []
      }
    },

    created() {
      axios.get('https://cryptotodayve.herokuapp.com/api/cryptos')
        .then(cryptos => {
          this.currencies = cryptos.data;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          this.showError = true;
        });
    },
  }

</script>

<style scoped>
  body {
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }
  .mdl-layout__header{ background-color: #1e8600; }

  .mdl-layout__tab-bar{ background-color: #1e8600; }

  .mdl-layout.is-upgraded .mdl-layout__tab.is-active::after {
    background: #efd500;
  }

  .mdl-tabs__tab { color: white }

  .mdl-tabs.is-upgraded .mdl-tabs__tab.is-active { color: chartreuse; }

  ul, ol { list-style-type: none; }
</style>
