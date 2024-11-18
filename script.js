

const body = document.body
const  SetButton =  document.getElementById("setButton")
const hours = document.getElementById("hours") 
 const minutes = document.getElementById("minutes") 
 const seconds = document.getElementById("seconds")
 const maindiv = document.getElementById("mainDiv1")

 
 const pera = document.createElement("p")
 pera.innerText = "You have no timers currently !"
 maindiv.append(pera)
 pera.classList.add("pera")
 



SetButton.addEventListener("click", () => {

    const hoursValue = parseInt(hours.textContent);  
    const minutesValue = parseInt(minutes.textContent);  
    const secondsValue = parseInt(seconds.textContent); 

    if (hoursValue === 0 && minutesValue === 0 && secondsValue === 0) {
        alert("Please Enter Values Greater Than 0");
        return; 
    }


    const newDiv = document.createElement("div")
    newDiv.classList.add("newDIVBorder")
    // console.log(newDiv)
    maindiv.append(newDiv)

    const span = document.createElement("span")
    span.innerText = " Time Left : "
    span.classList.add("spanP")
    newDiv.append(span)


    const DeleteButton =  document.createElement("button")
    DeleteButton.innerText="Delete"
    DeleteButton.classList.add("delete")
   
    let totalSeconds = (hoursValue * 3600) + (minutesValue * 60) + secondsValue;

  

    const timeElement = document.createElement('div');
    timeElement.classList.add("spanP")
    newDiv.append(timeElement);

  
    const interval = setInterval(() => {
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;
        const Timeval = `${hours}:${minutes}:${seconds}`;
      
        timeElement.textContent = Timeval;  
   
       
        if (totalSeconds <= 0) {
            clearInterval(interval);
            timeElement.textContent = "Time's up!";
            span.remove()
            newDiv.style.backgroundColor=" #F0F757";
            DeleteButton.style.backgroundColor="rgb(52,52,74)"
            DeleteButton.style.color="white"
            span.style.fontSize="2rem"
            span.style.color="rgb(52,52,74)"
            timeElement.style.color="black"
            const audio = document.createElement("audio");
            audio.src = "./ireland-eas-alarm-264351.mp3";
            audio.controls = true;
            audio.autoplay = true;
      

            
        } else {
            totalSeconds--;  
        }  
      
    },1000);  

    newDiv.append(DeleteButton)
    DeleteButton.addEventListener("click",()=>{

        
        newDiv.parentNode.removeChild(newDiv);
        audio.controls = false;
        audio.autoplay=false;
    })

    
    pera.remove()

    hours.innerText="00"
    minutes.innerText="00"
    seconds.innerText="00"


});



