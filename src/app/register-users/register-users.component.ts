import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { environment } from '../../environments/environment';
import { Router, RouterLink } from '@angular/router';

interface UserSeedData {
  userName: string;
  email: string;
  password: string;
  isAdministrator: boolean;
}

@Component({
  selector: 'app-register-users',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink],
  templateUrl: './register-users.component.html',
  styleUrl: './register-users.component.css'
})
export class RegisterUsersComponent implements OnInit {
  form!: FormGroup;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      isAdministrator: new FormControl(false)
    });
  }

  onSubmit() {
    let userSeedData: UserSeedData = {
      userName: this.form.controls['userName'].value,
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
      isAdministrator: this.form.controls['isAdministrator'].value
    };
    let url= environment.baseurl+'api/Seed/Users'
    this.http.post(url, [userSeedData]).subscribe({
      next: result => {
        console.log('Users seeded successfully', result);
        this.router.navigate(['/']);
      },
      error: error => console.error('Error seeding users', error)
    });
  }
}
