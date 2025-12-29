import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = 0;

  // handleIncrement() {
  //   this.count=this.count+1;
  // }
  // handleDecrement() {
  //   this.count=this.count-1;
  // }
  // handleReset() {
  //   this.count=0;
  // }
  handleCounter(val: string) {
    if (val == 'minus') {
      if (this.count > 0) {
        this.count = this.count - 1;
      }
    } else if (val == 'plus') {
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }
}
