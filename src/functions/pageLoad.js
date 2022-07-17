import content from "../assets/content";
import sidebar from "../assets/sidebar";

const pageLoad = function() {
    document.body.appendChild(sidebar());
    document.body.appendChild(content());
}

export default pageLoad();