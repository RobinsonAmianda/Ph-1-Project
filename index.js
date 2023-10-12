     document.addEventListener("DOMContentLoaded",() => {
      fetch("http://localhost:3000/games ")
      .then(res => res.json())
      .then(data => {
        const cardContainer = document.getElementById(`card`)
        data.forEach((game)=>{
            let infoDiv = document.createElement(`div`)
            let button = document.createElement(`button`)
            let button1 = document.createElement(`button`)
            button.textContent = `Buy`
            button1.textContent = `Delete`
            button1.className = `delete`
            button.className = `buy`
            infoDiv.className = `infoDiv`
            infoDiv.innerHTML = `
            <img src = "${game.Poster}" id = "img"/>
            <h3 id = "name">Name:${game.name}</h3>
            <h3 id = "developers">Developers:${game.Developers}</h3>
            <h3 id = "Released_date">Released_date:${game.Released_date}</h3>
            <h3 id = "price">Price:${game.Price}</h3>
            <h3 id = "description">Description:${game.Description}</h3>
            
            <input type="text" placeholder="comment" id = "input"> 
           
            `
            infoDiv.appendChild(button)
            infoDiv.appendChild(button1)
            cardContainer.appendChild(infoDiv)
            button1.addEventListener(`click`,()=>{
              infoDiv.remove()
            })
            button.addEventListener(`click`,()=>{
              alert(`Thank you!`)
              alert(`The product has been added to your cart.`)
              return
            }) 
        })
          
  
      })
       let form = document.getElementById(`form`)
       console.log(form)
      form.addEventListener(`submit`,(e) => {
        e.preventDefault()
         let nameValue = e.target.name.value
        let DevelopersValue = e.target.Developers.value
        let Released_dateValue = e.target.Released_date.value
        let PriceValue = e.target.Price.value
        let DescriptionValue = e.target.Description.value
        let game = {
          name:nameValue,
          Developers:DevelopersValue,
          Released_date:Released_dateValue,
          Price:PriceValue,
          Description:DescriptionValue 
        }
        let gameName = e.target.Name.value;
        fetch("   http://localhost:3000/games",{
          method:"POST",
          headers:{
            "Content-Type" : "application/json"
          },
          body:JSON.stringify(game)
        })
        .then(res => res.json())
        .then(data => {
          let name =document.createElement(`p`)
          name.textContent = data.gameName
        } 
     )})  
      
     })