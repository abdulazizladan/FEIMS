import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { UserService } from '../../services/user.service';

import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'actions'];
  dataSource: MatTableDataSource<any>;

  constructor( public dialog : MatDialog, private _userService : UserService ){ 
    this.getUsers();
  }

  getUsers(){
    this._userService.getUsers().subscribe(
      res => {
      this.dataSource = new MatTableDataSource(res);
    }, err => {
      console.log("Could not fetch resource")
    }
    )
  }

  addUser(){
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width : '500px'
    });

    //dialogRef.afterClosed().subscribe(result => {
    //  alert('User added')
    //})
  }

  ngOnInit(): void {
    
  }

  applyFilter(filterValue : string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
