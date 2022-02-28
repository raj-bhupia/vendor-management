import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Hire } from 'src/models/hire.model';
import { Position } from 'src/models/position.model';

const ASSET_URL = '/assets/mock/hire-stack';
export type HireType = Hire | null;
@Injectable(
    {
        providedIn: 'root'
    }
)
export class HireService {
    private hireInfo: BehaviorSubject<HireType>= new BehaviorSubject<HireType>(null);
    constructor(private httpClient: HttpClient) { }

    fetchHireInfo() {
        let currentUser = localStorage.getItem('user');
        if(!currentUser) {
            localStorage.setItem('user', environment.currentUser);
            currentUser = environment.currentUser;
        }
        //const url = `http://localhost:8080/fetchAllMyPositions/${currentUser}`;
        const url = `https://ecstacy-demo-project.azurewebsites.net/fetchAllMyPositions/${currentUser}`;
        //const url = `${ASSET_URL}/${currentUser}.json`;
        return this.httpClient.get(url).pipe(map((data: any) => {
            //this.userInfo.next(data?.people?.reviewerInfo as UserInfoType);
            console.log("Hire data is ",data);
            return data;
           }));
    }

    fetchCandidatesScreened(pid: string) {
        //const url = `http://localhost:8080/fetchResumeToPosition/${pid}`;
        const url = `https://ecstacy-demo-project.azurewebsites.net/fetchResumeToPosition/${pid}`;
        //const url = `${ASSET_URL}/posDetails${pid}.json`;
        return this.httpClient.get(url).pipe(map((data: any) => {
            //this.userInfo.next(data?.people?.reviewerInfo as UserInfoType);
            console.log("Candidates screen data is  ",data);
            return data;
           }));
    }

    onAddCandidate(candidate: Position) {
        //const url = `http://localhost:8080/addResumeToPosition`;
        //return this.httpClient.post(url, candidate).pipe(map((data: any) => {
          //  return data;
        //}));
        //return of();
        const url = `https://ecstacy-demo-project.azurewebsites.net/addResumeToPosition`;
        return this.httpClient.post(url, candidate).pipe(map((data: any) => {
            return data;
        }));
    }
}