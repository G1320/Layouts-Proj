
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'


const STORAGE_KEY = 'station'

export const stationService = {
    query,
    getById,
    save,
    remove,
    getEmptyStation,
    addStationMsg
}
window.cs = stationService


async function query(filterBy = { txt: '', listencount: 0 }) {
    return httpService.get(STORAGE_KEY, filterBy)

    // var stations = await storageService.query(STORAGE_KEY)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     stations = stations.filter(station => regex.test(station.title) || regex.test(station.description))
    // }
    // if (filterBy.listencount) {
    //     stations = stations.filter(station => station.listencount <= filterBy.listencount)
    // }
    // return stations

}
function getById(stationId) {
    // return storageService.get(STORAGE_KEY, stationId)
    return httpService.get(`station/${stationId}`)
}

async function remove(stationId) {
    // await storageService.remove(STORAGE_KEY, stationId)
    return httpService.delete(`station/${stationId}`)
}
async function save(station) {
    var savedStation
    if (station._id) {
        // savedStation = await storageService.put(STORAGE_KEY, station)
        savedStation = await httpService.put(`station/${station._id}`, station)

    } else {
        // Later, owner is set by the backend
        station.owner = userService.getLoggedinUser()
        // savedStation = await storageService.post(STORAGE_KEY, station)
        savedStation = await httpService.post('station', station)
    }
    return savedStation
}

async function addStationMsg(stationId, txt) {
    const savedMsg = await httpService.post(`station/${stationId}/msg`, {txt})
    return savedMsg
}


function getEmptyStation() {
    return {
        title: 'Susita-' + (Date.now() % 1000),
        listencount: utilService.getRandomIntInclusive(1000, 9000),
    }
}





