import mask from "../../assets/mask.jpg";
import wash from "../../assets/wash.jpg";
import exercise from "../../assets/exercise.jpg";
import cleanpets from "../../assets/clean_pets.jpg";
class PreventionVirus extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
          <div class="card-group mt-lg-3">
            <div class="card prev-virus">
              <img src="${mask}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Wear Face Mask and Face Shield</h5>
              </div>
            </div>

            <div class="card prev-virus">
              <img src="${wash}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Wash Your Hands</h5>
              </div>
            </div>

            <div class="card prev-virus">
              <img src="${exercise}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Exercise</h5>
              </div>
            </div>

            <div class="card prev-virus">
              <img src="${cleanpets}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Clean Pets</h5>
              </div>
            </div>
          </div>
        `;
    }
}

customElements.define('prevention-virus', PreventionVirus);