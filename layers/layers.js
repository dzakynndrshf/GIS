var wms_layers = [];

var format_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_0 = format_ADMINISTRASIKECAMATAN_AR_50K_0.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_0);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_0,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_JALAN_LN_50K_1 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_1 = format_JALAN_LN_50K_1.readFeatures(json_JALAN_LN_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_1.addFeatures(features_JALAN_LN_50K_1);
var lyr_JALAN_LN_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_50K_1, 
                style: style_JALAN_LN_50K_1,
                popuplayertitle: 'JALAN_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_1.png" /> JALAN_LN_50K'
            });
var format_SUNGAI_LN_50K_2 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_2 = format_SUNGAI_LN_50K_2.readFeatures(json_SUNGAI_LN_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_2.addFeatures(features_SUNGAI_LN_50K_2);
var lyr_SUNGAI_LN_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_50K_2, 
                style: style_SUNGAI_LN_50K_2,
                popuplayertitle: 'SUNGAI_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_2.png" /> SUNGAI_LN_50K'
            });
var format_RUMAHSAKIT_PT_50K_3 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_50K_3 = format_RUMAHSAKIT_PT_50K_3.readFeatures(json_RUMAHSAKIT_PT_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_50K_3.addFeatures(features_RUMAHSAKIT_PT_50K_3);
var lyr_RUMAHSAKIT_PT_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHSAKIT_PT_50K_3, 
                style: style_RUMAHSAKIT_PT_50K_3,
                popuplayertitle: 'RUMAHSAKIT_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_50K_3.png" /> RUMAHSAKIT_PT_50K'
            });
var format_PEMERINTAHAN_PT_50K_4 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_50K_4 = format_PEMERINTAHAN_PT_50K_4.readFeatures(json_PEMERINTAHAN_PT_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_50K_4.addFeatures(features_PEMERINTAHAN_PT_50K_4);
var lyr_PEMERINTAHAN_PT_50K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_PT_50K_4, 
                style: style_PEMERINTAHAN_PT_50K_4,
                popuplayertitle: 'PEMERINTAHAN_PT_50K',
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_50K_4.png" /> PEMERINTAHAN_PT_50K'
            });

lyr_ADMINISTRASIKECAMATAN_AR_50K_0.setVisible(true);lyr_JALAN_LN_50K_1.setVisible(true);lyr_SUNGAI_LN_50K_2.setVisible(true);lyr_RUMAHSAKIT_PT_50K_3.setVisible(true);lyr_PEMERINTAHAN_PT_50K_4.setVisible(true);
var layersList = [lyr_ADMINISTRASIKECAMATAN_AR_50K_0,lyr_JALAN_LN_50K_1,lyr_SUNGAI_LN_50K_2,lyr_RUMAHSAKIT_PT_50K_3,lyr_PEMERINTAHAN_PT_50K_4];
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_LN_50K_1.set('fieldAliases', {'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_LN_50K_2.set('fieldAliases', {'SHAPE_Leng': 'SHAPE_Leng', });
lyr_RUMAHSAKIT_PT_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', });
lyr_PEMERINTAHAN_PT_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldImages', {'NAMOBJ': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JALAN_LN_50K_1.set('fieldImages', {'SHAPE_Leng': 'TextEdit', });
lyr_SUNGAI_LN_50K_2.set('fieldImages', {'SHAPE_Leng': 'TextEdit', });
lyr_RUMAHSAKIT_PT_50K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', });
lyr_PEMERINTAHAN_PT_50K_4.set('fieldImages', {'NAMOBJ': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldLabels', {'NAMOBJ': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_LN_50K_1.set('fieldLabels', {'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_50K_2.set('fieldLabels', {'SHAPE_Leng': 'no label', });
lyr_RUMAHSAKIT_PT_50K_3.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_PEMERINTAHAN_PT_50K_4.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_PEMERINTAHAN_PT_50K_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});