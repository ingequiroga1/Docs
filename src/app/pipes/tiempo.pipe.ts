import { Pipe, PipeTransform } from '@angular/core';
import { Time } from '@angular/common';

@Pipe({
    name: 'Tiempo'
})
export class PipeTiempo implements PipeTransform {

    transform(value: Time) {
        return value.hours + ':' + value.minutes;
    }

}