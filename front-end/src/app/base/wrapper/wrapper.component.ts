import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { toast } from '../alert/toast-sweet-alert';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: 'wrapper.component.html',
  styleUrls: ['wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  logout() {
    Swal.fire({
      title: 'Do you want to signout?',
      showCancelButton: true,
      icon: 'warning'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout();
        this.router.navigateByUrl('/auth');
        toast(true, "You have been logged out");
      }
    });
  }
}
