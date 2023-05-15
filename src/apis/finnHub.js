import axios from "axios"

const TOKEN = "cgmr51hr01qhveusr96gcgmr51hr01qhveusr970"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
  params: {
    token: TOKEN
  }
})