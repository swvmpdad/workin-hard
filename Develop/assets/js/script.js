// Set the current day at the top of the page
var currentDay = function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
}

$(".textarea").on("click", function(){
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea />")
        .addClass("textarea col-9 d-flex")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    console.log(text);
});

$(".textarea").on("blur", "textarea", function(){
    var text = $(this)
        .val()
        .trim();

    var status = $(this)
        .closest(".planner")
        .attr("id")
        .replace("hour-", "");

    var planDiv = $("<div>")
        .addClass("col-9 d-flex bg-light border border-3 border-dark planner")
        .text(text);

    $(this).replaceWith(planDiv);
});

currentDay();