window.onload = ()=>{
    
    const APIKey = "c5c81d1d2b51807c753d34b4ab9227db";

    var box = document.getElementById("weatherBOX");
    

    fetch("https://api.openweathermap.org/data/2.5/forecast?appid=c5c81d1d2b51807c753d34b4ab9227db&units=metric&lang=en&q=" + "Hong%20Kong"/*cityName*/)
    .then(response => response.json())
    .then((data)=>{
        if (data.cod = "200"){
            data = data.list;
            
            console.table(data)
            
        }
    })

    //box.style.visibility = "hidden"

}