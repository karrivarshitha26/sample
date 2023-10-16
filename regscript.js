    function myFunction()
        {
            var f_name=document.getElementById("fname").value;
            var l_name=document.getElementById("lname").value;
            var gen=document.getElementById("gender").value;
            var bch=document.getElementById("branch").value;
            var jntno=document.getElementById("jntuno").value;
            var phno=document.getElementById("phnum").value;
            var dateob=document.getElementById("dob").value;
            var eml=document.getElementById("email").value;
            var psw=document.getElementById("password").value;
            var pswcfm=document.getElementById("cfmpsw").value;
            var agree = document.querySelector('input[type="checkbox"]');
            if(f_name=="")
            {
            alert("First name cannot be empty");
            return false;
            } 
            else if (!/^[A-Z]/.test(f_name)) {
            alert("First name should start with a capital letter");
            return false;
            }
            if(l_name=="")
            {
            alert("Last name cannot be empty");
            return false;
            }  
            else if (!/^[A-Z]/.test(l_name_name)) {
            alert("Last name should start with a capital letter");
            return false;
            }
            if(jntno=="")
            {
            alert("JNTU Number should be filled");
            return false;
            }

            if(dateob=="")
            {
            alert("Date Of Birth should be filled");
            return false;
            }
            if(eml=="")
            {
            alert("email cannot be empty");
            return false;
            }
            if(pswcfm=="")
            {
            alert("Confirm Password cannot be empty");
            return false;
            }
            if(psw!=pswcfm)
            {
            alert("Password incorrect.Both the passwords should be equal");
            return false;
            }
            if(!agree.checked) 
            {
            alert("Please agree to the terms and conditions");
            return false;
            }
            if (phno === "") {
            alert("Phone number cannot be empty");
            return false;
            } 
            else if (!/^\d{10}$/.test(phno)) {
            alert("Invalid phone number format. enter a valid 10-digit numeric phone number");
            return false;
            }
            if (psw === "") {
            alert("Password should be filled");
            return false;
            } 
            else if (psw.length < 8) {
            alert("Password should contain at least 8 characters");
            return false;
            } 
            else if (!/[a-zA-Z]/.test(psw) || !/\d/.test(psw)) {
            alert("Password should contain both letters and numbers");
            return false;
            } 
            else if (!/^[A-Z]/.test(psw)) {
            alert("Password should start with a capital letter");
            return false;
            } 
            else if (!/[\W_]/.test(psw)) {
            alert("Password should contain at least one special character");
            return false;
            }
            return true;
            }
    