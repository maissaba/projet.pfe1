import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import {map,take} from 'rxjs/operators'
import { promise } from 'protractor';

export interface Poste{
  id?:string
  name:string
  codePostale:number
  governorate:string
  lat:number
  lng:number
}
@Injectable({
  providedIn: 'root'
})
export class PosteService {
  private postes:Observable<Poste[]>
  private postesCollection:AngularFirestoreCollection<Poste>;

  constructor(private afs:AngularFirestore) {
    this.postesCollection=this.afs.collection<Poste>('postes')
    this.postes=this.postesCollection.snapshotChanges().pipe(
      map(actions =>{
        return actions.map(res => {
          const data=res.payload.doc.data();
          const id= res.payload.doc.id;
          return{id, ...data};
        });
      })
    );
   }

   getPostes():Observable<Poste[]>{
     return this.postes
   }
   getPoste(id:string):Observable<Poste>{
    
    return this.postesCollection.doc<Poste>(id).valueChanges().pipe(
      take(1),
      map(poste => {
        poste.id=id;
        return poste;})
    
        )
  }

  addPoste(poste:Poste):Promise<DocumentReference>{
    return this.postesCollection.add(poste);
  }

  updatePoste(poste:Poste):Promise<void>{
    return this.postesCollection.doc(poste.id).update({
      name:poste.name,
      codePostale:poste.codePostale,
      governorate:poste.governorate,
      lat:poste.lat,
      lng:poste.lng
    });
  }

  deletePoste(id:string){
    return this.postesCollection.doc(id).delete();
  }
}
