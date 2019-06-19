import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentTypesService {

  constructor(private contentService : HttpClient) { }

  getcontentTypes(){
  let types =  this.contentService.get("../../assets/content-types.json");
  console.log(types);
  return types;
  }
}
