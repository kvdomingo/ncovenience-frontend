import axios from "axios";

const { NODE_ENV } = process.env;

const baseURL = NODE_ENV === "development" ? "http://localhost:8000/api/" : "https://ncovenience.herokuapp.com/";

const api = axios.create({ baseURL, timeout: 30000 });

export default {
  data: {
    cases() {
      return api.get("cases");
    },
    numbers() {
      return api.get("numbers");
    },
    counts() {
      return api.get("counts");
    },
    timePlot() {
      return api.get("time-plot");
    },
    worldPlot() {
      return api.get("world-plot");
    },
    deltaPlot() {
      return api.get("delta-plot");
    },
    agePlot() {
      return api.get("age-plot");
    },
    metroPlot() {
      return api.get("metro-plot");
    },
  },
};
