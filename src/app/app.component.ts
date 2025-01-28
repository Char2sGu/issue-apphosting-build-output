import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test12Component } from './test12/test12.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { Test5Component } from './test5/test5.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Test12Component,
    Test2Component,
    Test3Component,
    Test4Component,
    Test5Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'issue-apphosting-build-output';
}
