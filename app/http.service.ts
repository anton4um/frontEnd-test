import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpService{

    constructor(public http: Http){ }

    getData(){
        return this.http.get('data.json')
    }
    sendData(Output){
        const body = JSON.stringify(Output);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
       return this.http.post('/api/dialog/results',body);
    }
}