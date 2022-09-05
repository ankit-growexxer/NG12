import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './../shared/auth.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
})

export class UserProfileComponent implements OnInit {
    currentUser: any = {};

    constructor(
        public authService: AuthService,
        private actRoute: ActivatedRoute
    ) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.authService.getUserProfile().subscribe((res) => {
        this.currentUser = res.data;
        });
    }

    ngOnInit() {}
}