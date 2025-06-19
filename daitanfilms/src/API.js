import axios from "axios"

const api = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3"
})

function getMostRecent(){

    return api.get(`/search?channelId=UCmopeXHb16dHZHI6qRWWkXg&part=snippet&key=${APIKEY}&order=date&maxResults=1`).then(({ data }) => {
       console.log(data.items[0].id.videoId)
        return data.items[0].id.videoId
}
)}

export { getMostRecent }