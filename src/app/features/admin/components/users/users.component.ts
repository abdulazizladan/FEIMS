import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor( public dialog : MatDialog ){ 

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

}
