import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any): any {
    const newServer = [];

    if ( value.length === 0 ){
      return value;
    }else{

      for (const server of value){

       server.instanceType = server.instanceType.split('').reverse().join('');
       newServer.push(server);

      }

      newServer.sort(function(a, b){

        const Aname = a.name;
        const Bname = b.name;

        if (Aname < Bname){

          return -1;

        }else if (Aname > Bname){

          return 1;

        }else{

          return 0;
        }

      } );

      return newServer;


    }


  }

}
