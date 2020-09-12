
const API_Key = "f76eeeefcd30433ab622d7a0a888be24";
const local = "hk"

$("document").ready(()=>{
    $("#holidayBOX").append(
        $("<div></div>").attr("id","titlebar").append(
            $("<h2></h2>").text("Holidays Calendar").attr("id","heading"),
            $("<p></p>").text("Public Holidays in your location").attr("id","heading-legend")
        ),
        $("<div></div>").attr({"id":"calendarBox", "class":"calendarBox"}).append(
            
            $("<div></div>").attr({"class":"calendarDay dateBox", "id":"sundayBox"}).text("Sunday"),
            $("<div></div>").attr({"class":"calendarDay dateBox", "id":"mondayBox"}).text("Monday"),
            $("<div></div>").attr({"class":"calendarDay dateBox", "id":"tuesdayBox"}).text("Tuesday"),
            $("<div></div>").attr({"class":"calendarDay dateBox", "id":"wednesdayBox"}).text("Wednesday"),
            $("<div></div>").attr({"class":"calendarDay dateBox", "id":"thursdayBox"}).text("Thursday"),
            $("<div></div>").attr({"class":"calendarDay dateBox", "id":"fridayBox"}).text("Friday"),
            $("<div></div>").attr({"class":"calendarDay dateBox", "id":"saturdayBox"}).text("Saturday"),

        )
    )

    m = new Date().getMonth();
    y = new Date().getFullYear();
    var firstDay = new Date(y, m, 1);
    var lastDay = new Date(y, m + 1, 0);
    
    var counter = 1;
    for (var i=0; i<lastDay.getDate()+firstDay.getDay(); i++){
        if (i < firstDay.getDay()){
            $("#calendarBox").append($("<div></div>").attr({"class":"calendarDay"}));
        }else{
            if (counter<10){
                $("#calendarBox").append($("<div></div>").attr({"class":"calendarDay","id":"tareekh_0"+counter}).append(
                    $("<p></p>").text(counter)
                ));
                counter += 1;
            }else{
                $("#calendarBox").append($("<div></div>").attr({"class":"calendarDay","id":"tareekh_"+counter}).append(
                    $("<p></p>").text(counter)
                ));
                counter += 1;
            }
        }
    }
    counter = null;





    var apiM = m+1;


    for (var i = 1; i <= lastDay.getDate(); i++){
        $.getJSON("https://holidays.abstractapi.com/v1/?api_key=" + API_Key + "&country=" + local + "&year=" + y + "&month=" + apiM + "&day=" + i, (data)=>{
            if (data.length > 0){

                var name = "#tareekh_" + data[0].date_day; 
                //console.table(data[0])
                //console.log(name)
                $(name).attr("class","calendarDay holidayEvent").append(
                    $("<p></p>").text(data[0].name)
                )
            }
        });
    }
    








});