import { Component, OnInit } from '@angular/core';
import { EvenementService } from '../evenement.service';
import { Evenement } from '../Evenement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-evenement',
  templateUrl: './create-evenement.component.html',
  styleUrls: ['./create-evenement.component.scss']
})
export class CreateEvenementComponent implements OnInit {
evenement: Evenement= new Evenement();
submitted = false;

constructor(private evenementservice: EvenementService,
  private router: Router) { }

  ngOnInit(): void {
  }
  newEvenement(): void {
    this.submitted = false;
    this.evenement= new Evenement();
  }

  save() {
    this.evenementservice
    .createEvenement(this.evenement).subscribe(data => {
      console.log(data)
      this.evenement = new Evenement();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
     this.router.navigate(['/user-profile']);
  }

}
