import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HomeService {

    // private baseUrl = GlobalVariable.BASE_API_URL;

    constructor(private http: Http) { }

    getHomeInfo() : Promise<{}>{
        return Promise.resolve({title:'My Home'});
    }

    private handleError(error: any) {
        let errorMsg = error.message
        console.error(errorMsg);
        // throw an application level error
        return Observable.throw(errorMsg);
    }

}
