var currentDay = function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
}

currentDay();