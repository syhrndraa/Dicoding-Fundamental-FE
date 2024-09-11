import img from "../../assets/fighting_virus.png";
class HeroesCustom extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="container-fluid col-xxl-8 px-2 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5 px-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src="${img}" class="d-block mx-lg-auto img-fluid" alt="Fighting Virus">
                    </div>
                    <div class="col-lg-6">  
                        <h1 class="display-5 fw-bold lh-1 mb-3">News Portal About Coronaviruses in Southeast Asia</h1>
                        <p class="lead">
                        &emsp; &emsp; This news portal contains the number of cases recorded in the data on 
                        covid19.mathdro.id and information about virus prevention. What is Coronaviruses?
                        Coronaviruses are a group of related RNA viruses that cause diseases in mammals and birds. 
                        In humans and birds, they cause respiratory tract infections that can range from mild to lethal. 
                        Mild illnesses in humans include some cases of the common cold (which is also caused by other 
                        viruses, predominantly rhinoviruses), while more lethal varieties can cause SARS, MERS and 
                        COVID-19, which is causing an ongoing pandemic. In cows and pigs they cause diarrhea, while 
                        in mice they cause hepatitis and encephalomyelitis.
                        </p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href="#checkCountry">
                                <button type="button" class="btn btn-lg px-4 me-md-2" id="checkBtn">
                                    Check your Country
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('heroes-custom', HeroesCustom);