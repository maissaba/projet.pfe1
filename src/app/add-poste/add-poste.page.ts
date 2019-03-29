import { Component, OnInit } from '@angular/core';
import { Poste, PosteService } from '../service/poste.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-poste',
  templateUrl: './add-poste.page.html',
  styleUrls: ['./add-poste.page.scss'],
})
export class AddPostePage implements OnInit {
  
  poste:Poste={ name:'',
    codePostale:0,
    governorate:'',
    lat:0,
    lng:0}
  constructor(private router :Router,private posteService:PosteService) {
    
   }
  add(){
    this.posteService.addPoste(this.poste).then(() => {

    });
    this.router.navigate(["/liste-poste"])
  }
  ngOnInit() {
    
  }

}
