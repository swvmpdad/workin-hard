var plans = [];

// load the plans on page start
var loadPlans = function() {
    plans = JSON.parse(localStorage.getItem("plans"));

    // if localStorage is empty, it will populate it with an empty array for "plans"
    if(!plans) {
        plans = {
            0: "",
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: "",
            7: "",
            8: ""
        }
        localStorage.setItem("plans", JSON.stringify(plans));
    }

    // Populate time slots with saved tasks from local storage
    for (var i = 0; i < 9; i++) {
        var currentPlan = plans[i];
        var textHourEl = $("#hour-"+i);
        if (plans[i]) {
        textHourEl.text(currentPlan);
    }
}
};

// save the specific hour's tasked that was clicked into localStorage
var savePlans = function(id) {
    var plans = JSON.parse(localStorage.getItem("plans"));
    var textInput = $("#hour-"+id).val();
    console.log(textInput);
    plans[id] = textInput;
    localStorage.setItem("plans", JSON.stringify(plans));
};

// Set the current day at the top of the page
var currentDay = function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
}

// make the hours div editable
$(".planner").on("click", function(){
    var status = $(this)
        .closest(".planner")
        .attr("id")
        .replace("hour-", "");
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea />")
        .attr("id", "hour-" + status)
        .addClass("textarea col-9 d-flex border border-3 border-dark planner" + status)
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// event handler for saving
$(".saveBtn").click(function(){
    buttonId = $(this)
        .attr("id")
        .replace("btn-", "");
    savePlans(buttonId);
});

currentDay();
loadPlans();