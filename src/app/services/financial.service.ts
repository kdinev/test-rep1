import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { Financial } from '../static-data/financial';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {
  public getBoxOfficeRevenue(): Observable<BoxOfficeRevenueType[]> {
    return of(Financial['BoxOfficeRevenueType']);
  }
}
