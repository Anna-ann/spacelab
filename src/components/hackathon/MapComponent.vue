<template>
    <div>
        <h1>Areas where our solution can be implemented</h1>
        <div ref="map" class="folium-map"></div>
    </div>
</template>
  
<script>
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import 'leaflet.heat/dist/leaflet-heat.js';

export default {
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            const map = L.map(this.$refs.map, {
                center: [49.0351744136575, 73.07498246820573],
                crs: L.CRS.EPSG3857,
                zoom: 5,
                zoomControl: true,
                preferCanvas: false,
            });

            L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {
                    attribution: "Data by © <a target='_blank' href='http://openstreetmap.org'>OpenStreetMap</a>, under <a target='_blank' href='http://www.openstreetmap.org/copyright'>ODbL</a>.",
                    detectRetina: false,
                    maxNativeZoom: 18,
                    maxZoom: 18,
                    minZoom: 0,
                    noWrap: false,
                    opacity: 1,
                    subdomains: "abc",
                    tms: false,
                }
            ).addTo(map);

            L.polygon(
                [[53.01978, 75.84396], [52.0104, 76.64876], [51.41795, 77.52921], [51.42465, 77.54637], [51.78063, 77.53874], [51.78394, 77.53718], [52.6801, 76.85005], [52.92403, 76.53677], [52.96086, 76.46175], [53.078, 76.15955], [53.07384, 76.05595], [53.06952, 75.97736], [53.02345, 75.84426], [53.01978, 75.84396]],
                { "bubblingMouseEvents": true, "color": "#1f77b4", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1f77b4", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3 }
            ).addTo(map);

            L.polygon(
                [[46.44656, 75.05698], [46.43212, 75.06197], [46.32135, 75.11716], [46.31914, 75.12115], [46.3131, 75.13535], [46.31389, 75.14314], [46.34566, 75.23193], [46.45997, 75.46801], [46.47103, 75.48449], [46.51217, 75.52188], [46.78684, 75.70323], [46.79034, 75.693], [46.73258, 75.22671], [46.44656, 75.05698]],
                { "bubblingMouseEvents": true, "color": "#1f77b4", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#1f77b4", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3 }
            ).addTo(map);

            L.polygon(
                [[46.14326, 65.00402], [46.13891, 65.00469], [46.13442, 65.00566], [46.1317, 65.01412], [46.13467, 65.01797], [46.13796, 65.01924], [46.14541, 65.01569], [46.14652, 65.00774], [46.14606, 65.00635], [46.14552, 65.00513], [46.14326, 65.00402]],
                { "bubblingMouseEvents": true, "color": "#ff7f0e", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#ff7f0e", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3 }
            ).addTo(map);

            L.polygon(
                [[44.76794, 63.40692], [44.7564, 63.48009], [44.40968, 65.79044], [44.45167, 66.05035], [44.45376, 66.05846], [44.50494, 66.17285], [44.53887, 66.22363], [45.30327, 65.16712], [45.30711, 65.14912], [45.46146, 63.86676], [45.32993, 63.64531], [44.84768, 63.42272], [44.76794, 63.40692]],
                { "bubblingMouseEvents": true, "color": "#2ca02c", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#2ca02c", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3 }
            ).addTo(map);

            L.polygon(
                [[44.95342, 74.05237], [44.90826, 74.13475], [44.92081, 74.17915], [45.28389, 75.21057], [45.38554, 75.25014], [46.08044, 74.78137], [46.09066, 74.76329], [46.09222, 74.75455], [46.09869, 74.69174], [46.09595, 74.67476], [46.02073, 74.30776], [46.00376, 74.25623], [45.97672, 74.23247], [45.95984, 74.2249], [45.49759, 74.06697], [45.34018, 74.06258], [44.95342, 74.05237]],
                { "bubblingMouseEvents": true, "color": "#d62728", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#d62728", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3 }
            ).addTo(map);

            L.polygon(
                [[46.25363, 80.58669], [46.21697, 80.60448], [46.20899, 80.6131], [46.14338, 80.76014], [46.0998, 80.87263], [46.02756, 81.14907], [46.01737, 81.26887], [46.04265, 81.35407], [46.37535, 81.95036], [46.61156, 81.66454], [46.74348, 81.22943], [46.72135, 81.17989], [46.25363, 80.58669]],
                { "bubblingMouseEvents": true, "color": "#9467bd", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#9467bd", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3 }
            ).addTo(map);

            L.polygon(
                [[48.19085, 83.01393], [48.18753, 83.0153], [48.16485, 83.03373], [48.03833, 83.16048], [48.02432, 83.17606], [47.93982, 83.76498], [47.93942, 83.77347], [47.94675, 83.78057], [48.37667, 83.96164], [48.4951, 83.9049], [48.51783, 83.86766], [48.54413, 83.77686], [48.60799, 83.52095], [48.54304, 83.3759], [48.2758, 83.02367], [48.27437, 83.02295], [48.19085, 83.01393]],
                { "bubblingMouseEvents": true, "color": "#8c564b", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#8c564b", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3 }
            ).addTo(map);

            L.polygon(
                [[53.20841, 65.15614], [53.05714, 65.24711], [52.99387, 65.43609], [52.81645, 66.10098], [52.91284, 67.39516], [52.93131, 67.55331], [52.99442, 67.74977], [53.83168, 69.83366], [54.03053, 70.19391], [55.00525, 70.07319], [55.13992, 70.00592], [55.26757, 69.87598], [55.26973, 69.87329], [55.27242, 69.86652], [55.2812, 69.58917], [55.25523, 68.80412], [55.17182, 68.25051], [54.64939, 65.9061], [54.5807, 65.63331], [54.45334, 65.35015], [54.44735, 65.3374], [54.44234, 65.32724], [53.20841, 65.15614]],
                { "bubblingMouseEvents": true, "color": "#e377c2", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#e377c2", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3 }
            ).addTo(map);

            L.polygon(
                [[54.23606, 64.06625], [54.19226, 64.08711], [53.45082, 65.09402], [53.29316, 65.3533], [53.2934, 65.36018], [53.42519, 65.37083], [53.90452, 65.39768], [54.04307, 65.32993], [54.36547, 64.93939], [54.39532, 64.62936], [54.39169, 64.60783], [54.32099, 64.28761], [54.23606, 64.06625]],
                { "bubblingMouseEvents": true, "color": "#7f7f7f", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#7f7f7f", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3 }
            ).addTo(map);

            L.polygon(
                [[46.89249, 51.68971], [46.87952, 51.69432], [46.85817, 51.74392], [46.85018, 51.77089], [46.82279, 51.89859], [46.81226, 51.95319], [46.81305, 51.96512], [46.81531, 51.97881], [46.82331, 51.98581], [46.92992, 51.99303], [46.93198, 51.9928], [46.91118, 51.73952], [46.90605, 51.70725], [46.89924, 51.69172], [46.89249, 51.68971]],
                { "bubblingMouseEvents": true, "color": "#bcbd22", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#bcbd22", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3 }
            ).addTo(map);

            L.polygon(
                [[50.42306, 80.57616], [50.4165, 80.58475], [50.4062, 80.60155], [50.40514, 80.60751], [50.37181, 80.90969], [50.3909, 81.08653], [50.5961, 80.9666], [50.63455, 80.94294], [50.63877, 80.93806], [50.64375, 80.92865], [50.65865, 80.90043], [50.68308, 80.79066], [50.68393, 80.78531], [50.67586, 80.77075], [50.64434, 80.72617], [50.54549, 80.5885], [50.42306, 80.57616]],
                { "bubblingMouseEvents": true, "color": "#17becf", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#17becf", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3 }
            ).addTo(map);

            L.polygon(
                [[46.46892, 75.64954], [46.46588, 75.65026], [46.46047, 75.65807], [46.45804, 75.66177], [46.48524, 75.92075], [46.49999, 75.93098], [46.52695, 75.93541], [46.53466, 75.9347], [46.5409, 75.92861], [46.54517, 75.91962], [46.55906, 75.88093], [46.56226, 75.87165], [46.56338, 75.86795], [46.55832, 75.75925], [46.53859, 75.68438], [46.53611, 75.67837], [46.46892, 75.64954]],
                { "bubblingMouseEvents": true, "color": "#17becf", "dashArray": null, "dashOffset": null, "fill": true, "fillColor": "#17becf", "fillOpacity": 0.2, "fillRule": "evenodd", "lineCap": "round", "lineJoin": "round", "noClip": false, "opacity": 1.0, "smoothFactor": 1.0, "stroke": true, "weight": 3 }
            ).addTo(map);

            L.marker([52.38010016444982, 76.79210664328899]).addTo(map);
            L.marker([46.49119853997128, 75.32023460268071]).addTo(map);
            L.marker([46.13866430232558, 65.0119987924866]).addTo(map);
            L.marker([45.00496903846154, 64.59150957692309]).addTo(map);
            L.marker([45.54793692558553, 74.44949133264157]).addTo(map);
            L.marker([46.487730842064416, 81.38993527745441]).addTo(map);
            L.marker([48.29793238225629, 83.45999428258489]).addTo(map);
            L.marker([54.23088030167264, 67.36754178464756]).addTo(map);
            L.marker([53.938272455322455, 64.82070047397048]).addTo(map);
            L.marker([46.86475967963386, 51.84127932494279]).addTo(map);
            L.marker([50.512034326602624, 80.82068067829837]).addTo(map);
            L.marker([46.513232321116924, 75.78297713787086]).addTo(map);
        },
    },
};
</script>
  
<style scoped>
h1 {
    padding-top: 10%;
}

.folium-map {
    height: 80vh;
    width: 100%;
}

@media only screen and (max-width: 600px) {
    .folium-map {
        height: 300px;

        @media only screen and (max-width: 600px) {
            .folium-map {
                height: 300px;
            }
        }
    }
}
</style>
