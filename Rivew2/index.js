$(document).ready(function () {

    const savedCount = localStorage.getItem("count");
    const savedText = localStorage.getItem("text");

    $("#container").show();

    if (savedCount !== null && savedText !== null) {
        const count = parseInt(savedCount, 10);

        if (count === 0) {
            $("#container")
                .empty()
                .append('<p class="empty-msg">No items available</p>');
        } else {
            for (let i = 1; i <= count; i++) {
                const $clone = $(".template").first().clone();
                $clone.removeClass("template").addClass("generated").show();
                $clone.find(".c").text(savedText);
                $("#container").append($clone);
            }
        }
    }

    $("#submitBtn").on("click", function () {
        const count = parseInt($("#num").val(), 10);
        const text = $("#textInput").val();

        localStorage.setItem("count", count);
        localStorage.setItem("text", text);
        location.reload();
    });
});









