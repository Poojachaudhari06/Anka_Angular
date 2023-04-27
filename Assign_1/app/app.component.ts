import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Role {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loginform!:FormGroup ;
  submitted= false;
  list:any;
  Swal: any;
  showSpinner=false;
  
  constructor(private fb:FormBuilder){
    
  }


  ngOnInit(): void {
    this.setForm();
  }
  title = 'Assign1';


  role: Role[] = [
    {value: 'developer-0', viewValue: 'Developer'},
    {value: 'tester-1', viewValue: 'Tester'},
    {value: 'manager-2', viewValue: 'Manager'},
  ];

  setForm(){
    this.loginform = this.fb.group({
      id:[0],
      title:['',Validators.required],
      firstName:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')])],
      lastName:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]) ],
      gender: ['male', [Validators.required]],
      dob:['',Validators.compose([Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)])],
      email:['',Validators.compose([Validators.required,Validators.email])],
      about:['',Validators.maxLength(300)],
      select_role:['',Validators.required],
      check:['',Validators.required],
  
    });
  }

  onSubmit(){
  
    this.submitted=true;
    
    console.log(this.loginform.value);
    this.loginform.reset();
    if(this.loginform.invalid){
      return;
    }
    
}

onCancel(){
  this.loginform.reset();
}
}
