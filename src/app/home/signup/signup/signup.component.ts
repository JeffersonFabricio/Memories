import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';

@Component({
  selector: 'm-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', 
        [ 
          Validators.required, 
          Validators.email 
        ] 
      ],
      fullName: ['', 
        [
          Validators.required, 
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      userName: ['',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ] 
      ],
      password: ['',
        [
          Validators.required, 
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]

    })
  }

}
