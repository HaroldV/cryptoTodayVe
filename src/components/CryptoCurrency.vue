<template>
    <div class="mdl-list__item mdl-shadow--2dp">
        <span class="mdl-list__item-primary-content">
            <img v-bind:src="currency.img" width="50" v-bind:alt="currency.name">
        </span>

        <div class="mdl-list__item-secondary-action">
            <ul>
                <li class="title">1 {{currency.id}}</li>
                <li class="amount">$ {{currency.usd}}</li>
                <li class="amount">BsS {{currency.bss | formatPrice}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'CryptoCurrency',
    props: {
      currency: { type: Object }
    }
  }
</script>

<style scoped>
  .mdl-list__item {
    padding-top: 0;
    padding-bottom: 0;
  }

  .mdl-list__item-secondary-action {
    text-align: right;
  }

  .mdl-list__item-secondary-action li {
      list-style: none;
  }

  .amount{
    font-weight: bold;
  }
</style>