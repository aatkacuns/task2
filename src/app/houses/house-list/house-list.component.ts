import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { House } from 'src/app/shared/house.model';
import { HouseService } from 'src/app/shared/house.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styles: [
  ]
})
export class HouseListComponent implements OnInit {

  constructor(public service: HouseService,
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(h:House){
    this.service.formData = Object.assign({},h);
  }

  onDelete(HId) {
    if(confirm("Are u sure to delete this record ? ")) {
   this.service.deleteHouse(HId)
   .subscribe(res => {
     this.service.refreshList();
     this.toastr.warning("Deleted successfully","House Register");
   },
    err=> {
      console.log(err);
    }) 
  }
}

}
