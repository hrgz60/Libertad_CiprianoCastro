var size = 0;
var placement = 'point';
function categories_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Cumbres Montañosas':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(123,193,235,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Depresión':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(194,71,210,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Montaña Baja':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(234,141,82,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("unidad");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};
