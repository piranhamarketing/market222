import { DomElementSchemaRegistry } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filterpipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:String){
    

    if(value.length===0 || filterString==='')
    {
      return value;
    }

    const items=[];
    filterString=filterString.toUpperCase();
    
    for(const entries of value)
    {
      if(entries['NAMEOFABSENCETYPE'].toUpperCase().includes(filterString))
      {
        items.push(entries);
      }
    }
    return items;
  }

}
