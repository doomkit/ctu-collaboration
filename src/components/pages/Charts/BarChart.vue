<script>
import { HorizontalBar } from 'vue-chartjs';

export default {
  extends: HorizontalBar,
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
