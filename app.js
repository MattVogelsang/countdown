const countdown = () => {
    const endDate = new Date("September 4, 2023 00:00:00 ").getTime()
    const now = new Date().getTime()

    const difference = endDate - now
    const seconds = 1000
    const mintues = seconds * 60
    const hours = mintues * 60
    const days = hours * 24

    let timeDays = Math.floor(difference / days)
    let timeHours = Math.floor((difference % days) / hours)
    let timeMintues = Math.floor((difference % hours) / mintues)
    let timeSeconds = Math.floor((difference % mintues) / seconds)


    timeHours = timeHours < 10 ? "0" + timeHours : timeHours
    timeMintues = timeMintues < 10 ? "0" + timeMintues : timeMintues
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds


    document.getElementById('days').innerHTML = timeDays
    document.getElementById('hours').innerHTML = timeHours
    document.getElementById('mintues').innerHTML = timeMintues
    document.getElementById('seconds').innerHTML = timeSeconds

}

setInterval(countdown, 1000)