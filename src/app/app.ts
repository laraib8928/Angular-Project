import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './component/navbar/navbar';
import { Home } from './component/home/home';
import { Email } from './component/email/email';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Home,Email],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('email-gui');
}
