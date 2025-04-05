import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import path from 'path';
import { adminGuard } from './guards/admin.guard';

//PATH KHÔNG ĐƯỢC BẮT ĐẦU BẰNG DẤU /(slash)
export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: 'create',
        component: CreateComponent,
        //cú pháp khai báo guard guardType: [guardName]
        canActivate: [authGuard]
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
    {
        path: 'admin',
        canActivateChild: [adminGuard],
        children: [
            {
                path: 'students',
                children: [
                    {
                        path: '',
                        component: ListComponent
                    },
                    {
                        path: 'create',
                        component: CreateComponent
                    }
                ]
            },
        ]
    },
    { //luôn nằm cuối cùng ở trong route
        path: '**',
        component: NotFoundComponent
    }
];
