//make display day and time uptop
function renderClock(){
$("#currentDay").text(moment().format("[Today is: ] dddd, MMMM Do YYYY, h:mm a"));
};
renderClock();
setInterval(renderClock, 1000);
//loop to create all time blocks
function timeBlocks(){
    for (var i = 0; i < 24; i++){
        var time = document.createElement("div");
        var txt = document.createElement("textarea");
        var button = document.createElement("button");
        var hour = moment("05:00", "HH:mm").add( i , 'hours');
        var hourBlock = hour.format('HH')
        var currentHour = moment().format('HH');
        console.log(hourBlock);
        console.log(currentHour);
        //console.log(moment(hourBlock).isBefore(currentHour, 'hour'));
        
        console.log(' ');
        
        
        $(time).attr("class", "col-12 col-xl-1 hour");
        $(txt).attr("class", "col-12 col-xl-10 time-block");
        $(button).attr("class", "col-12 col-xl-1 saveBtn");
        $(button).attr('onclick', 'save()');
        $(".row").append(time);
        $(".row").append(txt);
        $(".row").append(button);
        $(time).text(hour.format("h A"));
        $(button).text('SAVE')


         if( hourBlock === currentHour){
            $(txt).addClass('present');
        } else if (hourBlock < currentHour){
            $(txt).addClass('past');
        } else if (hourBlock > currentHour) {
            $(txt).addClass('future');
        }; 
    };
};

//save to local storage on button click
/*
function save(){
    window.alert('sup foo');
    var text = $('textarea').value
    localStorage.setItem('text', JSON.stringify(text))
}

function render(){
    var lastText = JSON.parse(localStorage.getItem('text'));
    $('textarea').text(lastText);
};
 */

//render();
timeBlocks();

