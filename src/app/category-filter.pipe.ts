import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './Product';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(value: any, compare: string): any {
    if (!value || !compare) {
      return value;
    }
    return value.filter((item:Product) => item.category == compare);
  }

}
