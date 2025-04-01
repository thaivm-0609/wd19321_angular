import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

//PATH KHÔNG ĐƯỢC BẮT ĐẦU BẰNG DẤU /(slash)
export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    { //truyền params qua url /:tenParam
        path: 'edit/:id',
        component: EditComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    { //luôn nằm cuối cùng ở trong route
        path: '**',
        component: NotFoundComponent
    }
];
