import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dept } from '../modal/dept.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/RX';

@Injectable()
export class DeptService {
    // fakeDet = [
    //     { id: 1, nameEn: 'Khakid', nameAr: 'خالد' },
    //     { id: 2, nameEn: 'Tom', nameAr: 'توم' },
    //     { id: 3, nameEn: 'Hary', nameAr: 'هاري' },
    //     { id: 4, nameEn: 'praks', nameAr: 'باركس' },
    // ];

    constructor(private http: HttpClient) { }
    baseUrl = 'http://localhost:57878/api/department';

    getDepts() {
        // return Observable.of(this.fakeDet);
         return this.http.get<any[]>(this.baseUrl);
    }

    getDeptById(id: number) {
        //  const res = this.fakeDet.filter(d => d.id === id);
        //  return Observable.of(res[0]);

         return this.http.get<any>(this.baseUrl + '/' + id);
    }

    createDept(dept: Dept) {
        return this.http.post(this.baseUrl, dept);
    }

    updateDept(dept: Dept) {
        // const res = this.fakeDet.filter(d => d.id === dept.id);
        // return Observable.of(res[0]);
        return this.http.put(this.baseUrl + '/' + dept.id, Dept);
    }

    deleteDept(id: number) {
        return this.http.delete(this.baseUrl + '/' + id);
    }
}
