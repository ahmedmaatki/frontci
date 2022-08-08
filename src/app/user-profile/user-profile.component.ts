import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Evenement } from '../Evenement';
import { EvenementService } from '../evenement.service';




@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
 //evenements: Observable<Evenement[]>;
evenements: any;
 idevent:number;
 searchText: any;



  
  
  
  constructor(private evenementService: EvenementService,
    private router: Router) {}

  ngOnInit() :void{
    let resp=this.evenementService.getEvenementList();
    resp.subscribe((data)=>this.evenements=data);
  }
  reloadData() {
    this.evenements =   this.evenementService.getEvenementList();
    console.log(this.evenements);
  }

  public delEvt(idevent:number){
    let resp=this.evenementService.deleteEvenement(idevent);
    resp.subscribe((data)=>this.idevent);
    window.location.reload();
   }

  public findEvt(){
    let resp=this.evenementService.getEvenement(this.idevent);
    resp.subscribe((data)=>this.evenements=data); 
  }

  deleteEvenement(idevent: number) {
    this.evenementService.deleteEvenement(idevent)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }



  updateEvenement(idevent: number){
    this.router.navigate(['maj', idevent]);

}

public openPDF(): void {
  let DATA: any = document.getElementById('htmlData');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
    PDF.save('Liste des evenements.pdf');
  });
}
addButton() {
  this.router.navigate(['/add']);
  console.log("Ajout");
}
}
