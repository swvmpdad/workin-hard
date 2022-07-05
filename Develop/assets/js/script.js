var plans = [];

var createPlans = function() {
    
};

var saveButtons = function() {
    $("#btn-0").on("click", () => {
        savePlans(0);
    });
    $("#btn-1").on("click", () => {
        savePlans(1);
    });
    $("#btn-2").on("click", () => {
        savePlans(2);
    });
    $("#btn-3").on("click", () => {
        savePlans(3);
    });
    $("#btn-4").on("click", () => {
        savePlans(4);
    });
    $("#btn-5").on("click", () => {
        savePlans(5);
    });
    $("#btn-6").on("click", () => {
        savePlans(6);
    });
    $("#btn-7").on("click", () => {
        savePlans(7);
    });
    $("#btn-8").on("click", () => {
        savePlans(8);
    });
};

var loadPlans = function() {
    plans = JSON.parse(localStorage.getItem("plans"));

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

    $.each(plans, function(list, arr) {
        console.log(list, arr);
    })

    // for (var i = 0; i < plans.length; i++) {
    //     var currentPlan = plans.i.val();
    //     $("#hour-" + i).val() = currentPlan;
    // }
};

var savePlans = function(id) {
    textInput = $("textarea").val();
    console.log(textInput);
    plans = JSON.parse(localStorage.getItem("events"));
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
saveButtons();
