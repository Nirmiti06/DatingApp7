import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {
  error: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.['error'];                    // This means that if navigation, extras, or state is null or undefined at any level, the expression will short-circuit and return undefined for the entire expression, preventing a runtime error.
  }

  ngOnInit() : void {
  }

}
