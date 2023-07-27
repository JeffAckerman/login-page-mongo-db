
$(document).ready(function (){ 
    $(".form-message").hide();
    $("#submit").click(function(e) { 
        
        $(".form-message").hide(); 

        var name = $("#fullName").val();  // For Name Field
        if (name == ""){ 
            $(".form-message").fadeIn().text("Fill in all the fields");
            $("#fullName").focus();
            return false;
        }

        var workplace = $("#workplace").val();  // For Email Field
        if (workplace == ""){ 
            $(".form-message").fadeIn().text("Fill in all the fields");
            $("#workplace").focus();
            return false;
        }

        var age = $("#age").val(); 
        if (age == ""){ 
            $(".form-message").fadeIn().text("Fill in all the fields");
            $("#age").focus();
            return false;
        } 
        var contact = $("#contact").val(); 
        if (contact == ""){ 
            $(".form-message").fadeIn().text("Fill in all the fields");
            $("#contact").focus();
            return false;
        } 

        var formValues = $(this).serialize();

        // AJAX Code To Submit Form.
        $.ajax({
            type:"POST",
            url: "php/profile.php",
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
                var name = document.getElementById("fullName").value;
                var email = document.getElementById("workplace").value;
                var password = document.getElementById("age").value;
                var password = document.getElementById("contact").value;
                localStorage.setItem('Name', fullName); 
                localStorage.setItem('Workplace', workplace); 
                localStorage.setItem('Age', age);
                localStorage.setItem('contact', contact);
            }