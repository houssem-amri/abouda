import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RendezVousService {
  rendezVousURL: string = "http://localhost:4000/rendezVous";

  constructor(private httpClient: HttpClient) {}

  addRendezVous(data) {
    console.log('dara',data );
    
    return this.httpClient.post<{ message: string }>(this.rendezVousURL, data);
  }

}
