import header from "../assets/header";
import content from "../assets/content";
import footer from "../assets/footer";

/*Pulls all of our Components made in JavaScript and appends them to the page*/
const pageLoad = function() {
    document.body.append(header(), content(), footer());
}

export default pageLoad();