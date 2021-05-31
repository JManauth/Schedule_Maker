//make display day and time uptop
function renderClock(){
$("#currentDay").text(moment().format("[Today is: ] dddd, MMMM Do YYYY, h:mm a"));
};
renderClock();
setInterval(renderClock, 1000);
//loop to create all time blocks
function timeBlocks(){
    for (i = 0; i < 9; i++){
        var time = document.createElement("div");
        var txt = document.createElement("textarea");
        var button = document.createElement("button");
        $(time).attr("class", "col-12 col-xl-1 hour");
        $(txt).attr("class", "col-12 col-xl-10");
        $(button).attr("class", "col-12 col-xl-1 saveBtn");
        $(".row").append(time);
        $(".row").append(txt);
        $(".row").append(button);
    }
}

timeBlocks();
