const url = "https://pixabay.com/api/?key=15448805-2fb6d362dc06889b4a4ad4a80"
var predefinedKeywords = ["cat", "baseball", "tennis"]
var randomNumber = Math.floor(Math.random() * (3))


function onLoad() {
    $.ajax({
        method: "GET", 
        url: url,
        dataType: "json",
        data: {
            "q": predefinedKeywords[randomNumber]
        },
        success: function(result, status) {
            $("#images").empty();
            for(let i = 0; i < 4; i++) {
                $("#images").append("Likes: " + result.hits[i].likes);
                $("#images").append('<img src="' + result.hits[i].previewURL + '" class="imgs"/>')
            }
            }
    })
}

function afterLoad() {
    $("#submit").on("click", function() {
        var orientation = $("#orientation option:selected").val();
        var keyword = $("#keyword").val();
        $.ajax({
        method: "GET", 
        url: url,
        dataType: "json",
        data: {
            "q": keyword,
            "orientation": orientation
        },
        success: function(result, status) {
            $("#images").empty();
            for(let i = 0; i < 4; i++) {
                $("#images").append("Likes: " + result.hits[i].likes);
                $("#images").append('<img src="' + result.hits[i].previewURL + '" class="imgs"/>')
            }
            }
        })
    })
}

onLoad()
afterLoad()