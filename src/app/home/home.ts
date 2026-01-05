import { Component } from '@angular/core';
import { email } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <div class="home-container" @fadeIn>
      <div class="hero-section">
        <h1 class="hero-title">Welcome to UserHub</h1>
        <p class="hero-subtitle">Modern User Management Dashboard</p>
        <div class="hero-actions">
          <button class="hero-btn primary" routerLink="/user">👥 View Users</button>
          <button class="hero-btn secondary" routerLink="/add-user">➕ Add New User</button>
        </div>
      </div>

      <div class="features">
        <div class="feature-card" @stagger>
          <div class="feature-icon">👤</div>
          <h3>User Management</h3>
          <p>Add, edit, and delete users with a beautiful interface</p>
        </div>
        <div class="feature-card" @stagger>
          <div class="feature-icon">⚡</div>
          <h3>Real-time Updates</h3>
          <p>Instant updates with smooth animations</p>
        </div>
        <div class="feature-card" @stagger>
          <div class="feature-icon">📊</div>
          <h3>Analytics Ready</h3>
          <p>Clean data presentation for user analytics</p>
        </div>
        <div class="feature-card" @stagger>
          <div class="feature-icon">🔒</div>
          <h3>Secure Operations</h3>
          <p>Safe CRUD operations with confirmation dialogs</p>
        </div>
      </div>

      <div class="stats">
        <div class="stat-card">
          <h2>50+</h2>
          <p>Active Users</p>
        </div>
        <div class="stat-card">
          <h2>99%</h2>
          <p>Uptime</p>
        </div>
        <div class="stat-card">
          <h2>24/7</h2>
          <p>Support</p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .home-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
      }

      .hero-section {
        text-align: center;
        padding: 4rem 2rem;
        background: rgba(255, 255, 255, 0.95);
        border-radius: 20px;
        margin-bottom: 3rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(10px);
      }

      .hero-title {
        font-size: 3.5rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 1rem;
        font-weight: 800;
      }

      .hero-subtitle {
        font-size: 1.5rem;
        color: #666;
        margin-bottom: 2rem;
      }

      .hero-actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }

      .hero-btn {
        padding: 1rem 2rem;
        border: none;
        border-radius: 50px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .hero-btn.primary {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
      }

      .hero-btn.secondary {
        background: white;
        color: #667eea;
        border: 2px solid #667eea;
      }

      .hero-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
      }

      .features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 3rem;
      }

      .feature-card {
        background: white;
        padding: 2rem;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }

      .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
      }

      .feature-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      .feature-card h3 {
        color: #333;
        margin-bottom: 0.5rem;
      }

      .feature-card p {
        color: #666;
        line-height: 1.6;
      }

      .stats {
        display: flex;
        justify-content: center;
        gap: 3rem;
        flex-wrap: wrap;
      }

      .stat-card {
        background: white;
        padding: 2rem 3rem;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }

      .stat-card h2 {
        font-size: 3rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 0;
      }

      .stat-card p {
        color: #666;
        font-size: 1.1rem;
        margin: 0.5rem 0 0;
      }
    `,
  ],
})
export class Home {}
