import { Pipe, PipeTransform } from '@angular/core';
import { LogRiegos} from '../model/logRiegos';

@Pipe({
  name: 'logRiegoPipe'
})
export class LogRiegoPipePipe implements PipeTransform {

  transform(first: LogRiegos): string {
    const output = 'Id:'+first.logRiegoId + ' | Fecha:' + first.fecha +' | Ap:'+ first.apertura + ' | EV:' + first.electrovalvulaId;
    return output;
  }

}
