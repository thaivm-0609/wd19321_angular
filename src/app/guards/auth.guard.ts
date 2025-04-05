import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  //Kiểm tra ng dùng có quyền truy cập hay không?
  //check token trong localStorage: nếu có => cho ng dùng truy cập
  const token = localStorage.getItem('token');
  const router = inject(Router); //khai báo router để điều hướng người dùng
  if (!token) { //nếu không có token => đẩy về trang login
    router.navigate(['/login']);

    return false;
  }

  return true;
};
