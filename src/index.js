import pageLoad from "./functions/pageLoad";
import { buttonHandling } from "./functions/buttons";

import "./styles/body.scss";
import "./styles/header.scss";
import "./styles/content.scss";
import "./styles/footer.scss";

/*Run our PageLoad Function, creating all of our initial assets and appending them to the Body*/
pageLoad;

/*Now our elements are created in our DOM, apply our event handling to them. */
buttonHandling();



