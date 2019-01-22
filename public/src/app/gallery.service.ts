import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private _http:HttpClient) { }
  getAlbums(){
    return this._http.get("http://localhost:3000/apis/galleries");
  }
  delete(id){
    return this._http.delete("http://localhost:3000/apis/gallery/"+id);
  }
  addAlbum(data){
    return this._http.post("http://localhost:3000/apis/gallery",data);
  }
}
