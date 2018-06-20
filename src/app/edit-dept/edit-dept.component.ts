import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeptService } from '../service/dept.service';
import { Dept } from '../modal/dept.model';
import _ from 'lodash';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-edit-dept',
  templateUrl: './edit-dept.component.html',
  styleUrls: ['./edit-dept.component.css']
})
export class EditDeptComponent implements OnInit {
  dept: Dept;
  editForm: FormGroup;
  language = 'en';
  cpy_fd = {};
  prev_lang = 'en';
  langs = [{ name: 'English', shortName: 'en' }, { name: 'العربية', shortName: 'ar' }];

  constructor(private formBuilder: FormBuilder, private router: Router, private deptservice: DeptService) { }

  ngOnInit() {
    const deptId = localStorage.getItem('editDeptId');
    if (!deptId) {
      alert('Invalid action.');
      this.router.navigate(['list-dept']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      nameEn: ['', Validators.required],
      nameAr: ['', Validators.required]
    });
    this.deptservice.getDeptById(+deptId)
      .subscribe(data => {
        this.editForm.setValue(data);
        this.cpy_fd = data;
      });
  }
  onChange(value) {
    // this.language = value;
    if (!_.isEqual(this.cpy_fd, this.editForm.value)) {
      document.getElementById('btnModal').click();
    } else {
      this.prev_lang = value;
    }
  }
  discard() {
    // this.editForm.setValue(this.cpy_fd);
    this.language = this.prev_lang;
  }
  onSubmit(language: '') {
    if (!_.isEqual(this.cpy_fd, this.editForm.value)) {
      this.deptservice.updateDept(this.editForm.value).subscribe(data => {
        alert('data updated successfully');
        this.router.navigate(['list-dept']);
      });
    }
  }


}
