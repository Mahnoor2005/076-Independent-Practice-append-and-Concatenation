$(".to-pack-button").click(function() {
    let message = $(".to-pack-input").val();
    $(".packing-list").append("<li>" + "I'm going to pack " + message + "</li>");
});
$(".take-this-course").click(function() {
    let message2 = $(".course-to-take-input").val();
    $(".course-list").append("<li>" + message2 + "</li>");
});