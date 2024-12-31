<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electricity Billing System - Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
        }
        .login-container {
            max-width: 400px;
            margin: 80px auto;
            padding: 20px;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .error-message {
            color: red;
            font-size: 0.9em;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="login-container">
            <h2 class="text-center mb-4">Login</h2>
            <form id="loginForm">
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" id="username" name="username" class="form-control" placeholder="Enter your username" required>
                    <small class="error-message d-none">Username is required.</small>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" id="password" name="password" class="form-control" placeholder="Enter your password" required>
                    <small class="error-message d-none">Password is required.</small>
                </div>
                <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
        </div>
    </div>

    <script>
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            let isValid = true;

            // Validate Username
            const username = document.getElementById('username');
            const usernameError = username.nextElementSibling;
            if (!username.value.trim()) {
                usernameError.classList.remove('d-none');
                isValid = false;
            } else {
                usernameError.classList.add('d-none');
            }

            // Validate Password
            const password = document.getElementById('password');
            const passwordError = password.nextElementSibling;
            if (!password.value.trim()) {
                passwordError.classList.remove('d-none');
                isValid = false;
            } else {
                passwordError.classList.add('d-none');
            }

            if (isValid) {
                alert('Login Successful!');
                // Redirect or submit the form
            }
        });
    </script>
</body>
</html>
