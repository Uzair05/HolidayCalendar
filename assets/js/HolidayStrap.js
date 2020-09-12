/*
window.onload = () => {

    const APIKey = "a7d5372a52544e0f9dd96c904b9a821d";
    
    
    var box = document.getElementById("holidayBOX");



    var location = "pk" //The country's two letter ISO 3166-1 alpha-2 code
                        //https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    const gregorian = {
        0: 31,
        1: 28,
        2: 31,
        3: 30,
        4: 31,
        5: 30,
        6: 31,
        7: 31,
        8: 30,
        9: 31,
        10: 30,
        11: 31
    }

    var titleBarHead = document.createElement("H"); 
    titleBarHead = "Holidays This Month";
    var titleBarLegend = document.createElement("P");
    titleBarLegend.innerText = "For Location: " + location

    var titleBar = document.createElement("div");
    titleBar.append(titleBarHead);
    titleBar.append(titleBarLegend);

    box.parentNode.appendChild(titleBar);
    


    //box.style.visibility = "hidden"

}
*/

$()

 