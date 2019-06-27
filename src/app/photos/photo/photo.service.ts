import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './photo';

const url = 'http//localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

    constructor(private http: HttpClient) {
    }

    listFromUser(userName: string) {
        return this.http.get<Photo[]>(url + userName + '/photos');
    }

}