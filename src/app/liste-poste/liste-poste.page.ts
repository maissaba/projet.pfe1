import { Component, OnInit } from '@angular/core';
import { Poste, PosteService } from '../service/poste.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-liste-poste',
  templateUrl: './liste-poste.page.html',
  styleUrls: ['./liste-poste.page.scss'],
})
export class ListePostePage implements OnInit {

  tab: Observable<Poste[]>;
  
constructor(private router :Router,private posteService:PosteService) {
   
 }

  ngOnInit() {
    this.tab = this.posteService.getPostes();
  }

}
