import React from 'react';

const Signup = () => {
    return (
        <div class="form-container">
        <div class="form-header">
            <button class="toggle-button active" id="loginBtn">Login</button>
            <button class="toggle-button" id="registerBtn" onclick="window.location.href='Signup.html'">Register</button>
        </div>
        <form id="loginForm" class="form-body">
            <input type="text" id="loginEmail" placeholder="Email / Phone number" required>
            <input type="password" id="loginPassword" placeholder="Password" required>
            <button type="submit" class="form-button">Sign In</button>
        </form>
        <a href="#" class="forgot-password">Forgot your password?</a>
    </div>
);
}

export default Signup;
