import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Flat } from 'src/app/shared/flat.model';
import { FlatService } from 'src/app/shared/flat.service';

@Component({
  selector: 'app-flat-list',
  templateUrl: './flat-list.component.html',
  styles: [
  ]
})
export class FlatListComponent implements OnInit {

  constructor(public service: FlatService,
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(f:Flat){
    this.service.formData = Object.assign({},f);
  }

  onDelete(FlatId) {
    if(confirm("Are u sure to delete this record ? ")) {
   this.service.deleteFlat(FlatId)
   .subscribe(res => {
     this.service.refreshList();
     this.toastr.warning("Deleted successfully","Flat Register");
   },
    err=> {
      console.log(err);
    }) 
  }
}


}
