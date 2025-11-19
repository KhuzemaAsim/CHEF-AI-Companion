import React, { useState, useEffect } from 'react';
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(isLogin ? 'Login' : 'Signup', formData);
  };

  const toggleView = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="particle-swarm"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      {/* Main Content */}
      <div className={`auth-card-wrapper ${isLogin ? 'login-view' : 'signup-view'}`}>
        <div className="auth-card-inner">
          {/* Login Form */}
          <div className={`auth-form-container ${isLogin ? 'active' : ''}`}>
            <div className="auth-form-header">
              <h1 className="auth-title">Welcome Back</h1>
              <p className="auth-subtitle">Sign in to continue your culinary journey</p>
            </div>
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="auth-input"
                />
                <span className="input-highlight"></span>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="auth-input"
                />
                <span className="input-highlight"></span>
              </div>
              <button type="submit" className="auth-button">
                <span className="button-text">Sign In</span>
                <span className="button-shine"></span>
              </button>
            </form>
            <div className="auth-footer">
              <p>
                Don't have an account?{' '}
                <button type="button" onClick={toggleView} className="auth-link">
                  Sign Up
                </button>
              </p>
            </div>
          </div>

          {/* Signup Form */}
          <div className={`auth-form-container ${!isLogin ? 'active' : ''}`}>
            <div className="auth-form-header">
              <h1 className="auth-title">Create Account</h1>
              <p className="auth-subtitle">Join Chef_AI and discover endless recipes</p>
            </div>
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="auth-input"
                />
                <span className="input-highlight"></span>
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="auth-input"
                />
                <span className="input-highlight"></span>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="auth-input"
                />
                <span className="input-highlight"></span>
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="auth-input"
                />
                <span className="input-highlight"></span>
              </div>
              <button type="submit" className="auth-button">
                <span className="button-text">Create Account</span>
                <span className="button-shine"></span>
              </button>
            </form>
            <div className="auth-footer">
              <p>
                Already have an account?{' '}
                <button type="button" onClick={toggleView} className="auth-link">
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

