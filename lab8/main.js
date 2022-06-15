const link =  "https://usersdogs.dmytrominochkin.cloud/dogs";
const baseLink = "https://usersdogs.dmytrominochkin.cloud"
var dogs = []
function test() {
    console.log("WEWEEE")
}

function Init() {
    loadData$()
}

function loadData$() {
    fetch(link)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      dogs = data
    }).then(() => {
        let el = document.getElementById("main")
        console.log(el)
        for(let i = 0; i < dogs.length; i++) {
            let div = document.createElement("div")
            div.className = "container";
            div.onclick = () => {
                document.getElementById("modal").classList.remove("hide")
                document.getElementById("modal").classList.add("show")
                document.getElementById("close").onclick = () => {
                    document.getElementById("modal").classList.remove("show")
                    document.getElementById("modal").classList.add("hide")
                    console.log("TEST")                
                }
            }
            div.innerHTML = `
                <img src="${baseLink + dogs[i].dogImage}" />
                <div class="text">
                    <h3>${dogs[i].title}</h3>
                    <span>${capitalizeFirstLetter(dogs[i].sex.toLowerCase())}</span>
                </div>
            `
            el.appendChild(div)    
        }
    });
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function close() {
}