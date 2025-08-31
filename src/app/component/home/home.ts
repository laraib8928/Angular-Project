import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, MatSnackBarModule,],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private snackBar: MatSnackBar) { }

  btnclick() {
    console.log("click");
    this.snackBar.open('Welcome to EmailGUI ', 'Undo');
  }
}  