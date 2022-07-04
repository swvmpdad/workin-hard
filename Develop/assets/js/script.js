var plans = {
    hour0: ["hello"],
    hour1: ["hi"],
    hour2: ["hey"],
    hour3: [],
    hour4: [],
    hour5: [],
    hour6: [],
    hour7: [],
    hour8: []
};

var createPlans = function() {
    
}

var loadPlans = function() {
    plans = JSON.parse(localStorage.getItem("plans"));

    if(!plans) {
        plans = {
            hour9: [],
            hour10: [],
            hour11: [],
            hour12: [],
            hour1: [],
            hour2: [],
            hour3: [],
            hour4: [],
            hour5: []
        };
    }

    $.each(plans, function(list, arr) {
        console.log(list, arr);
    })
};

var savePlans = function() {
    localStorage.setItem("plans", JSON.stringify(plans));
}

// Set the current day at the top of the page
var currentDay = function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
}

// make the hours empty div editable
$(".planner").on("click", function(){
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea />")
        .addClass("textarea col-9 d-flex border border-3 border-dark planner")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// turn the text area back to a div
$(".planner").off("focus", function(){
    var text = $(this)
    .val()
    .trim();

var status = $(this)
    .closest(".planner")
    .attr("id")
    .replace("hour-", "");

var index = $(this)
    .closest(".time-block")
    .index();

    plans[status][index].text = text;

var planDiv = $("<div>")
    .addClass("col-9 d-flex bg-light border border-3 border-dark planner")
    .text(text);

$(this).replaceWith(planDiv);
});

$(".saveBtn").click(function(){
savePlans();
});

currentDay();
loadPlans();
