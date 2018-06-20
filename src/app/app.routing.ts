import { RouterModule, Routes } from '@angular/router';
import { EditDeptComponent } from './edit-dept/edit-dept.component';
import { ListDeptComponent } from './list-dept/list-dept.component';

const routes: Routes = [
    { path: 'list-dept', component: ListDeptComponent },
    { path: 'edit-dept', component: EditDeptComponent },
    { path: '', component: ListDeptComponent }
];

export const routing = RouterModule.forRoot(routes);
