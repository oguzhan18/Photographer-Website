import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { DataService } from '../../services/data.service';
import { IFormFields } from '../../interfaces/form-fields.interface';
import { IFormModal } from '../../interfaces/form-modal.interface';
import { IProfile } from '../../interfaces/profile.interface';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-admin-about-me',
  templateUrl: './admin-about-me.component.html',
  styleUrls: ['./admin-about-me.component.scss']
})
export class AdminAboutMeComponent implements OnInit {

  $profile: Observable<any>;
  profileCollectionRef = this.dataService.createCollection('profile');
  private itemId: string;

  uploadPercent: Observable<number>;

  formFields: Array<IFormFields> = [
    {
      label: 'First Name',
      formControlName: 'firstName',
      placeholder: 'First name'
    },
    {
      label: 'Last Name',
      formControlName: 'lastName',
      placeholder: 'Last name'
    },
    {
      label: 'Job Title',
      formControlName: 'jobTitle',
      placeholder: 'Job title'
    },
    {
      label: 'Company Name',
      formControlName: 'companyName',
      placeholder: 'Company Name'
    },
    {
      label: 'Start Year',
      formControlName: 'startYear',
      placeholder: 'Start year'
    },
    {
      label: 'About Me',
      formControlName: 'aboutMe',
      placeholder: 'About me'
    },
  ];

  formModalContent: IFormModal = {
    title: 'Edit your profile information',
    buttonText: 'Edit profile',
    isVisible: false,
    isEditing: false,
    formFields: this.formFields
  };

  constructor(
    private fsStorage: AngularFireStorage,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.$profile = this.dataService.getData(this.profileCollectionRef);
  }

  public uploadImage(event, id:string) {
    const file = event.target.files[0];
    const filePath = 'profile';
    const fileRef = this.fsStorage.ref(filePath);
    const task = fileRef.put(file);

    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().toPromise()
          .then(data => this.saveDownloadUrl(id, data, this.profileCollectionRef))
          .catch(err => console.log('Something went wrong: ', err))
      })
    ).subscribe();
  }

  public saveDownloadUrl(documentId: string, downloadUrl: string, profileColRef: AngularFirestoreCollection) {
    this.dataService.saveDownloadUrl(documentId, downloadUrl, profileColRef);
  }

  public editProfile($event) {
    const { firstName, lastName, jobTitle, startYear, companyName, aboutMe } = $event;
    console.log($event);
    this.profileCollectionRef.doc(this.itemId).update({ firstName, lastName, jobTitle, startYear, companyName, aboutMe });
  }

  public editModal(profile: IProfile) {
    this.formModalContent.isEditing = true;
    this.formModalContent.isVisible = true;
    this.formModalContent.title = 'Edit your profile';
    this.formModalContent.buttonText = 'Save Edits';

    this.itemId = profile.id;
  }
}
