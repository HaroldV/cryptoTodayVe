<template>
  <div>
    <h2>Previous prices</h2>
    <div id="first">
      <h2>Date: {{ previousCurrency.yesterday.DATE }}</h2>
      <p><label> 1 BTC:</label> {{ previousCurrency.yesterday.BTC }} </p>
      <p><label> 1 DGB:</label> {{ previousCurrency.yesterday.DGB }} </p>
      <p><label> 1 SC:</label> {{ previousCurrency.yesterday.SC }} </p>
      <p><label> 1 ETH:</label> {{ previousCurrency.fiveDays.ETH }} </p>
      <p><label> 1 LTC:</label> {{ previousCurrency.fiveDays.LTC }} </p>
      <p><label> 1 DASH:</label> {{ previousCurrency.fiveDays.DASH }} </p>
      <p><label> 1 XRP:</label> {{ previousCurrency.fiveDays.XRP }} </p>
    </div>
    <div id="second">
      <h2>Date: {{ previousCurrency.twoDays.DATE }}</h2>
      <p><label> 1 BTC:</label> {{ previousCurrency.twoDays.BTC }} </p>
      <p><label> 1 DGB:</label> {{ previousCurrency.twoDays.DGB }} </p>
      <p><label> 1 SC:</label> {{ previousCurrency.twoDays.SC }} </p>
      <p><label> 1 ETH:</label> {{ previousCurrency.fiveDays.ETH }} </p>
      <p><label> 1 LTC:</label> {{ previousCurrency.fiveDays.LTC }} </p>
      <p><label> 1 DASH:</label> {{ previousCurrency.fiveDays.DASH }} </p>
      <p><label> 1 XRP:</label> {{ previousCurrency.fiveDays.XRP }} </p>
    </div>
    <div id="third">
      <h2>Date: {{ previousCurrency.threeDays.DATE }}</h2>
      <p><label> 1 BTC:</label> {{ previousCurrency.threeDays.BTC }} </p>
      <p><label> 1 DGB:</label> {{ previousCurrency.threeDays.DGB }} </p>
      <p><label> 1 SC:</label> {{ previousCurrency.threeDays.SC }} </p>
      <p><label> 1 ETH:</label> {{ previousCurrency.fiveDays.ETH }} </p>
      <p><label> 1 LTC:</label> {{ previousCurrency.fiveDays.LTC }} </p>
      <p><label> 1 DASH:</label> {{ previousCurrency.fiveDays.DASH }} </p>
      <p><label> 1 XRP:</label> {{ previousCurrency.fiveDays.XRP }} </p>
    </div>
    <div id="fourth">
      <h2>Date: {{ previousCurrency.fourDays.DATE }}</h2>
      <p><label> 1 BTC:</label> {{ previousCurrency.fourDays.BTC }} </p>
      <p><label> 1 DGB:</label> {{ previousCurrency.fourDays.DGB }} </p>
      <p><label> 1 SC:</label> {{ previousCurrency.fourDays.SC }} </p>
      <p><label> 1 ETH:</label> {{ previousCurrency.fiveDays.ETH }} </p>
      <p><label> 1 LTC:</label> {{ previousCurrency.fiveDays.LTC }} </p>
      <p><label> 1 DASH:</label> {{ previousCurrency.fiveDays.DASH }} </p>
      <p><label> 1 XRP:</label> {{ previousCurrency.fiveDays.XRP }} </p>
    </div>
    <div id="fifth">
      <h2>Date: {{ previousCurrency.fiveDays.DATE }}</h2>
      <p><label> 1 BTC:</label> {{ previousCurrency.fiveDays.BTC }} </p>
      <p><label> 1 DGB:</label> {{ previousCurrency.fiveDays.DGB }} </p>
      <p><label> 1 SC:</label> {{ previousCurrency.fiveDays.SC }} </p>
      <p><label> 1 ETH:</label> {{ previousCurrency.fiveDays.ETH }} </p>
      <p><label> 1 LTC:</label> {{ previousCurrency.fiveDays.LTC }} </p>
      <p><label> 1 DASH:</label> {{ previousCurrency.fiveDays.DASH }} </p>
      <p><label> 1 XRP:</label> {{ previousCurrency.fiveDays.XRP }} </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Previous',
    props: {
      previousCurrency: { type: Object }
    },
    data () { return {} }
  }
</script>

<style scoped>
  #first, #second, #third, #fourth, #fifth {
    border: 1px solid #F5CE00;
    padding: 2em 0;
    max-width: 90%;
    margin: 5px auto;
  }

  #first p, #second p, #third p, #fourth p, #fifth p {
    display: inline-block;
    padding: 0 1.5em;
    font-size: 1.5rem;
  }

  h2 { font-size: 1.5em; }
</style>