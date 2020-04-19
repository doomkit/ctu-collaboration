<template>
  <div class="canvas-holder" style="width:100%">
    <canvas :id="_uid"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  props: {
    data: Object,
    options: Object
  },
  mounted() {
    const ctx = document.getElementById(this._uid).getContext('2d');
    const value = this.randomScalingFactor();
    // var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    // gradientStroke.addColorStop(0, '#80b6f4');
    // gradientStroke.addColorStop(1, '#f49080');
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
  },
  methods: {
    randomScalingFactor() {
      return Math.round(Math.random() * 100);
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
