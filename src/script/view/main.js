import "../component/search-bar.js";
import "../component/report-list.js";
import "../component/global-list.js";
import "../component/heroes-custom.js";
import "../component/prevention-virus.js";
import "../component/footer-custom.js";
import DataSource from "../data/data-source.js";
import DataGlobal from "../data/data-global.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const reportListElement = document.querySelector("report-list");
    const reportGlobalElement = document.querySelector("global-list")

    window.onload = async () => {
        try{
            const result = await DataSource.searchCountry("IDN");
            renderResult(result);
            const globalresult = await DataGlobal.searchGlobal();
            globalResult(globalresult);
        } catch{
            showMessage();
        }
    }

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchCountry(searchElement.value);
            renderResult(result);
        } catch{
            showMessage();
        }
    };

    const renderResult =  results => {
        reportListElement.reportList = results;
    };

    const globalResult = result => {
        reportGlobalElement.globalList = result;
    };

    const showMessage = (message = 'Periksa koneksi internet...') =>{
        alert(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;