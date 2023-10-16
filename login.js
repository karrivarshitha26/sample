function checkCredentials() {
            var uname = document.getElementById("uname").value;
            var pas = document.getElementById("password").value;
            
            if (uname === "ADMIN" && pas === "admin") {
                window.location.href = "test.html";
            } 
            else {
                out.println("no");
            }
        }