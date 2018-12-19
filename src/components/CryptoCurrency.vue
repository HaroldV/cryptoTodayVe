<template>
    <div class="mdl-list__item mdl-shadow--2dp">
        <span class="mdl-list__item-primary-content">
            <img v-bind:src="img" width="50" v-bind:alt="name">
        </span>

        <div class="mdl-list__item-secondary-action">
            <ul>
                <li class="title">1 {{diminutive}}</li>
                <li class="amount">$ {{usd}}</li>
                <li class="amount">BsS {{bss}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'CryptoCurrency',
    props: {
      name: { type: String },
      img: { type: String },
      diminutive: { type: String },
      usd: { type: Number },
      bss: { type: String }
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

  .amount{
    font-weight: bold;
  }
</style>