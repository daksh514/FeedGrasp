import axios from "axios";

export const LEMON_SQEEZY_ENDPOINT = 'https://api.lemonsqueezy.com/v1/'

export const lemonSqeezyApiInstance = axios.create({
    baseURL: LEMON_SQEEZY_ENDPOINT,
    headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        Authorization: `Bearer ${process.env.LEMON_SQEEZY_API_KEY}`
    }
})