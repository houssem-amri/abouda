import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { RendezVousService } from "src/app/services/rendez-vous.service";

@Component({
  selector: "app-modal-content",
  templateUrl: "./modal-content.component.html",
  styleUrls: ["./modal-content.component.css"],
})
export class ModalContentComponent implements OnInit {
  rendezVous: any = {};
  ConnectedUser: any;
  @Input() public data;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  rendezVousForm: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private router: Router,
    private formBuilder: FormBuilder,
    private rendezVousService: RendezVousService
  ) {}

  ngOnInit() {
    this.ConnectedUser = JSON.parse(localStorage.getItem("ConnectedUser"));
    this.rendezVousForm = this.formBuilder.group({
      date: [""],
    });
  }
  passBack() {
    this.passEntry.emit(this.data);
    this.activeModal.close(this.data);
  }
  addRendezVous(data) {
    this.rendezVous.doctorId = this.data._id;
    this.rendezVous.doctorName = this.data.name;
    this.rendezVous.doctoreAdress = this.data.departement;
    this.rendezVous.clientId = this.ConnectedUser.id;
    this.rendezVous.clientName = this.ConnectedUser.fullName;
    this.rendezVous.date = data.date;
    console.log("this.rendezVous", this.rendezVous);

    this.rendezVousService.addRendezVous(this.rendezVous).subscribe(() => {
      this.passBack();
    });
  }
}
