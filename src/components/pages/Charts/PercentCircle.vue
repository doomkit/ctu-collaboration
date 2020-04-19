<template>
  <div class="canvas-holder" style="width:100%">
    <canvas :id="_uid"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  props: {
    value: Number
  },
  watch: {
    value: function() {
      console.log(this.value);
      this.drawChart(this.value);
    }
  },
  methods: {
    drawChart(value) {
      const ctx = document.getElementById(this._uid).getContext('2d');
      const config = {
        type: 'radialGauge',
        data: {
          labels: ['Metrics'],
          datasets: [
            {
              data: [value],
              backgroundColor: ['#1D84B5'],
              borderWidth: 0,
              label: 'Score'
            }
          ]
        },
        options: {
          responsive: true,
          aspectRatio: 1.2,
          legend: {},
          title: {
            display: false
          },
          centerPercentage: 75,
          centerArea: {
            fontSize: '38px',
            fontColor: '#2c3e50',
            fontFamily: 'Avenir, Helvetica, Arial, sans-serif',
            text: `${value} %`
          }
        }
      };
      window.myRadialGauge = new Chart(ctx, config);
    }
  }
};
</script>

<style lang="css" scoped>
.canvas-holder {
  max-width: 400px;
  margin: 0 auto;
}
</style>
