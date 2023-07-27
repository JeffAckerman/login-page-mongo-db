$(document).ready(function (){ 
    $(".form-message").hide();
    $("#submit").click(function(e) { 
        
        $(".form-message").hide(); 

        var name = $("#email").val();  // For Name Field
        if (name == ""){ 
            $(".form-message").fadeIn().text("Email is required.");
            $("#email").focus();
            return false;
        }

        var password_1 = $("#password_1").val(); 
        if (password_1 == ""){ 
            $(".form-message").fadeIn().text("Password is required.");
            $("#password_1").focus();
            return false;
        } 


        var formValues = $(this).serialize();

        // AJAX Code To Submit Form.
        $.ajax({
            type:"POST",
            url: "loging.php",
            data: formValues, // get all form field value in serialize form
            success: function(){ 
                alert("Logged in Successfully");
            }
            });
            });  
            return false;
            e.preventDefault();  // Prevents form action submission 
            });

            // For storing the information in local Storage 
            function addData(){ 
                var email = document.getElementById("email").value;
                var password = document.getElementById("password_1").value;
                localStorage.setItem('email', email); 
                localStorage.setItem('pass', password);
            }