
async function fetchProfileData() {
  const url = './assets/json/profile.json'
  const fetching = await fetch(url)
  return await fetching.json()
}
