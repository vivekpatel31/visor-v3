import { defineComponent } from "vue";
import Visor from "./components/Visor";

const VisorV3 = defineComponent({
  name: "VisorV3",
  data() {
    return {};
  },
  methods: {},
  render() {
    return (
      <div id="app">
        <main>
          Visor V3 App
        </main>
        <Visor />
      </div>
    );
  }
});

export default VisorV3;