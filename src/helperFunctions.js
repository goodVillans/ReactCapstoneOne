export function showNotification(setter){
   setter(true);
   setTimeout(() => {
      setter(false);
   }, 3000);
}

export function checkWin(correct, wrong, word){
   let status = 'win';
   // check if win
   word.split('').forEach(letter => {
      if(!correct.includes(letter)){
         status = '';
      };
   });
   // check for loss against number of figure appendiges
   if(wrong.length === 6) status = 'loss';

   return status;
}