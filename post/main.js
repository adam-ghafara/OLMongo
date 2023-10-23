import { get } from "https://jscroot.github.io/api/croot.js";
import { URLGeoJson } from "./js/template/template.js";
import { MakeGeojsonFromAPI, responseData, AddLayerToMAP } from "./js/control/control.js";
import {map} from './js/config/map.js';
import {onClosePopupClick,onDeleteMarkerClick,onSubmitMarkerClick,onMapClick,onMapPointerMove,disposePopover} from './js/control/popup.js'
import {onClick} from 'https://jscroot.github.io/element/croot.js';
import {getAllCoordinates} from './js/control/cog.js';


onClick('popup-closer',onClosePopupClick);
onClick('insertmarkerbutton',onSubmitMarkerClick);
onClick('hapusbutton',onDeleteMarkerClick);
onClick('hitungcogbutton',getAllCoordinates);

map.on('click', onMapClick);
map.on('pointermove', onMapPointerMove);
map.on('movestart', disposePopover);
    
get(URLGeoJson,data => {
    responseData(data)
    let link = MakeGeojsonFromAPI(data)
    // console.log(link)
    // console.log(geojson)
    AddLayerToMAP(link)
}); 