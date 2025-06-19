import axios from "axios"

const api = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3"
})

function getMostRecent(){

    return api.get("/search?key=AIzaSyCh7ZL80o3TltNl1VWB-WpRehV5GMJHqwo&part=snippet&channelId=UCoG5ya-sMXNMkqkIz1sZ_Lw&order=date&maxResults=1").then(({ data }) => {
       console.log(data.items[0].id.videoId)
        return data.items[0].id.videoId
}
)}

export { getMostRecent }