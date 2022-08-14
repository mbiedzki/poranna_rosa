import { Injectable } from '@angular/core';

export const LABELS = ['O nas', 'Bukiety', 'Bukiety ślubne', 'Dekoracje', 'Wiązanki pogrzebowe', 'Stroiki'];

export const STORY = 'Działamy od 2016 r. „Poranna Rosa Florystyka i Kwiaty” to kwiaciarnia inna niż wszystkie.\n' +
    '    Tu każdy bukiet jest oryginalny i dopracowany. Oferujemy Państwu szeroki wachlarz usług florystycznych,\n' +
    '    takich jak bukiety okolicznościowe, kompozycje w koszach, naczyniach szklanych, bukiety ślubne,\n' +
    '    dekoracje sal weselnych, wiązanki i wieńce pogrzebowe. Swoją bogatą ofertę kierujemy zarówno do klientów\n' +
    '    indywidualnych jak i firm.\n' +
    '    Tworzymy oryginalne kompozycje na każdą okazję i kieszeń, traktując każdy bukiet czy wiązankę jako dzieło sztuki,\n' +
    '    dostosowane do indywidualnych potrzeb klienta.';

@Injectable({
    providedIn: 'root',
})
export class GlobalsService {
    currentPage: number = 0;
}
