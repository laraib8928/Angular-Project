import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmailService } from '../../service/email-service';



@Component({
  selector: 'app-email',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, MatButton],
  templateUrl: './email.html',
  styleUrl: './email.css'
})
export class Email {
  constructor(private email: EmailService){}

  data = {
    to: "",
    subject: "",
    message: "",
  }

  doSubmitForm() {
    console.log("200 Success");
    console.log("Data", this.data);
    this.email.sendEmail(this.data).subscribe(
      (response:any) => {
        console.log(response);
      },
      (error:any) => {
        console.log(error);
      }
    );

  }

}
