import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDTO } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // GET USERS (STATE BASED)
  getUsers(): Observable<UserDTO[]> {
    if (this.usersSubject.value.length === 0) {
      this.loadUsers();
    }
    return this.users$;
  }

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  private usersSubject = new BehaviorSubject<UserDTO[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {}

  // GET USERS
  // Add this method to your UserService
  generateRandomUsers(count: number): UserDTO[] {
    const firstNames = [
      'John',
      'Emma',
      'Michael',
      'Sophia',
      'William',
      'Olivia',
      'James',
      'Ava',
      'Robert',
      'Isabella',
    ];
    const lastNames = [
      'Smith',
      'Johnson',
      'Williams',
      'Brown',
      'Jones',
      'Garcia',
      'Miller',
      'Davis',
      'Rodriguez',
      'Martinez',
    ];
    const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'company.com'];

    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
        lastNames[Math.floor(Math.random() * lastNames.length)]
      }`,
      email: `${firstNames[
        Math.floor(Math.random() * firstNames.length)
      ].toLowerCase()}.${lastNames[Math.floor(Math.random() * lastNames.length)].toLowerCase()}@${
        domains[Math.floor(Math.random() * domains.length)]
      }`,
      phone: `+1 (${Math.floor(Math.random() * 900) + 100}) ${
        Math.floor(Math.random() * 900) + 100
      }-${Math.floor(Math.random() * 9000) + 1000}`,
      username: `${firstNames[
        Math.floor(Math.random() * firstNames.length)
      ].toLowerCase()}${Math.floor(Math.random() * 100)}`,
      company: {
        name: ['Tech Corp', 'Innovate Inc', 'Digital Solutions', 'Global Systems'][
          Math.floor(Math.random() * 4)
        ],
      },
    }));
  }

  // Update loadUsers to use dummy data if API fails
  loadUsers() {
    this.http.get<UserDTO[]>(this.apiUrl).subscribe({
      next: (users) => {
        this.usersSubject.next(users);
      },
      error: () => {
        // Fallback to dummy data if API fails
        const dummyUsers = this.generateRandomUsers(8);
        this.usersSubject.next(dummyUsers);
      },
    });
  }

  // POST USER
  addUser(user: UserDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(this.apiUrl, user);
  }

  // ADD USER TO UI LIST
  addUserToState(user: UserDTO) {
    const currentUsers = this.usersSubject.value;
    this.usersSubject.next([user, ...currentUsers]);
  }

  // DELETE USER
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  removeUserFromState(id: number) {
    const filtered = this.usersSubject.value.filter((u) => u.id !== id);
    this.usersSubject.next(filtered);
  }

  // GET SINGLE USER
  getUserById(id: number): Observable<UserDTO> {
    return this.http.get<UserDTO>(`${this.apiUrl}/${id}`);
  }

  // UPDATE USER
  updateUser(id: number, user: UserDTO): Observable<UserDTO> {
    return this.http.put<UserDTO>(`${this.apiUrl}/${id}`, user);
  }
}
