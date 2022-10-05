import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IContactForm } from 'src/app/clinet/interfaces/contact-form.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-admin-messages',
  templateUrl: './admin-messages.component.html',
  styleUrls: ['./admin-messages.component.scss']
})
export class AdminMessagesComponent implements OnInit {

  messageList$: Observable<any>;
  messageLiostCollectionRef = this.dataService.createCollection('email-list');

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.messageList$ = this.dataService.getData(this.messageLiostCollectionRef);
  }

  public toggleRead(message: IContactForm) {
    this.messageLiostCollectionRef.doc(message.id).update({read: !message.read});
  }

  public deleteMessage(message: IContactForm) {
    this.messageLiostCollectionRef.doc(message.id).delete();
  }
}
