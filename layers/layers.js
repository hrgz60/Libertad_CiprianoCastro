var wms_layers = [];

        var lyr_GOOGLESATLITE_0 = new ol.layer.Tile({
            'title': 'GOOGLESATLITE_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap_1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Vialidad_2 = new ol.format.GeoJSON();
var features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Vialidad_2 = format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Vialidad_2.readFeatures(json_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Vialidad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Vialidad_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Vialidad_2.addFeatures(features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Vialidad_2);var lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Vialidad_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Vialidad_2, 
                style: style_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Vialidad_2,
                title: '<img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Vialidad_2.png" /> LIBERTAD_CIPRIANOCASTRO Municipio_Capacho_Viejo_Parroquia_Cipriano_Castro Cipriano_Castro_Vialidad'
            });var format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3 = new ol.format.GeoJSON();
var features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3 = format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3.readFeatures(json_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3.addFeatures(features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3);var lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3, 
                style: style_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3,
    title: 'LIBERTAD_CIPRIANOCASTRO Municipio_Capacho_Viejo_Parroquia_Cipriano_Castro Cipriano_Castro_Unidades_de_Paisaje<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3_0.png" /> Cumbres Montañosas<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3_1.png" /> Depresión<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3_2.png" /> Montaña Baja<br />'
        });var format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4 = new ol.format.GeoJSON();
var features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4 = format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4.readFeatures(json_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4.addFeatures(features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4);var lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4, 
                style: style_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4,
    title: 'LIBERTAD_CIPRIANOCASTRO Municipio_Capacho_Viejo_Parroquia_Cipriano_Castro Cipriano_Castro_Temperatura<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4_0.png" /> 22<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4_1.png" /> 24<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4_2.png" /> 26<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4_3.png" /> 28<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4_4.png" /> 30<br />'
        });var format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Recursos_Minerales_5 = new ol.format.GeoJSON();
var features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Recursos_Minerales_5 = format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Recursos_Minerales_5.readFeatures(json_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Recursos_Minerales_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Recursos_Minerales_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Recursos_Minerales_5.addFeatures(features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Recursos_Minerales_5);var lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Recursos_Minerales_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Recursos_Minerales_5, 
                style: style_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Recursos_Minerales_5,
                title: '<img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Recursos_Minerales_5.png" /> LIBERTAD_CIPRIANOCASTRO Municipio_Capacho_Viejo_Parroquia_Cipriano_Castro Cipriano_Castro_Recursos_Minerales'
            });var format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6 = new ol.format.GeoJSON();
var features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6 = format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6.readFeatures(json_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6.addFeatures(features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6);var lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6, 
                style: style_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6,
    title: 'LIBERTAD_CIPRIANOCASTRO Municipio_Capacho_Viejo_Parroquia_Cipriano_Castro Cipriano_Castro_Pricipitacion<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6_0.png" /> 1000 - 1400<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6_1.png" /> 600 - 1000<br />'
        });var format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Oronimia_7 = new ol.format.GeoJSON();
var features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Oronimia_7 = format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Oronimia_7.readFeatures(json_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Oronimia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Oronimia_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Oronimia_7.addFeatures(features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Oronimia_7);var lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Oronimia_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Oronimia_7, 
                style: style_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Oronimia_7,
                title: '<img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Oronimia_7.png" /> LIBERTAD_CIPRIANOCASTRO Municipio_Capacho_Viejo_Parroquia_Cipriano_Castro Cipriano_Castro_Oronimia'
            });var format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Isoyetas_8 = new ol.format.GeoJSON();
var features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Isoyetas_8 = format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Isoyetas_8.readFeatures(json_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Isoyetas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Isoyetas_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Isoyetas_8.addFeatures(features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Isoyetas_8);var lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Isoyetas_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Isoyetas_8, 
                style: style_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Isoyetas_8,
                title: '<img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Isoyetas_8.png" /> LIBERTAD_CIPRIANOCASTRO Municipio_Capacho_Viejo_Parroquia_Cipriano_Castro Cipriano_Castro_Isoyetas'
            });var format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Hidrografia_9 = new ol.format.GeoJSON();
