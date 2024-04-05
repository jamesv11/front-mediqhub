import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }


  getDoctors() {
    return this.http.get<any>('http://localhost:3000/v1/api/doctor/getDoctors')
  }

  createAppointment(body:any){
    return this.http.post<any>('http://localhost:3000/v1/api/appointment/createAppointment', body)
  }
}
