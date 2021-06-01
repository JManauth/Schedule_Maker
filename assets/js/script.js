//make display day and time uptop
function renderClock(){
$("#currentDay").text(moment().format("[Today is: ] dddd, MMMM Do YYYY, h:mm a"));
};
renderClock();
setInterval(renderClock, 1000);

//loop to create all time blocks
function timeBlocks(){
    for (var i = 0; i < 9; i++){
        var time = document.createElement("div");
        var txt = document.createElement("textarea");
        var button = document.createElement("button");
        var hour = moment("09:00", "HH:mm").add( i , 'hours');
        var hourBlock = hour.format('HH')
        var currentHour = moment().format('HH');
        
        $(time).attr("class", "col-12 col-xl-1 hour");
        $(txt).attr("class", "col-12 col-xl-10 time-block");
        $(txt).attr('id', i);
        $(button).attr("class", "col-12 col-xl-1 button");
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
    
    // saves to local storage
    var box0 = document.getElementById('0');
    var box1 = document.getElementById('1');
    var box2 = document.getElementById('2');
    var box3 = document.getElementById('3');
    var box4 = document.getElementById('4');
    var box5 = document.getElementById('5');
    var box6 = document.getElementById('6');
    var box7 = document.getElementById('7');
    var box8 = document.getElementById('8');

    $('button').click(function(){
            var allBlocks = {
                block0: box0.value.trim(),
                block1: box1.value.trim(),
                block2: box2.value.trim(),
                block3: box3.value.trim(),
                block4: box4.value.trim(),
                block5: box5.value.trim(),
                block6: box6.value.trim(),
                block7: box7.value.trim(),
                block8: box8.value.trim(),
            };
    
            localStorage.setItem("allBlocks", JSON.stringify(allBlocks));
    
    });

    // renders local storage to page
    function render(){
        var lastText = JSON.parse(localStorage.getItem('allBlocks'));
        
        if (lastText !== null) {
        document.getElementById("0").innerHTML = lastText.block0;
        document.getElementById("1").innerHTML = lastText.block1;
        document.getElementById("2").innerHTML = lastText.block2;
        document.getElementById("3").innerHTML = lastText.block3;
        document.getElementById("4").innerHTML = lastText.block4;
        document.getElementById("5").innerHTML = lastText.block5;
        document.getElementById("6").innerHTML = lastText.block6;
        document.getElementById("7").innerHTML = lastText.block7;
        document.getElementById("8").innerHTML = lastText.block8;  
        } else {
            return;
        }
    };

    render();
};

timeBlocks();
