import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user: User;
  addForm: FormGroup;

  @ViewChild('btnSubmit',{static:true}) name : ElementRef;
  
  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute,public fb: FormBuilder) {
    this.user = { id: null, name: '', email: '', password: '', phoneNumber: null, status: '' }
  }

  ngOnInit() {
    const id: Number = +this.activatedRoute.snapshot.params.id;
    this.user=this.userService.getById(id);

    this.addForm =this.fb.group(
      {
        id:new FormControl(''),
        name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phoneNumber: new FormControl('', [Validators.required]),
        // status:new FormControl('',[Validators.required]),
      status: ['', [Validators.required]]

      }
    );
  
    console.log(this.user)
    if(this.user)
    {
     this.name.nativeElement.innerText="Edit";
      this.addForm.patchValue(
        {
          id:this.user.id,
          name:this.user.name,
          email:this.user.email,
          phoneNumber:this.user.phoneNumber,
          status:this.user.status

        })
    }
    console.log(this.addForm)
  }
  // Getter method to access form control
  get myForm() {
    return this.addForm.get('status');
  }
  onAdd() {
    if (this.addForm.valid && !this.user) {
      console.log("here is add")
      this.user = this.addForm.getRawValue();
      console.log(this.user)
      this.userService.add(this.user)
      alert("Your User Successfully Added");
      this.router.navigate(['/users']);
    }
    else if(this.user){
      console.log("here is edit");
      console.log(this.user);
      const editedUser=this.addForm.getRawValue();
      this.userService.update(editedUser);
      this.router.navigate(['/users']);
      alert("Your User Successfully Updated");

    }
    else {
      console.log("here is none of the above")
      this.router.navigate(['/users/add']);
      alert("oner or more of your inputs is Invalid/Required")
    }
  }

}
