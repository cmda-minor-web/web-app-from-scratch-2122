const location = {
    get() {
        console.log('🌍 Requesting location')
        return new Promise((resolve,reject) => {
            let pos
            navigator.geolocation.getCurrentPosition((position)=>{
              pos = {
                lat: position.coords.latitude,
                long: position.coords.longitude
              }
              console.log('🌍 Allowed location')
              resolve(pos)             
            },()=>{
                Promise.reject(new Error('🌍 Disallowed location')).then(resolve(false))
            })
        })
    }
}

export {location}
