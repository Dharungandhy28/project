const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.querySelector("audio");

const button = document.getElementById("search-btn");

button.addEventListener("click", ()=>{
    let inpword = document.getElementById("inp-word").value.trim();
    if(inpword){

    
     fetch(`${url}${inpword}`)
    .then((response)=> response.json()).then((data)=>{
        console.log(data);
        
      
        result.innerHTML = `
        <div class="word">
                <h2>${inpword}</h2>
                <button onclick="playsound()">
                    <i class="fa-solid fa-play fa-2x"></i>
                </button>
            </div>
            <div class="details">
                <p>
                ${data[0].meanings[0].partOfSpeech}
                </p>
                
              
                <p>/${data[0].phonetic||data[0].phonetics[1].text}/</p>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
                ${data[0].meanings[0].definitions[0].example ||""}
            </p>`;
            // console.log(sound.src, `${data[0].phonetics[0].audio}`);
            
            sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
   
    }).catch(error=>{
        // console.log(error.message)
        result.innerHTML = `<h3>No Words Found</h3>`
    });
}
else{
    alert("Please Enter a Word to search")
}
});
 function playsound(){
    sound.play();
}
