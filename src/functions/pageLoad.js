import content from "../assets/content";
import header from "../assets/loadHeader";

const pageLoad = function() {
    document.body.appendChild(content());
    document.querySelector(".content").appendChild(header());
}

export default pageLoad();