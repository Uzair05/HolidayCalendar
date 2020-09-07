window.onload = ()=>{
    
    const APIKey = "c5c81d1d2b51807c753d34b4ab9227db";

    var box = document.getElementById("weatherBOX");
    

    fetch("https://api.openweathermap.org/data/2.5/forecast?appid=c5c81d1d2b51807c753d34b4ab9227db&units=metric&lang=en&q=" + "Lahore"/*cityName*/)
    .then(response => response.json())
    .then((data)=>{
        if (data.cod = "200"){
            console.table(data.city)
        }
    })

    //box.style.visibility = "hidden"

}