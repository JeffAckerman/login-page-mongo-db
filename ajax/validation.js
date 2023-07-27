
$(document).ready(function (){ 
    $(".form-message").hide();
    $("#submit").click(function(e) { 
        
        $(".form-message").hide(); 

        var name = $("#name").val();  // For Name Field
        if (name == ""){ 
            $(".form-message").fadeIn().text("Name is required.");
            $("#name").focus();
            return false;
        }

        var email = $("#email").val();  // For Email Field
        if (email == ""){ 
            $(".form-message").fadeIn().text("Email is required.");
            $("#email").focus();
            return false;
        }

        var password_1 = $("#password_1").val(); 
        if (password_1 == "" || password_1 < 8){ 
            $(".form-message").fadeIn().text("Password is required and check the length");
            $("#password_1").focus();
            return false;
        } 
        var password_2 = $("#password_2").val(); 
        if (password_1 !== password_2){ 
            $(".form-message").fadeIn().text("Password do not match");
            $("#password_2").focus();
            return false;
        }

        var formValues = $(this).serialize();

        // AJAX Code To Submit Form.
        $.ajax({
            type:"POST",
            url: "signup.php",
            data: formValues, // get all form field value in serialize form
            success: function(){ 
                
                alert("Account Created Successfully");
            }
            });
            });  
            return false;
            e.preventDefault();  // Prevents form action submission 
            });

 // For storing the information in local Storage 
            function addData(){ 
                var name = document.getElementById("name").value;
                var email = document.getElementById("email").value;
                var password = document.getElementById("password_1").value;
                localStorage.setItem('username', name); 
                localStorage.setItem('useremail', email); 
                localStorage.setItem('pass', password);
            }
