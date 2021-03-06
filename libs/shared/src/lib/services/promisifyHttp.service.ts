import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosRequestConfig } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class PromisifyHttpService {
  constructor(private httpService: HttpService) {}

  get<T>(url: string, config?: AxiosRequestConfig): Observable<T> {
    return this.httpService.get(url, config).pipe(map((res) => res.data));
  }

  post<T>(
    url: string,
    body?: T | null,
    config?: AxiosRequestConfig
  ): Observable<T> {
    return this.httpService
      .post(url, body, config)
      .pipe(map((res) => res.data));
  }

  put<T>(
    url: string,
    body?: T | null,
    config?: AxiosRequestConfig
  ): Observable<T> {
    return this.httpService.put(url, body, config).pipe(map((res) => res.data));
  }

  delete<T>(url: string, config?: AxiosRequestConfig): Observable<T> {
    return this.httpService.delete(url, config).pipe(map((res) => res.data));
  }
}
