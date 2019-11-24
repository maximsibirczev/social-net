import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';


import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  results: any[];
  size: number = 8;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=' + this.size + '&nat=gb')
      .pipe(
        map(response => {
          this.results = response.results;
          return this.results.map(function (user: any) {
            return {
              name: user.name.first + ' ' + user.name.last,
              image: user.picture.large,
              geo: user.location.city + ' ' + user.location.street.name + ' ' + user.location.street.number
            };
          });
        })
      );
  }

  setSize(size) {
    this.size = size;
  }
}
