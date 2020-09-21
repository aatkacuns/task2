import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { HouseService } from 'src/app/shared/house.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styles: [
  ]
})
export class HouseComponent implements OnInit {

  constructor(public service: HouseService,
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
    this.service.formData.HId = 0
  }

  resetForm(form?:NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
    HId: 0,
    HouseNumber: null,
    HouseCity: '',
    HouseCountry: '',
    HousePostIndex: ''


    }
  }

  onSubmit(form:NgForm){
    if(this.service.formData.HId==0)
      this.insertRecord(form);
    else
    this.updateRecord(form)

  }


  insertRecord(form:NgForm){
    this.service.postHouse().subscribe(
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
    this.service.putHouse().subscribe(
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
