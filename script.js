function redirect(userSearch){
    window.location.href = `https://google.com/search?q=${userSearch}`;
}

function userSearch(){
    let userSearch = document.getElementById("barSearch").value;
    redirect(userSearch)
}

document.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        userSearch();
    }
})

const searchButton = document.getElementById("searchButton");
const lucyButton = document.getElementById("lucyButton");
searchButton.onclick = userSearch
lucyButton.onclick = userSearch