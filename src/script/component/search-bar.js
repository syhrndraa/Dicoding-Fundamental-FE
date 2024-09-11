class SearchBar extends HTMLElement {

    connectedCallback(){
        this.render();
    }
    
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }


    get value() {
        return this.querySelector("#inputGroupSelect04").value;
    }

    render() {
        this.innerHTML = `
            <div class="input-group p-3">
                <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                    <option value="IDN" selected>Indonesia</option>
                    <option value="MYS">Malaysia</option>
                    <option value="SGP">Singapore</option>
                    <option value="BRN">Brunei</option>
                    <option value="THA">Thailand</option>
                    <option value="LAO">Laos</option>
                    <option value="VNM">Vietnam</option>
                </select>
                <button class="btn btn-light" type="submit" id="searchButtonElement">Check</button>
            </div>
        `;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);