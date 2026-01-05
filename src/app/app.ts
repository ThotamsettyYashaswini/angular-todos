import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="app-container">
      <nav class="navbar">
        <div class="nav-content">
          <h1 class="logo" routerLink="/">👤 UserHub</h1>
          <div class="nav-links">
            <button class="nav-btn" routerLink="/" routerLinkActive="active">🏠 Home</button>
            <button class="nav-btn" routerLink="/user" routerLinkActive="active">👥 Users</button>
          </div>
        </div>
      </nav>
      <main>
        <router-outlet></router-outlet>
      </main>
      <footer class="footer">
        <p>User Management System © 2024 | JSONPlaceholder API</p>
      </footer>
    </div>
  `,
  styles: [
    `
      .app-container {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }

      .navbar {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        padding: 1rem 2rem;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }

      .nav-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        color: white;
        font-size: 1.8rem;
        margin: 0;
        cursor: pointer;
        font-weight: 700;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease;
      }

      .logo:hover {
        transform: scale(1.05);
      }

      .nav-links {
        display: flex;
        gap: 1rem;
      }

      .nav-btn {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 50px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.3s ease;
        backdrop-filter: blur(5px);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }

      .nav-btn:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }

      .nav-btn.active {
        background: rgba(255, 255, 255, 0.4);
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
      }

      main {
        flex: 1;
        padding: 2rem;
      }

      .footer {
        text-align: center;
        padding: 1.5rem;
        color: rgba(255, 255, 255, 0.8);
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('my-angular-app');
}
