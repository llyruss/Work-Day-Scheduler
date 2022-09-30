//Add current date
let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

// highlight timeblock by past, present, future
let currentHour = parseInt(moment().format("H"))
let pageTime = $(".task")

for (i = 0; i < pageTime.length; i++) {
    if (currentHour == pageTime[i].getAttribute("value")) {
        $(pageTime[i]).removeClass("future")
        $(pageTime[i]).removeClass("past")
        $(pageTime[i]).addClass("present")
    }
    else if (currentHour < pageTime[i].getAttribute("value")) {
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

if (localStorage.getItem("taskData") === null) {
    let taskData = [
        {
            "9": "",
            "10": "",
            "11": "",
            "12": "",
            "13": "",
            "14": "",
            "15": "",
            "16": "",
            "17": "",
        }
    ];
    localStorage.setItem("taskData", JSON.stringify(taskData));
}

let saveButton = $(".saveBtn")

for (i = 0; i < saveButton.length; i++) {
    $(saveButton[i].firstChild).on("click", function (e) {
        //DOM traversal!
        //retrieve text writing in scheduler corresponding to the click event
        let textArea = e.target.parentElement.parentElement.childNodes[3].childNodes[1].value
       //retrieve the hour corresponding to the click event
        let textHour = e.target.parentElement.parentElement.childNodes[3].getAttribute('value')
        //retrieve local storage data
        taskData = JSON.parse(localStorage.getItem("taskData"));
        //updating the taskData object value for the selected key(hours)
        taskData[0][textHour] = textArea
        //update local storage to include the text written in the scheduler
        localStorage.setItem("taskData", JSON.stringify(taskData))
    })
}

//send from local storage back to the page
    //getting the data saved in local storage and turning it back into and object
let storeTaskData = JSON.parse(localStorage.getItem("taskData"))
    //setting a variable array for the elements where the text data is written
let textAreaArray = $(".description")

// for each text area element, set the text content to its corresponding hour value from local storage
for (i=0; i<textAreaArray.length; i++){
    let textAreaHour = textAreaArray[i].parentElement.getAttribute("value")
    textAreaArray[i].textContent = storeTaskData[0][textAreaHour]
}





