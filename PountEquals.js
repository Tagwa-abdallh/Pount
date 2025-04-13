SudanesePounds = document.getElementById('SudanesePounds');
EgyptPounds = document.getElementById('EgyptPounds');
dollar = document.getElementById('dollar');
 
SudanesePounds.onkeyup = function(){
    EgyptPounds.value = SudanesePounds.value/51;
    dollar.value = SudanesePounds.value/2560 ;
     
}
EgyptPounds.onkeyup = function(){
    SudanesePounds.value = EgyptPounds.value*51 ;
    dollar.value = EgyptPounds.value/51.2860 ;
     
}
dollar.onkeyup = function(){
    SudanesePounds.value = dollar.value*2560 ;
    EgyptPounds.value = dollar.value*51.2860 ;
    
     
}