import Chart from "chart.js";
import { initGlobalOptions } from "@/components/globals/Charts/config";
export default {
  mounted() {
    initGlobalOptions(Chart);
  }
};
