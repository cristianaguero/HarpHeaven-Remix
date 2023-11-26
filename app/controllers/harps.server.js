export async function getHarps(req, res) {
    const response = await fetch(`${process.env.API_URL}/harps?populate=image`)
    const result = await response.json()
    console.log(result)
    return result;
}