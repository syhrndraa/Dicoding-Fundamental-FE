class GlobalList extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    set globalList(item){
        this._globalItem = item;
        this.render();
    }

    render(){
        const dateUpdated = new Date(this._globalItem.lastUpdate);
        const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        this.innerHTML = '';
        this.innerHTML=`
            <a href="https://covid19.mathdro.id/api" style="text-decoration:none; color:black" target="_blank">
                <div class="d-grid gap-2 p-3">
                        <button class="btn btn-light">
                            
                            Go to Web API
                        </button>
                </div>
            </a>
            <div class="row justify-content-evenly pt-4">
                <div class="col-5">
                    <div class="card mb-3 death-info" style="max-width: 18rem; text-align: center;">
                        <div class="card-header">DEATHS</div>
                        <div class="card-body">
                        <h5 class="card-title" style="font-size: 15px;">
                            ${this._globalItem.deaths.value}
                        </h5>
                        </div>
                    </div>
                </div>
                
                <div class="col-5">
                    <div class="card conf-info mb-3" style="max-width: 18rem; text-align: center;">
                        <div class="card-header">CONFIRMED</div>   
                        <div class="card-body">
                            <h5 class="card-title" style="font-size: 15px;">
                                ${this._globalItem.confirmed.value}
                            </h5>
                        </div>
                    </div>
                </div>
                <p class="card-text lastUpd">Last updated : ${dateUpdated.getHours()}:${dateUpdated.getMinutes()} <br>${dateUpdated.getDate()} ${monthNames[dateUpdated.getMonth()]} 
                ${dateUpdated.getFullYear()}</p>
            </div>
        `;
    }
}

customElements.define("global-list", GlobalList);