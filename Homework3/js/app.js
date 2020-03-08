var url = "https://api.unsplash.com/photos/random"
var accessKey = "7ERoJpBBBUoA9ksJbznB_cd-2ZuyWLKykXUAcwLeM1I"
var input = $("#input").val()
var select = $("#select").val()
var amount = $("#amount").val()
var featured = $("#featured").val()

$(document).ready(function() {
    $("#button").on("click", function() {
    $(".flex-container").empty()
    $("#limit").empty()
    input = $("#input").val()
    select = $("#select").val()
    amount = $("#amount").val()
    featured = $("#featured").val()
    if(featured == "featured") {
        featured = true
    } else {
        featured = false
    }
    if(amount > 30 || amount < 1) {
        $("#limit").append("<h2>Amount was not in bounds. Set amount to 1</h2>");
        amount = 1
    } 
    if(featured == "Featured photos?") {
        featured = true;
    }
    if(select == "Order pictures by:") {
        select = "latest"
    }
    $.ajax({
        method: "GET",
        dataType: "JSON",
        url : url,
        data: {
            order_by: select,
            query: input,
            count: amount,
            featured: featured,
            client_id: accessKey
        }, 
        success: function(result, status) {
            for(let i = 0; i < result.length; i++) {
                $(".flex-container").append('<div class="img-thumbnail flex-item"><img src="' + result[i].urls.small + '"></div>')
             }
        }, error:function(status) {
            console.log("Error happening:")
            console.log(status)
            }
        }) 
    })
})