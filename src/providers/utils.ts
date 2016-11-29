import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { Comment }           from '../comment';

@Injectable()
export class UtilService{
	public dataObject;
	cmsKey:String = "";
	private baseUrl: string ='https://scotch-http-api.herokuapp.com/api/comments';
	private cmsUrl = 'data/cmsjson.json';  // URL to web API
	
	constructor(private http : Http){
		
	}

	getJSONData(): Observable<Comment[]> {
		return this.http.get(this.baseUrl)
									.map((res:Response) => res.json())
									.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	staticData(): any{
		return Observable.forkJoin(
			this.http.get(this.cmsUrl).map((res:Response) => res.json()),
			)
	}
}