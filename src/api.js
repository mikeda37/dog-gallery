export async function fetchImageUrls(breed) {
  breed = breed.replace(/-/g, '/')
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/12`)
  const data = await response.json()
  return data.message
}

export async function fetchImage(url) {
  const response = await fetch(url)
  const blob = await response.blob()
  const localUrl = (window.URL || window.webkitURL).createObjectURL(blob)
  return localUrl
}
