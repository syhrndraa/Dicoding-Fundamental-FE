class DataGlobal {
    static searchGlobal() {
        return fetch(`https://covid19.mathdro.id/api`)
            .then(response =>{
                return response.json()
            })
            .then(result => {
                if(result) {
                    return Promise.resolve(result);
                } else {
                    return Promise.reject(`api is not found`)
                }
            })
    }
}

export default DataGlobal;