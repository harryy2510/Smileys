declare namespace globalThis {
    let memoryCache: Map<string, any>
}

globalThis.memoryCache = new Map()
const getCacheKey = (url: string, method: string = 'POST', data: Record<string, any> = {}) =>
    `${url}-${method}-${JSON.stringify(data)}`.toLowerCase()

type RequestOptions = {
    method?: string
    data?: Record<string, any>
    cache?: boolean
}

const request = async (
    url: string,
    { method = 'POST', cache = false, data = {} }: RequestOptions = {}
) => {
    const cacheKey = getCacheKey(url, method, data)
    if (cache && globalThis.memoryCache.has(cacheKey)) {
        return globalThis.memoryCache.get(cacheKey)
    }
    const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ campaignUuid: process.env.REACT_APP_CAMPAIGN_UUID, data })
    }).then((response) => response.json())
    cache && globalThis.memoryCache.set(cacheKey, response)
    return response
}

export default request
