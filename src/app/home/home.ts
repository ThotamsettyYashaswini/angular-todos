import { Component } from '@angular/core';
import { email } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // constructor(private router: Router) {}
  // goToProfile(name: string) {
  //   this.router.navigate(['/profile'], { queryParams: { name } });
  // }
  users = [
    {
      id: 1,
      name: 'Yashu',
      age: 24,
      email: 'yashu@example.com',
    },
    {
      id: 2,
      name: 'gopi',
      age: 26,
      email: 'gopi@example.com',
    },
    {
      id: 3,
      name: 'Raja',
      age: 26,
      email: 'raja@example.com',
    },
    {
      id: 4,
      name: 'Sai',
      age: 22,
      email: 'sai@example.com',
    },
  ];
}
