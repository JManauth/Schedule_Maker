//make display day and time uptop
function renderClock(){
$("#currentDay").text(moment().format("[Today is: ] dddd, MMMM Do YYYY, h:mm a"));
};
renderClock();
setInterval(renderClock, 1000);
//loop to create all time blocks
function timeBlocks(){
    for (i = 0; i < 24; i++){
        var time = document.createElement("div");
        var txt = document.createElement("textarea");
        var button = document.createElement("button");
        var hour = moment("09:00:00", "hh:mm:ss a").add( i , 'hours');
        console.log(hour.format("h a"));
        console.log(moment().format('h a'));
        
        $(time).attr("class", "col-12 col-xl-1 hour");
        $(txt).attr("class", "col-12 col-xl-10");
        $(button).attr("class", "col-12 col-xl-1 saveBtn");
        $(".row").append(time);
        $(".row").append(txt);
        $(".row").append(button);
        $(time).text(hour.format("h a"));

       if(hour.format("h a") === moment().format("h a")){
            $(txt).attr('class', 'col-12 col-xl-10 present');
        } else if (hour.format("h a") < moment().format("h a")){
            $(txt).attr('class', 'col-12 col-xl-10 past');
        } else if (hour.format("h a") > moment().format("h a")) {
            $(txt).attr('class', 'col-12 col-xl-10 future');
        } 
    };
}


timeBlocks();
