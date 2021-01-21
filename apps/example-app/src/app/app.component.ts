import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Message } from '@spine-z/api-interfaces';

@Component({
  selector: 'spine-z-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
