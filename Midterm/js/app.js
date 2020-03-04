var url2 = "https://openlibrary.org/api/books?bibkeys=ISBN:"
var url = "https://openlibrary.org/api/books"

$("#button").on("click", function() {
    var ISBN = $("#input").val();
    $.ajax({
        method: "GET",
        url: url,
        dataType: "json",
        data: {
            bibkeys : "ISBN:" + ISBN,
            format: "json",
            jscmd: "data"
        },
        success: function(data) {
            $("#result").append('<img src="' + data["ISBN:" + ISBN]["cover"]["medium"] + '"/>')
            $("#result").append("<div>" + data["ISBN:" + ISBN]["title"] + "</div>")
            $("#result").append("<div>" + data["ISBN:" + ISBN]["authors"] + "</div>")
            $("#result").append("<div>" + data["ISBN:" + ISBN]["publishers"][0][0] + "</div>")
            $("#result").append("<div>" + data["ISBN:" + ISBN]["title"] + "</div>")
            console.log(data["ISBN:" + ISBN])
        },
        error:function() {
            console.log("not working")
        }
    })

})

