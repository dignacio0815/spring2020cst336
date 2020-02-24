//  <!--JavaScript code here-->
//         <script>
        
//         var usernameAvailable = false;
//             // Displaying city from API after trying a zip code
//             $("#zip").on("change", function() {
//                 $.ajax({
//                     method: "GET",
//                     url: "https://itcdland.csumb.edu/~milara/ajax/cityInfoByZip.php",
//                     dataType: "json",
//                     data: {"zip": $("#zip").val() },
//                     success: function(result, status) {
//                         $("#city").html(result.city);
//                         $("#latitude").html(result.latitude);
//                         $("#longitude").html(result.longitude);
//                     }
//                 })
//             }); // ajax zip
            
//             $("#state").on("change", function() {
//                 $.ajax({
//                     method: "GET",
//                     url: "https://itcdland.csumb.edu/~milara/ajax/countyList.php?state=ca",
//                     dataType: "json",
//                     data: {"state": $("#state").val() },
//                     success: function(result, status) {
//                         // alert(result[0].county);
//                         $("#county").html("<option> Select One </option>");
//                         for(let i = 0; i < result.length; i++) {
//                             $("#county").append("<option>" + result[i].county + "</option>");
//                         }
//                     }
//                 })
//             }); // state ajax
            
//             $("#username").change(function() {
//                 $.ajax({
//                     method: "GET",
//                     url: "https://cst336.herokuapp.com/projects/api/usernamesAPI.php?username=eeny",
//                     dataType: "json",
//                     data: { "username" : $("#username").val() },
//                     success: function(result, status) {
//                         if(result.available) {
//                             $("#usernameError").html("Username is available!");
//                             $("#usernameError").css("color", "green");
//                             usernameAvailable = true;
//                         } else {
//                             $("#usernameError").html("Username is unavailable!");
//                             $("#usernameError").css("color", "red");
//                             usernameAvailable = false;
//                         }
//                     }
//                 })
//             }); // username ajax
            
//             $("#signupForm").on("submit", function(event) {
//                 alert("Submitting form");
//                 if(!isFormValid()) {
//                     event.preventDefault();
//                 }
//             });
            
//             function isFormValid() {
//                 isValid = true;
//                 if(!usernameAvailable) {
//                     isValid = false;
//                 }
                
//                 if($("#username").val().length == 0) {
//                     isValid = false;
//                     $("#usernameError").html("Username is required");
//                 }
                
//                 if($("password").val() != $("#passwordAgain").val()) {
//                     $("#passwordAgainError").html("Password mismatch");
//                 }
                
//                 if($("#username").val().length < 5) {
//                     isValid = false;
//                     $("usernameError").html("Username is shorted than 6 charachters");
//                 }
//                 return isValid;
//             }
//         </script>