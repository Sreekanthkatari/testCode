import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    invalidLogin: boolean = false;
    users = [
    { firstName: "Ram", lastName: "kolla", mobile: "730631777", 'email': "r@gmail.com", 'age': '26', 'salary': '60k', 'massage': '','sender': '','username': 'user12', 'password': 'Password@123'  },
    { firstName: "stork", lastName: "Man", mobile: "730631773", 'email': "s@gmail.com", 'age': '27', 'salary': '50k', 'massage': '', 'sender': '','username': 'user13', 'password': 'Password@123' },
    { firstName: "Harry", lastName: "kan", mobile: "730631771", 'email': "h@gmail.com", 'age': '28', 'salary': '70k', 'massage': '','sender': '','username': 'user14', 'password': 'Password@123'  },
    { firstName: "Miko", lastName: "jim", mobile: "730631778", 'email': "m@gmail.com", 'age': '46', 'salary': '100k', 'massage': '','sender': '' ,'username': 'user15', 'password': 'Password@123' },
    { firstName: "John", lastName: "Ho", mobile: "730631779", 'email': "j@gmail.com", 'age': '20', 'salary': '30k', 'massage': '','sender': '' ,'username': 'user16', 'password': 'Password@123' }];
    constructor(private formBuilder: FormBuilder, private router: Router) { }

    onSubmit() {
        //   if (this.loginForm.invalid) {
        //     return;
        //   }
       
        const loginPayload = {
            username: this.loginForm.controls.username.value,
            password: this.loginForm.controls.password.value
        }
        this.users.forEach((user: any) => {
            if (user.username === loginPayload.username && user.password === loginPayload.password) {
                localStorage.setItem('loggedUser',JSON.stringify(user));
                // this.users = this.users.filter(u => u !== user);
                // localStorage.setItem('userslist',JSON.stringify(this.users));
                this.router.navigate(['dashboard']);
            }else{
                this.invalidLogin=true;
            }
        });


    }

    ngOnInit() {
        window.localStorage.removeItem('token');
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.compose([Validators.required])],
            password: ['', Validators.required]
        });
    }

}
