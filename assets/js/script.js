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
        
        $(time).attr("class", "col-12 col-xl-1 hour");
        $(txt).attr("class", "col-12 col-xl-10 time-block");
        $(txt).attr('id', i);
        $(button).attr("class", "col-12 col-xl-1 button");
        //$(button).attr("id", "saveBtn");
        //$(button).attr('onclick', save());
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
    
    var box0 = document.getElementById('0');
    var box1 = document.getElementById('1');
    var box2 = document.getElementById('2');
    var box3 = document.getElementById('3');
    var box4 = document.getElementById('4');
    var box5 = document.getElementById('5');
    var box6 = document.getElementById('6');
    //var saveButton = document.getElementsByClassName('saveBtn')

    //console.log(saveButton);

    /*function save() {
        var allBlocks = {
            block0: box0.value.trim(),
            block1: box1.value.trim(),
            block2: box2.value.trim(),
            block3: box3.value.trim(),
            block4: box4.value.trim(),
            block5: box5.value.trim(),
            block6: box6.value.trim(),
        };

        localStorage.setItem("allBlocks", JSON.stringify(allBlocks));
    }; */


    $('button').click(function(){
            var allBlocks = {
                block0: box0.value.trim(),
                block1: box1.value.trim(),
                block2: box2.value.trim(),
                block3: box3.value.trim(),
                block4: box4.value.trim(),
                block5: box5.value.trim(),
                block6: box6.value.trim(),
            };
    
            localStorage.setItem("allBlocks", JSON.stringify(allBlocks));
    
    });

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
        } else {
            return;
        }
    };

    render();

    /*saveButton.addEventListener('click', function(event){
        event.preventDefault();
        save();
    });*/ 

};



//$('.saveBtn').click(save());

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

