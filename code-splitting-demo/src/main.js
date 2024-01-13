import { moduleA } from "./moduleA";

moduleA();

// Dynamically import moduleB when needed
document.getElementById("loadModuleBButton").addEventListener("click", () => {
  import(/* webpackChunkName: "moduleB" */ "./moduleB").then(({ moduleB }) =>
    moduleB()
  );
});
