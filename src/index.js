window.addEventListener("load",function(event){
    const dogImages = document.querySelector("#dog-image-container")
    const dogBreeds = document.querySelector("#dog-breeds")
    const breedDropdown = document.querySelector("#breed-dropdown")

    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            data.message.forEach(function(ele){
                dogImages.innerHTML += `
                <img style="height: 100px; width 100px" src="${ele}"><br>
                `
            })
        })
    
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            const breeds = Object.keys(data.message)
            breeds.forEach(function(breed){
                dogBreeds.innerHTML += `<li>${breed}</li>`
            })
            breedDropdown.addEventListener("change", function(event){
                dogBreeds.innerHTML = ""
                const letter = event.target.value
                breeds.forEach(function(breed){
                    if (breed.startsWith(letter)){
                        dogBreeds.innerHTML += `<li>${breed}</li>`
                    }
                })
            })
        })
    dogBreeds.addEventListener("click", function(event){
        let breed = event.target.closest("li")
        breed.style.color = "green"
    })  
})