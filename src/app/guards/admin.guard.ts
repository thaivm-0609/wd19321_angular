import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const adminGuard: CanActivateChildFn = (childRoute, state) => {
    const token = localStorage.getItem('token');
    const router = inject(Router); //khai báo router để điều hướng người dùng
    if (!token) { //nếu không có token => đẩy về trang login
      router.navigate(['/login']);
  
      return false;
    }
  
    return true;
};
