import { Component, OnInit } from '@angular/core';

import{UserService}  from '../../shared-service/user.service';
import{User}  from '../../user';
import{Nid} from '../../nid';

import{Router}  from '@angular/router';
import { Passport } from '../../passport';
import { error } from 'protractor';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})

export class ListuserComponent implements OnInit {
  private users:User[];
  private nids:Nid[];
  private passports:Passport[];
  



  constructor(private _userService:UserService, private _router:Router) { }

  ngOnInit() {
      // this._userService.getUsers().subscribe((users)=>{
      //   console.log(users);
      //   this.users=users;
      // },(error)=>{
      //   console.log(error);
      // })

      this._userService.getNids().subscribe((nids)=>{
        console.log(nids);
        this.nids=nids;
      },(error)=>{
        console.log(error);
      })

      this._userService.getPassports().subscribe((passports)=>{
        console.log(passports);
        this.passports=passports;
      },(error)=>{
        console.log(error);
      })
  }

/** Nid actions */


deleteNid(nid){
  this._userService.deleteNid(nid.nid).subscribe((data)=>{
    this.nids.splice(this.nids.indexOf(nid),1);
  },(error)=>{
    console.log(error);
  });
}

updateNid(nid){
  this._userService.setterNid(nid);
  this._router.navigate(['/nid']);
}

createNid(){
  let nid = new Nid();
  this._userService.setterNid(nid);
  this._router.navigate(['/nid']);
}

/********************* Passport actions */

deletePassport(passport){
  this._userService.deletePassport(passport.ppid).subscribe((data)=>{
    this.passports.splice(this.passports.indexOf(passport),1);
  },(error)=>{
    console.log(error);
  });
}

updatePassport(passport){
  this._userService.setterPassport(passport);
  this._router.navigate(['/passport']);
}

createPassport(){
  let passport = new Passport();
  this._userService.setterPassport(passport);
  this._router.navigate(['/passport'])
}


/******************** User actions */
/**
  deleteUser(user){
    this._userService.deleteUser(user.id).subscribe((data)=>{
        this.users.splice(this.users.indexOf(user),1);
    },(error)=>{
      console.log(error);
    });
  }

  updateUser(user){  
     this._userService.setter(user);
     this._router.navigate(['/op']);
  }

  newUser(){
   let user = new User();
    this._userService.setter(user);
     this._router.navigate(['/op']); 
  }
 */
}