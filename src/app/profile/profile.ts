import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  userName1: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    // // this.userName = this.route.snapshot.paramMap.get('name');
    // // console.log(this.userName);
    // this.route.paramMap.subscribe((params) => {
    //   this.userName = params.get('name');
    // });
    this.route.data.subscribe((data) => {
      this.userName1 = data['name'];
    });
  }
}
