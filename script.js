async function getSongs() {
  let a = await fetch("http://127.0.0.1:5500/songs/");
  let response = await a.text();
 

  let div= document.createElement("div")
  div.innerHTML=response
  let as=div.getElementsByTagName("a")
  songs=[]
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if(element.href.endsWith(".mp3")){
        songs.push(element.href.split("/songs/")[1].replaceAll("%20"," ").replaceAll(".mp3",""))
    }
  }
  return songs
}
async function main(){
    //get the list of all the songs
let songs= await getSongs()
console.log(songs)

//put them into ul>li
let songUL=document.querySelector(".yoursongs").getElementsByTagName("ul")[0]
for (const song of songs){
    songUL.innerHTML=songUL.innerHTML+ `<li> ${song} </li>`

}


//play the songs
var audio = new Audio(songs[0]);
// audio.play();

audio.addEventListener("loadeddata", () => {
    console.log(audio.duration,audio.currentSrc,audio.currentTime)
    // The duration variable now holds the duration (in seconds) of the audio clip
  });
}
main()

