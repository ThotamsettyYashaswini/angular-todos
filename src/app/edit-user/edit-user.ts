import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user';
import { UserDTO } from '../models/user.model';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.css',
})
export class EditUser implements OnInit {
  user: UserDTO = {
    name: '',
    email: '',
    phone: '',
    username: '',
    company: { name: '' },
  };

  userId!: number;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.getUserDetails();
  }

  getUserDetails() {
    this.loading = true;
    this.userService.getUserById(this.userId).subscribe((data) => {
      this.user = data;
      this.loading = false;
    });
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.user).subscribe(() => {
      alert('User updated');
      this.router.navigate(['/users']);
    });
  }

  cancel() {
    this.router.navigate(['/users']);
  }
}
