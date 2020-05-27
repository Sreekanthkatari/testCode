import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    LoggedUser: any;
    userInfo: any;
    textMassage:string;
    updatedUsers:any;
 
    messageSuccess:boolean;

    // users = [{ firstName: "Ram", lastName: "kolla", mobile: "730631777", 'email': "r@gmail.com", 'age': '26', 'salary': '60k', 'massage': '','sender': '' },
    // { firstName: "stork", lastName: "Man", mobile: "730631773", 'email': "s@gmail.com", 'age': '27', 'salary': '50k', 'massage': '', 'sender': ''},
    // { firstName: "Harry", lastName: "kan", mobile: "730631771", 'email': "h@gmail.com", 'age': '28', 'salary': '70k', 'massage': '','sender': '' },
    // { firstName: "Miko", lastName: "jim", mobile: "730631778", 'email': "m@gmail.com", 'age': '46', 'salary': '100k', 'massage': '','sender': '' },
    // { firstName: "John", lastName: "Ho", mobile: "730631779", 'email': "j@gmail.com", 'age': '20', 'salary': '30k', 'massage': '','sender': '' }];

    users = [
        { firstName: "Ram", lastName: "kolla", mobile: "730631777", 'email': "r@gmail.com", 'age': '26', 'salary': '60k', 'massage': '','sender': '','username': 'user12', 'password': 'Password@123'  },
        { firstName: "stork", lastName: "Man", mobile: "730631773", 'email': "s@gmail.com", 'age': '27', 'salary': '50k', 'massage': '', 'sender': '','username': 'user13', 'password': 'Password@123' },
        { firstName: "Harry", lastName: "kan", mobile: "730631771", 'email': "h@gmail.com", 'age': '28', 'salary': '70k', 'massage': '','sender': '','username': 'user14', 'password': 'Password@123'  },
        { firstName: "Miko", lastName: "jim", mobile: "730631778", 'email': "m@gmail.com", 'age': '46', 'salary': '100k', 'massage': '','sender': '' ,'username': 'user15', 'password': 'Password@123' },
        { firstName: "John", lastName: "Ho", mobile: "730631779", 'email': "j@gmail.com", 'age': '20', 'salary': '30k', 'massage': '','sender': '' ,'username': 'user16', 'password': 'Password@123' }];

    constructor(private router: Router) { }

    ngOnInit() {
        if (!window.localStorage.getItem('loggedUser')) {
            this.router.navigate(['login']);
            return;
        }
        let Data = localStorage.getItem('loggedUser');
        this.LoggedUser = JSON.parse(Data);
        if(localStorage.getItem('updatedUsers')){
         this.updatedUsers=localStorage.getItem('updatedUsers');
         let list = JSON.parse(this.updatedUsers);
         list.forEach((user:any) => {
             if (user.firstName==this.LoggedUser.firstName){
                if( user.massage){
               
                    this.LoggedUser.sender=user.sender;
                    this.LoggedUser.massage=user.massage;
                      this.messageSuccess = false;
                    setTimeout(()=>{    //<<<---    using ()=> syntax
                        this.messageSuccess = false;
                   }, 5000);
                   // alert("you got massge from :" + this.LoggedUser.sender + "massege is :" +this.LoggedUser.massage );
                }
             }
             
         });
        }
        
     

    }
    viewuser(user) {
        this.userInfo = user;
    }

    deleteUser(user): void {

        this.users = this.users.filter(u => u !== user);
        this.userInfo=false;

    };
    sendMassege(userInfo){
        userInfo.massage=this.textMassage;
        userInfo.sender=this.LoggedUser.firstName;
        localStorage.setItem('updatedUsers',JSON.stringify(this.users));
    }
    editUser(user): void {
        window.localStorage.removeItem("editUserId");
        window.localStorage.setItem("editUserId", user.id.toString());
        this.router.navigate(['edit-user']);
    };
    Logout(){
        localStorage.removeItem("loggedUser");
        this.router.navigate(['login']); 
       
    }
    addUser(): void {
        this.router.navigate(['add-user']);
    };
}
