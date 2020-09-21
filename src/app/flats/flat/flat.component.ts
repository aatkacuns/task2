import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Flat } from 'src/app/shared/flat.model';
import { FlatService } from 'src/app/shared/flat.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styles: [
  ]
})
export class FlatComponent implements OnInit {

  constructor(public service: FlatService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
   
  }

  resetForm(form?:NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
    FlatId: 0,
    FlatNumber: null,
    FlatFloor: null,
    FlatRoomsAmmount: null,
    FlatResidentAmmount: null,
    FlatFullArea: null,
    FlatLivingSpaceArea:null,
    HouseId: null,


    }
  }
  onSubmit(form:NgForm){
    if(this.service.formData.FlatId==0)
      this.insertRecord(form);
    else
    this.updateRecord(form)

  }


  insertRecord(form:NgForm){
    this.service.postFlat().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Submitted successfully","House Register");
      },
      err => {
        console.log(err);
      }
    )
  }

  updateRecord(form:NgForm){
    this.service.putFlat().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info("Submitted successfully","House Register");
      },
      err => {
        console.log(err);
      }
    )
  }


}
