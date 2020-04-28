<script>
import { Radar } from 'vue-chartjs';

export default {
  extends: Radar,
  props: {
    data: Object,
    options: Object
  },
  watch: {
    data: function() {
      this.drawChart();
    }
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      if (this.data) {
        this.renderChart(this.data, this.options);
      }
    }
  }
};
</script>
