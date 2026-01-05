import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user';
import { UserDTO } from '../models/user.model';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css',
})
export class AddUser {
  saving = false;
  showPopup = false;

  user: UserDTO = {
    name: '',
    email: '',
    phone: '',
    username: '',
    company: { name: '' },
  };

  constructor(private userService: UserService, private router: Router) {}

  saveUser(form: NgForm) {
    if (form.invalid) return;

    this.saving = true;

    const newUser: UserDTO = {
      ...this.user,
      id: Date.now(),
    };

    this.userService.addUser(newUser).subscribe(() => {
      this.userService.addUserToState(newUser);
      this.saving = false;
      this.showPopup = true;

      setTimeout(() => {
        this.showPopup = false;
        this.router.navigate(['/users']);
      }, 1500);
    });
  }
}
