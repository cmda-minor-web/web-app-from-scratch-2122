const api = {
    get(url,headers = {}) {
        console.log('📊 Fetching data')
        return new Promise((resolve,reject)=>[
            fetch(url,headers)
                .then(res => res.json())
                .then(response => {
                    console.log('📊 Fetched data')
                    resolve(response)
                })
                .catch(err => 
                    Promise.reject(new Error('📊 Fetching failed'))
                    .then(resolve(err))
                )
        ])
    }
}

export {api}