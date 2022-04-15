import { Pipe, PipeTransform } from '@angular/core';
import { Medicion} from '../model/medicion'

@Pipe({
  name: 'medicionesPipe'
})
export class MedicionesPipePipe implements PipeTransform {

  transform(first: Medicion): string {
    const out='Medicion:'+ first.medicionId;
    return out;
  }

}
