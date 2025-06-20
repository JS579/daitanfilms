import axios from "axios"

const api = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3"
})

function getMostRecent(){

    return api.get(`/playlistItems?part=id%2Csnippet%2CcontentDetails&maxResults=1&playlistId=UULFmlRTX97QoFtfNfALdeNsUw&key=${APIKEY}`).then(({ data }) => {
       console.log(data.items[0].snippet.resourceId.videoId)
        return data.items[0].snippet.resourceId.videoId
}
)}

export { getMostRecent }
