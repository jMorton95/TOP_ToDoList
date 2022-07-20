import header from "../assets/header";
import content from "../assets/content";
import footer from "../assets/footer";

const pageLoad = function() {
    document.body.append(header(), content(), footer());
}

export default pageLoad();