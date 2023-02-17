import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* Set up using Vue 3 */

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */

library.add(fas);

createApp(App)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
