import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenement } from './Evenement';


@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  private baseUrl = 'http://localhost:8081/SpringMVC/event';

  constructor(private http: HttpClient) { }

  createEvenement(evenement: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add-event`, evenement);
  }
  getEvenementList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/retrieve-all-event`);
  }

  updateEvenement( value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update-event/`, value);
  }

  getEvenement(idevent: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getEvenet/${idevent}`);
  }

  rechEvenement(idevent: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getEventById/${idevent}`);
  }

  deleteEvenement(idevent: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-event/${idevent}`, { responseType: 'text' });
  }

  
 
}
