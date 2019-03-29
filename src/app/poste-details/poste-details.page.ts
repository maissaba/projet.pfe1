import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PosteService, Poste } from '../service/poste.service';

@Component({
  selector: 'app-poste-details',
  templateUrl: './poste-details.page.html',
  styleUrls: ['./poste-details.page.scss'],
})
export class PosteDetailsPage implements OnInit {
  poste:Poste
id;
  constructor(private activatedRoute:ActivatedRoute,private posteService:PosteService) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
  }
 
  ionViewWillEnter(){
    if(this.id){
      this.posteService.getPoste(this.id).subscribe(poste =>{
        this.poste=poste;
      });
    }
  }
}
