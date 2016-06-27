$(document).ready( function() {
    //div inhoud word variabele en gedetached
    var hal = $('#deHal').detach();
    var trick = $('#trickers').detach();
    var eten = $('#eten').detach();
    
    
    // events bij de thumbs : modaal venster openen met de passende inhoud er in
    $('#deHalThumb').on('click', function() {
       modaalObj.openen({inhoud: hal, breedte: 600});
    });
    $('#trickersThumb').on('click', function() {
       modaalObj.openen({inhoud: trick, breedte: 700});
    });
    $('#etenThumb').on('click', function() {
       modaalObj.openen({inhoud: eten, breedte: 500});
    });
    
})