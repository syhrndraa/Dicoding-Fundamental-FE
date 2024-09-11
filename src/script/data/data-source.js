class DataSource {
    static searchCountry(keyword) {
        return fetch(`https://covid19.mathdro.id/api/countries/${keyword}`)
            .then(response =>{
                return response.json()
            })
            .then(result => {
                if(result) {
                    return Promise.resolve(result);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default DataSource;
