import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import {map,take} from 'rxjs/operators'
import { promise } from 'protractor';

export interface GooglemapsService{
  id?:string
  lat:number
  lng:number
  horaires:string
}

@Injectable({
  providedIn: 'root'
})
export class GooglemapsService {

  constructor() { }
}
