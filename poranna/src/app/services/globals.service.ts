import { Injectable } from '@angular/core';

export const LABELS = ['O nas', 'Bukiety', 'Bukiety ślubne', 'Dekoracje', 'Wiązanki pogrzebowe', 'Stroiki'];

export const STORY = 'Dziękujemy za wspólnie spędzone lata.\n' +
    'Było nam miło z Państwem współpracować.\n' +
    'Jednocześnie informujemy, że pod tym samym adresem i nr telefonu\n' +
    'nadal będzie działać kwiaciarnia.\n';

@Injectable({
    providedIn: 'root',
})
export class GlobalsService {
    currentPage: number = 0;
}
