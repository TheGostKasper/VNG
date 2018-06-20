import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeptService } from '../service/dept.service';
import { Dept } from '../modal/dept.model';

@Component({
  selector: 'app-list-dept',
  templateUrl: './list-dept.component.html',
  styleUrls: ['./list-dept.component.css']
})
export class ListDeptComponent implements OnInit {
  depts = [];
  constructor(private router: Router, private deptService: DeptService) { }

  ngOnInit() {
    this.deptService.getDepts()
      .subscribe(data => {
        this.depts = data;
      });
  }
  deleteDept(dept: Dept): void {
    this.deptService.deleteDept(dept.id)
      .subscribe(data => {
        this.depts = this.depts.filter(u => u !== dept);
      });
  }

  editDept(dept: Dept): void {
    localStorage.removeItem('editDeptId');
    localStorage.setItem('editDeptId', dept.id.toString());
    this.router.navigate(['edit-dept']);
  }

  addDept(): void {
    this.router.navigate(['add-dept']);
  }

}
