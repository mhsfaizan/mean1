import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor( private _gal:GalleryService) { }
  albums:any[];
  isAdd:boolean = false;
  ngOnInit() {
    this._gal.getAlbums().subscribe((albums:any[])=>{
        this.albums = albums;
    });
  }
  delete(id){
    this._gal.delete(id).subscribe((res:any)=>{
      if(res.n==1 && res.ok==1){
        console.log("succefully deleted");
      }
      else{
        console.log("Not Deleted");
      }
    });
  }
  add(){
    this.isAdd = true;
  }
}
