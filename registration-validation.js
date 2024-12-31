<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electricity Billing System - Register</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa;
        }
        .register-container {
            max-width: 500px;
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
        .password-strength {
            font-size: 0.9em;
        }
        .strength-weak {
            color: red;
        }
        .strength-medium {
            color: orange;
        }
        .strength-strong {
            color: green;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="register-container">
            <h2 class="text-center mb-4">Register</h2>
            <form id="registerForm">
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" name="email" class="form-control" placeholder="Enter your email" required>
                    <small class="error-message d-none">Enter a valid email address.</small>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" id="password" name="password" class="form-control" placeholder="Create a password" required>
                    <small class="password-strength d-none">Password strength: <span id="passwordStrength"></span></small>
                </div>
                <div class="mb-3">
                    <label for="confirmPassword" class="form-label">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" class="form-control" placeholder="Confirm your password" required>
                    <small class="error-message d-none">Passwords do not match.</small>
                </div>
                <button type="submit" class="btn btn-primary w-100">Register</button>
            </form>
        </div>
    </div>

    <script>
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const email = document.getElementById('email');
        const passwordStrength = document.getElementById('passwordStrength');
        const strengthMessage = password.nextElementSibling;

        password.addEventListener('input', function() {
            const value = password.value;
            strengthMessage.classList.remove('d-none');

            if (value.length < 6) {
                passwordStrength.textContent = 'Weak';
                passwordStrength.className = 'strength-weak';
            } else if (value.length < 10) {
                passwordStrength.textContent = 'Medium';
                passwordStrength.className = 'strength-medium';
            } else {
                passwordStrength.textContent = 'Strong';
                passwordStrength.className = 'strength-strong';
            }
        });

        document.getElementById('registerForm').addEventListener('submit', function(event) {
            event.preventDefault();
            let isValid = true;

            // Email Validation
            const emailError = email.nextElementSibling;
            if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                emailError.classList.remove('d-none');
                isValid = false;
            } else {
                emailError.classList.add('d-none');
            }

            // Confirm Password Validation
            const confirmPasswordError = confirmPassword.nextElementSibling;
            if (password.value !== confirmPassword.value) {
                confirmPasswordError.classList.remove('d-none');
                isValid = false;
            } else {
                confirmPasswordError.classList.add('d-none');
            }

            if (isValid) {
                alert('Registration Successful!');
                // Redirect or submit the form
            }
        });
    </script>
</body>
</html>