var features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Hidrografia_9 = format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Hidrografia_9.readFeatures(json_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Hidrografia_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Hidrografia_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Hidrografia_9.addFeatures(features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Hidrografia_9);var lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Hidrografia_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Hidrografia_9, 
                style: style_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Hidrografia_9,
                title: '<img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Hidrografia_9.png" /> LIBERTAD_CIPRIANOCASTRO Municipio_Capacho_Viejo_Parroquia_Cipriano_Castro Cipriano_Castro_Hidrografia'
            });var format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10 = new ol.format.GeoJSON();
var features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10 = format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10.readFeatures(json_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10.addFeatures(features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10);var lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10, 
                style: style_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10,
    title: 'LIBERTAD_CIPRIANOCASTRO Municipio_Capacho_Viejo_Parroquia_Cipriano_Castro Cipriano_Castro_Geologia_Formaciones<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10_0.png" /> Barco<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10_1.png" /> Carbonera<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10_2.png" /> Colon<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10_3.png" /> Leon<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10_4.png" /> Los Cuervos<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10_5.png" /> Mirador<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10_6.png" /> MIrador<br />'
        });var format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Estructural_11 = new ol.format.GeoJSON();
var features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Estructural_11 = format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Estructural_11.readFeatures(json_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Estructural_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Estructural_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Estructural_11.addFeatures(features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Estructural_11);var lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Estructural_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Estructural_11, 
                style: style_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Estructural_11,
                title: '<img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Estructural_11.png" /> LIBERTAD_CIPRIANOCASTRO Municipio_Capacho_Viejo_Parroquia_Cipriano_Castro Cipriano_Castro_Geologia_Estructural'
            });var format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12 = new ol.format.GeoJSON();
var features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12 = format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12.readFeatures(json_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12.addFeatures(features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12);var lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12, 
                style: style_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12,
    title: 'LIBERTAD_CIPRIANOCASTRO Municipio_Capacho_Viejo_Parroquia_Cipriano_Castro Cipriano_Castro_Geologia_Cronoestratigrafia<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12_0.png" /> Cretáceo<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12_1.png" /> Paleogeno<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12_2.png" /> Paleogeno y Neogeno<br />'
        });var format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Curvas_de_Nivel_13 = new ol.format.GeoJSON();
var features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Curvas_de_Nivel_13 = format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Curvas_de_Nivel_13.readFeatures(json_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Curvas_de_Nivel_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Curvas_de_Nivel_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Curvas_de_Nivel_13.addFeatures(features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Curvas_de_Nivel_13);var lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Curvas_de_Nivel_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Curvas_de_Nivel_13, 
                style: style_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Curvas_de_Nivel_13,
                title: '<img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Curvas_de_Nivel_13.png" /> LIBERTAD_CIPRIANOCASTRO Municipio_Capacho_Viejo_Parroquia_Cipriano_Castro Cipriano_Castro_Curvas_de_Nivel'
            });var format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14 = new ol.format.GeoJSON();
var features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14 = format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14.readFeatures(json_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14.addFeatures(features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14);var lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14, 
                style: style_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14,
    title: 'LIBERTAD_CIPRIANOCASTRO Municipio_Capacho_Viejo_Parroquia_Cipriano_Castro Cipriano_Castro_Capacidad_Uso_del_Suelo<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14_0.png" /> Clase V<br />\
    <img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14_1.png" /> Clase VI<br />'
        });var format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_Capitales_15 = new ol.format.GeoJSON();
var features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_Capitales_15 = format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_Capitales_15.readFeatures(json_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_Capitales_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_Capitales_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_Capitales_15.addFeatures(features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_Capitales_15);var lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_Capitales_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_Capitales_15, 
                style: style_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_Capitales_15,
                title: '<img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_Capitales_15.png" /> LIBERTAD_CIPRIANOCASTRO Municipio_Capacho_Viejo_Parroquia_Cipriano_Castro Cipriano_Castro_Centros_Poblados_Capitales'
            });var format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16 = new ol.format.GeoJSON();
var features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16 = format_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16.readFeatures(json_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16.addFeatures(features_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16);var lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16, 
                style: style_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16,
                title: '<img src="styles/legend/LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16.png" /> LIBERTAD_CIPRIANOCASTRO Municipio_Capacho_Viejo_Parroquia_Cipriano_Castro Cipriano_Castro_Centros_Poblados'
            });

