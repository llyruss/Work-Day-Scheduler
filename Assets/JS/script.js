//Add current date
let today= moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

// highlight timeblock by past, present, future
let currentHour=parseInt(moment().format("H"))
let pageTime = $(".task")

for (i=0; i<pageTime.length; i++){
 if(currentHour==pageTime[i].getAttribute("value")){
    $(pageTime[i]).removeClass("future")
    $(pageTime[i]).removeClass("past")
    $(pageTime[i]).addClass("present")    
 }
 else if (currentHour < pageTime[i].getAttribute("value")){
    $(pageTime[i]).removeClass("past")
    $(pageTime[i]).removeClass("present") 
    $(pageTime[i]).addClass("future")
 }
else {
    $(pageTime[i]).removeClass("present")
    $(pageTime[i]).removeClass("future")
    $(pageTime[i]).addClass("past")
}
}
//save text entries to localStorage 
