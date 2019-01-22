import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-add-gallery',
  templateUrl: './add-gallery.component.html',
  styleUrls: ['./add-gallery.component.css']
})
export class AddGalleryComponent implements OnInit {

  constructor(private _gal:GalleryService) { }
  gallery:FormGroup;
  ngOnInit() {
    this.init();
  }
  init(){
    this.gallery = new FormGroup({
      title:new FormControl(''),
      image:new FormControl(''),
      description:new FormControl('')
    })
  }
  submit(){
    this._gal.addAlbum(this.gallery.value).subscribe((res)=>{
      if(res){
        console.log("succefully Added");
        this.gallery.reset();
      }
    },(err)=>{
      console.log(err);
    });
  }
}
