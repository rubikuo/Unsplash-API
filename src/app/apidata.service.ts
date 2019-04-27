import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private http: HttpClient) { }

  getApiData(term: any) {
// tslint:disable-next-line: max-line-length
    return this.http.get(`https://api.unsplash.com/search/photos?client_id=43687394d12cd832aa9c8792dd24ece1f45a0a9b6e1a9d23de17064f0a77831f&client_secret=a4d4ff9c272e44eb06ebfb9165d1cc671f884b71cdd2ac3bdb851f54a0b22ea9&query=${term}&per_page=60&page=3`);

  }

  getUserPhoto(id: string) {
// tslint:disable-next-line: max-line-length
    return this.http.get(`https://api.unsplash.com/photos?id=${id}&client_id=43687394d12cd832aa9c8792dd24ece1f45a0a9b6e1a9d23de17064f0a77831f&client_secret=a4d4ff9c272e44eb06ebfb9165d1cc671f884b71cdd2ac3bdb851f54a0b22ea9&per_page=60&page=5`);
  }


   getUser(name: string) {
// tslint:disable-next-line: max-line-length
     return this.http.get(`https://api.unsplash.com/users/photos?username=${name}&client_id=43687394d12cd832aa9c8792dd24ece1f45a0a9b6e1a9d23de17064f0a77831f&client_secret=a4d4ff9c272e44eb06ebfb9165d1cc671f884b71cdd2ac3bdb851f54a0b22ea9&per_page=60&page=5`);
   }

}
