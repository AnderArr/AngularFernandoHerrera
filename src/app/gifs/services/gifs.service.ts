import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string ="Xjyw1SIGT2DUz73GFhTj83DYNSabPt9i";
  private servicioURL: string = "https://api.giphy.com/v1/gifs";
  private _historial: string[] = [];
  
  public resultados: Gif [] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this._historial = JSON.parse( localStorage.getItem("historial")! ) || [];
    this.resultados = JSON.parse( localStorage.getItem("response")! ) || [];

  }
  
  buscarGifs(query: string){
    query = query.trim().toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
      console.log('this._historial: ', this._historial);
    }

    const params = new HttpParams()
                                    .set("api_key", this.apiKey)
                                    .set("limit", "10")
                                    .set("q", query);

    this.http.get<SearchGifsResponse>(`${this.servicioURL}/search`,{params})
      .subscribe( (resp) => {
        localStorage.setItem('response', JSON.stringify(resp.data));
        this.resultados = resp.data;
      });
  }
}
