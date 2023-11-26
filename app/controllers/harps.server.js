export async function getHarps() {
    const response = await fetch(`${process.env.API_URL}/harps?populate=image`)
    const result = await response.json()

    return result;
}

export async function getHarp(url) {
    const response = await fetch(`${process.env.API_URL}/harps?filters[url]=${url}&populate=image`)
    const result = await response.json()

    return result;
}
