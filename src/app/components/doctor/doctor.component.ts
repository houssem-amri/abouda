
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  @Input() doctorInput:any;

  constructor(private router : Router, public modalService: NgbModal) { }

  ngOnInit() {
  }
  openModal(data:any) {
  console.log('__________',data);
  
      const modalRef = this.modalService.open(ModalContentComponent);
      modalRef.componentInstance.data = data;
      modalRef.result.then((result) => {
        if (result) {
          console.log(result);
        }
      });
  

    // modalRef.componentInstance.passEntry.subscribe((receivedEntry) => {
    //   console.log(receivedEntry);
    // })
  }

 
  

}

