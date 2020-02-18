<script>
import { Radar } from 'vue-chartjs';

export default {
  extends: Radar,
  props: {
    data: Object,
    options: Object
  },
  mounted() {
    this.renderChart(this.data, this.options);
  }
};
</script>
