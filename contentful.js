const spaceId = 'tzia1awehbc0'
const environmentId = 'master'
const accessToken = 'FoWIKG-Etr9Mtzd7k18unNII-6kdFfIu6wXiutBlVCk'

const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&order=fields.order&content_type=event`

const sectionTag = document.querySelector("section.grid")

const grabData = function (){
  return fetch(url)
  .then(response =>response.json())
  .then(data => {
	//store the assets somewhere
    const assets = data.includes.Asset

    //turn our contentful data into something useful
  	//I just want to return items
    //take each individual item and map each item to be just the fields
    return data.items.map( item => {
      let imageUrl = "image1.jpg"

      const imageId = item.fields.image.sys.id

      const imageData = assets.find(asset => {
        return asset.sys.id == imageId
      })

      if (imageData) {
        imageUrl = imageData.fields.file.url
      }

      if (imageUrl.startsWith('//')) {
  imageUrl = imageUrl.split('//').join('https://')
}
      item.fields.image = imageUrl
      return item.fields
    })
  })
}

//run this grabData function on load
grabData().then(data =>{
  //do something with the returned data
  console.log(data)

  //remove loader
  sectionTag.innerHTML = ""

  //in the section tag we want to add something
  //to the end of each section
  data.forEach(item => {
     sectionTag.innerHTML = sectionTag.innerHTML + `
<div class="item">
<img src="${item.image}"/>
<div class="title">
<h2 class="workshops">${item.title}</h2>
<p>${item.date}</p>
</div>
<p>${item.description}</p>
<p class="signup">${item.signup}</p>
</div>
`
  })
})
