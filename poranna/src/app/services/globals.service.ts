import { Injectable } from '@angular/core';

export const LABELS = ['O nas', 'Bukiety', 'Bukiety ślubne', 'Dekoracje', 'Wiązanki pogrzebowe', 'Stroiki'];


@Injectable({
    providedIn: 'root',
})
export class GlobalsService {
    currentPage: number = 0;
}
