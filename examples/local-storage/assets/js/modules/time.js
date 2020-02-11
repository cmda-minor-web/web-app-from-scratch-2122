const time = {
    expired(oldStamp,expiry) {
        const newStamp = Number(new Date().valueOf())
        oldStamp = Number(new Date(oldStamp).valueOf()) + (expiry.minutes * 60 * 60 * 1000)
        oldStamp < newStamp ? console.log('⏰ Expired') : console.log('⏰ Expiredn\'t')  
        return oldStamp < newStamp
    }
}

export {time}