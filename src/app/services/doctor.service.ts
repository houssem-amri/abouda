import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctorURL: string ="http://localhost:4000/doctors";
  constructor(private httpClient : HttpClient) { }

  getAllDoctors(){
    return this.httpClient.get<{allDoctors:any}>(this.doctorURL);
  }
  getDoctorById(id){
return this.httpClient.get(`${this.doctorURL}/${id}`);
  }
//   deleteDoctor(id){
//     return this.httpClient.delete(`${this.doctorURL}/${id}`);
//   }
  addDoctor(doctor,image:File){
    const formdata = new FormData();
    formdata.append('name', doctor.name);
    formdata.append('departement', doctor.departement);
    formdata.append('localization', doctor.localization);
    formdata.append('image', image);

    return this.httpClient.post<{ message: string }>(this.doctorURL,formdata);
  }
//   upDateDoctor(NewDoctor){
// return this.httpClient.put(`${this.doctorURL}/${NewDoctor.id}`,NewDoctor);
//   }
//   searchDoctorByLocal(local){
//     return this.httpClient.get(`${this.doctorURL}/${local}`);
//   }
editDoctor(doctor){
  return this.httpClient.put<{message:string}>(`${this.doctorURL}/${doctor._id}`,doctor);
}

}
