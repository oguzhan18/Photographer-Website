import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import {Observable} from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cvDownloadLink = '';
  githubLink = '';
  linkedinLink = '';

  messagesCount$: Observable<any>;
  items: MenuItem[];

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.messagesCount$ = this.dataService.getMessagesCount();
    this.items = [
      { label: 'CV', icon: 'pi pi-cloud-download', url: this.cvDownloadLink, style: "" },
      { label: 'GitHub', icon: 'pi pi-github', url: this.githubLink, style: "" },
      { label: 'LinkedIn', icon: '', url: this.linkedinLink, style: "" }
    ]
  }

  public logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/'], { relativeTo: this.route }))
      .catch(err => {
        console.log('Error logging out: ', err.message);
        this.router.navigate(['/'], { relativeTo: this.route });
      });
  }
}
