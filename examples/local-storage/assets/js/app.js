import {api} from '../js/modules/api.js'
import {config} from '../js/modules/config.js'
import {location} from '../js/modules/location.js'
import {store} from '../js/modules/store.js'
import {render} from '../js/modules/render.js'
import {time} from '../js/modules/time.js'

const app = {
    init:async()=>{
        console.log('🚀 starting app')
        const coords = await location.get()
        if(coords.lat && !store.get('weather-data')){
            store.set('weather-coords',coords)
            store.set('weather-data',await api.get(config.cors + config.base + config.key + `/${coords.lat},${coords.long}`))
            store.modify('weather-coords','time',new Date)
        }else if(time.expired(store.get('weather-coords')['time'],{minutes:1})){
            store.set('weather-data',await api.get(config.cors + config.base + config.key + `/${coords.lat},${coords.long}`))
            store.modify('weather-coords','time',new Date)
        }
        store.get('weather-data') && render.tagline(store.get('weather-data'))
    }
}

app.init()