lyr_GOOGLESATLITE_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Vialidad_2.setVisible(true);lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3.setVisible(true);lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4.setVisible(true);lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Recursos_Minerales_5.setVisible(true);lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6.setVisible(true);lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Oronimia_7.setVisible(true);lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Isoyetas_8.setVisible(true);lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Hidrografia_9.setVisible(true);lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10.setVisible(true);lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Estructural_11.setVisible(true);lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12.setVisible(true);lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Curvas_de_Nivel_13.setVisible(true);lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14.setVisible(true);lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_Capitales_15.setVisible(true);lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16.setVisible(true);
var layersList = [lyr_GOOGLESATLITE_0,lyr_OpenStreetMap_1,lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Vialidad_2,lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3,lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4,lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Recursos_Minerales_5,lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6,lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Oronimia_7,lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Isoyetas_8,lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Hidrografia_9,lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10,lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Estructural_11,lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12,lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Curvas_de_Nivel_13,lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14,lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_Capitales_15,lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16];
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Vialidad_2.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'nombre': 'nombre', 'tipo': 'tipo', 'fuente': 'fuente', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3.set('fieldAliases', {'pk': 'pk', 'rowid': 'rowid', 'id': 'id', 'estado': 'estado', 'unidad': 'unidad', 'fuente': 'fuente', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'temperatur': 'temperatur', 'fuente': 'fuente', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Recursos_Minerales_5.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'mineral': 'mineral', 'fuente': 'fuente', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'valor_men': 'valor_men', 'valor_may': 'valor_may', 'rango': 'rango', 'valor': 'valor', 'fuente': 'fuente', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Oronimia_7.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'código': 'código', 'código_est': 'código_est', 'estado': 'estado', 'capital_es': 'capital_es', 'código_mun': 'código_mun', 'municipio': 'municipio', 'capital_mu': 'capital_mu', 'código_par': 'código_par', 'parroquia': 'parroquia', 'capital_pa': 'capital_pa', 'nombre': 'nombre', 'fuente': 'fuente', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Isoyetas_8.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'precipitac': 'precipitac', 'fuente': 'fuente', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Hidrografia_9.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'nombre': 'nombre', 'fuente': 'fuente', 'id_2': 'id_2', 'estado_2': 'estado_2', 'nombre_2': 'nombre_2', 'fuente_2': 'fuente_2', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'nomenclatu': 'nomenclatu', 'formacion': 'formacion', 'fuente': 'fuente', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Estructural_11.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'nombre': 'nombre', 'n': 'n', 'fuente': 'fuente', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'número': 'número', 'era': 'era', 'período': 'período', 'época': 'época', 'roca': 'roca', 'fuente': 'fuente', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Curvas_de_Nivel_13.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'altitud_ms': 'altitud_ms', 'fuente': 'fuente', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'estado': 'estado', 'clase_suel': 'clase_suel', 'fuente': 'fuente', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_Capitales_15.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'código': 'código', 'código_est': 'código_est', 'estado': 'estado', 'capital_es': 'capital_es', 'código_mun': 'código_mun', 'municipio': 'municipio', 'capital_mu': 'capital_mu', 'código_par': 'código_par', 'parroquia': 'parroquia', 'capital_pa': 'capital_pa', 'nombre': 'nombre', 'descripció': 'descripció', 'fuente': 'fuente', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16.set('fieldAliases', {'pk': 'pk', 'id': 'id', 'código': 'código', 'código_est': 'código_est', 'estado': 'estado', 'capital_es': 'capital_es', 'código_mun': 'código_mun', 'municipio': 'municipio', 'capital_mu': 'capital_mu', 'código_par': 'código_par', 'parroquia': 'parroquia', 'capital_pa': 'capital_pa', 'nombre': 'nombre', 'descripció': 'descripció', 'fuente': 'fuente', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Vialidad_2.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3.set('fieldImages', {'pk': 'TextEdit', 'rowid': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'unidad': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'temperatur': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Recursos_Minerales_5.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'mineral': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'valor_men': 'TextEdit', 'valor_may': 'TextEdit', 'rango': 'TextEdit', 'valor': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Oronimia_7.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'código': 'TextEdit', 'código_est': 'TextEdit', 'estado': 'TextEdit', 'capital_es': 'TextEdit', 'código_mun': 'TextEdit', 'municipio': 'TextEdit', 'capital_mu': 'TextEdit', 'código_par': 'TextEdit', 'parroquia': 'TextEdit', 'capital_pa': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Isoyetas_8.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'precipitac': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Hidrografia_9.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', 'id_2': 'TextEdit', 'estado_2': 'TextEdit', 'nombre_2': 'TextEdit', 'fuente_2': 'TextEdit', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'nomenclatu': 'TextEdit', 'formacion': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Estructural_11.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'nombre': 'TextEdit', 'n': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'número': 'TextEdit', 'era': 'TextEdit', 'período': 'TextEdit', 'época': 'TextEdit', 'roca': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Curvas_de_Nivel_13.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'altitud_ms': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'estado': 'TextEdit', 'clase_suel': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_Capitales_15.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'código': 'TextEdit', 'código_est': 'TextEdit', 'estado': 'TextEdit', 'capital_es': 'TextEdit', 'código_mun': 'TextEdit', 'municipio': 'TextEdit', 'capital_mu': 'TextEdit', 'código_par': 'TextEdit', 'parroquia': 'TextEdit', 'capital_pa': 'TextEdit', 'nombre': 'TextEdit', 'descripció': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16.set('fieldImages', {'pk': 'TextEdit', 'id': 'TextEdit', 'código': 'TextEdit', 'código_est': 'TextEdit', 'estado': 'TextEdit', 'capital_es': 'TextEdit', 'código_mun': 'TextEdit', 'municipio': 'TextEdit', 'capital_mu': 'TextEdit', 'código_par': 'TextEdit', 'parroquia': 'TextEdit', 'capital_pa': 'TextEdit', 'nombre': 'TextEdit', 'descripció': 'TextEdit', 'fuente': 'TextEdit', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Vialidad_2.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'nombre': 'no label', 'tipo': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Unidades_de_Paisaje_3.set('fieldLabels', {'pk': 'no label', 'rowid': 'no label', 'id': 'no label', 'estado': 'no label', 'unidad': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Temperatura_4.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'temperatur': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Recursos_Minerales_5.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'mineral': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Pricipitacion_6.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'valor_men': 'no label', 'valor_may': 'no label', 'rango': 'no label', 'valor': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Oronimia_7.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'código': 'no label', 'código_est': 'no label', 'estado': 'no label', 'capital_es': 'no label', 'código_mun': 'no label', 'municipio': 'no label', 'capital_mu': 'no label', 'código_par': 'no label', 'parroquia': 'no label', 'capital_pa': 'no label', 'nombre': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Isoyetas_8.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'precipitac': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Hidrografia_9.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'nombre': 'no label', 'fuente': 'no label', 'id_2': 'no label', 'estado_2': 'no label', 'nombre_2': 'no label', 'fuente_2': 'no label', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Formaciones_10.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'nomenclatu': 'no label', 'formacion': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Estructural_11.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'nombre': 'no label', 'n': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Geologia_Cronoestratigrafia_12.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'número': 'no label', 'era': 'no label', 'período': 'no label', 'época': 'no label', 'roca': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Curvas_de_Nivel_13.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'altitud_ms': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Capacidad_Uso_del_Suelo_14.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'estado': 'no label', 'clase_suel': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_Capitales_15.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'código': 'no label', 'código_est': 'no label', 'estado': 'no label', 'capital_es': 'no label', 'código_mun': 'no label', 'municipio': 'no label', 'capital_mu': 'no label', 'código_par': 'no label', 'parroquia': 'no label', 'capital_pa': 'no label', 'nombre': 'no label', 'descripció': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16.set('fieldLabels', {'pk': 'no label', 'id': 'no label', 'código': 'no label', 'código_est': 'no label', 'estado': 'no label', 'capital_es': 'no label', 'código_mun': 'no label', 'municipio': 'no label', 'capital_mu': 'no label', 'código_par': 'no label', 'parroquia': 'no label', 'capital_pa': 'no label', 'nombre': 'no label', 'descripció': 'no label', 'fuente': 'no label', });
lyr_LIBERTAD_CIPRIANOCASTROMunicipio_Capacho_Viejo_Parroquia_Cipriano_CastroCipriano_Castro_Centros_Poblados_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});