import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  isLoading = false;
  isSuccessful = false;
  formClassState = 'ui eşit genişlikte form yükleme segmenti';

  contactMeForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    contactNumber: new FormControl('', [
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200)
    ])
  })

  constructor(
    private dataService: DataService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  public sendEmail() {
    this.toggleLoading();
    this.dataService.saveContactDetails(this.contactMeForm.value)
      .then(() => {this.toggleSuccess()})
      .catch(err => console.error('Bir şeyler yanlış gitti: ', err))
      .finally(() => {
        this.contactMeForm.reset()
        if (!this.isSuccessful) { this.toggleLoading(); }
      });
  }

  public toggleLoading() {
    if (!this.isLoading) {
      this.isLoading = true;
      this.formClassState = 'ui eşit genişlikte form yükleme segmenti';
    } else {
      this.isLoading = false;
      this.formClassState = 'ui eşit genişlikte form yükleme segmenti'
    }
  }

  public toggleSuccess() {
    if (!this.isSuccessful) {
      this.isSuccessful = true;
      this.messageService.add({
        severity: 'info',
        summary:'Başarılı',
        detail:'Bana bir mesaj gönderdin. Bize ulaştığınız için teşekkürler!'
      });
      // this.formClassState = 'ui eşit genişlikte form yükleme segmenti success';
    } else {
      this.isSuccessful = false;
      this.messageService.add({
        severity: 'error',
        summary:'Başarısız',
        detail:'Sanırmı bir şeyler yanlış gitti, tekrar denemek ister misin?'
      });
      // this.formClassState = 'ui eşit genişlikte form yükleme segmenti'
    }
  }

  public hideSuccess(): boolean {
    return this.contactMeForm.touched;
  }
}
