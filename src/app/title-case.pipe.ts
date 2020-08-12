import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): unknown {
  if(!value){
   return null;
  } 

  let words = value.split(' ');
  for(var currentIndex = 0; currentIndex < words.length ; currentIndex ++ ){
    if( currentIndex > 0 && this.isPreposition(words[currentIndex])){
      words[currentIndex] = words[currentIndex].toLowerCase();
    } else {
      words[currentIndex] = this.doChangeUpperCase(words[currentIndex]);
    }
  } 
  return words.join(' ');
  }

    /**
   * isPreposition method is used to find the given word is contains in preposition or not
   * 
   * @param word 
   */
  private isPreposition(word: string) : boolean {
    let prepositions = [
      'of' ,
      'in' , 
      'the' , 
      'for' , 
      'to' ,
      'from'
    ];
    return prepositions.includes(word.toLowerCase())
  }

  /**
   * doChangeUpperCase method is used to convert the first character of string into uppercase 
   * @param word 
   */
  private doChangeUpperCase(word:string) : string {
    return word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase()
  }
}
