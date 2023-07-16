import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject , throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();

  createAndStorePost(title:string, content:string){
    // Send Http request
    const postData:Post={title:title, content: content};
    this.http.post('https://firstproject-71054-default-rtdb.firebaseio.com/post.json',postData,{
        observe: 'response',
        responseType: 'text'
    })
    .subscribe(responseData =>{
      console.log(responseData.body);
    },error => {
      this.error.next(error.message);
    });
  }
  fetchPost(){
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print','pretty');
    searchParams = searchParams.append('custom','key');

    return this.http.get<{[key:string]:Post}>('https://firstproject-71054-default-rtdb.firebaseio.com/post.json',{
      headers: new HttpHeaders({'Custom-Header':'Hello'}),
      params: searchParams,
      responseType: 'json'
    })
    .pipe(
      map(responseData => {
      const postsArray:Post[]=[];
      for (const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key], id:key});
        }
      }
      return postsArray;
    }),catchError( errorRes => {
      //send to analytics server
      return throwError(errorRes);
    }));
  }

  deletPosts(){
    return this.http.delete('https://firstproject-71054-default-rtdb.firebaseio.com/post.json',{
      observe:'events'
    }).pipe(
      tap(event=>{
        console.log(event);
        if (event.type === HttpEventType.Response){
          console.log(event.body)
        }
      })
    );
  }
  constructor(private http: HttpClient) { }
}
