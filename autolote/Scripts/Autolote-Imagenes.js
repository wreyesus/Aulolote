﻿$("#addItem").click(function () {
    $.ajax({
        url: this.href,
        cache: false,
        success: function (html) { $("#editorRows").append(html);}
     });

return false;


});

$("a.deleteRow").live("click", function () {
    var id = $(this)[0].id;
    $(this).parents("div.editorRow:first").remove();

    var gui = GetRandomGUI();
    var htm = '<div class="editorRow">';
    htm += '<input type ="hidden" autoComplete ="off" name ="AutomovilImagenes.index" value ="d1"/>';
    htm += '<input type ="hidden" autoComplete ="off" name ="AutomovilImagenes[' + gui + '].imagenSubida" value ="d2"/>';
    htm += '<input type ="hidden" autoComplete ="off" name ="AutomovilImagenes[' + gui + '].index" value ="d3"/>';
    $('#divAutomovilImagenes').append(htm);

    return false;
});

$("#add").live("click", function () {
    var id = $(this)[0].id;
    $(this).parents("div.editorRow:first").remove();

    var gui = GetRandomGUI();
    var htm = '<div class="editorRow">';
    htm += '<input type ="hidden" autoComplete ="off" name ="AutomovilImagenes.index" value ="d4"/>';
    htm += '<Imagen: <input type ="file" name ="AutomovilImagenes[' + gui + '].imagenSubida"/ value="d5">';
    htm += '<a href ="#" class="deleteRow">Eliminar</a></div>';
    $('#divAutomovilImagenes').append(htm);

    return false;
});

function GetRandomGUI() {

    var val ='xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' .replace(/[xy]/g, function(c){
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
            
    });


    return val;
}
