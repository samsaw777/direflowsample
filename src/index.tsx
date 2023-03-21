import { DireflowComponent } from "direflow-component";
import App from "../src/direflow-components/example-direflow/App";

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: "example-direflow",
  },
  plugins: [
    {
      name: "font-loader",
      options: {
        google: {
          families: ["Advent Pro", "Noto Sans JP"],
        },
      },
    },
  ],
});
