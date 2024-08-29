import axios from "axios"

const API_KEY = process.env.REACT_APP_API_KEY


const nurseryApiClient = axios.create({
  baseURL: "https://app.famly.co/api",
  params: {
    accessToken: API_KEY
  },
})

export { nurseryApiClient }