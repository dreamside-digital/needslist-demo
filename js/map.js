mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhcm9uLW5vbWFkaWMtbGFicyIsImEiOiJjamtoM255YTQwMGw2M3dtcnNqd2FibTk5In0.mlkvZ9zSFY0kJBd9HEG2rg';
var map = new mapboxgl.Map({
  container: 'global-map',
  style: 'mapbox://styles/sharon-nomadic-labs/cjokl7vg30f6t2sos01mvs16b',
  zoom: 1.6,
  scrollZoom: false,
  center: [-31.949833, 27.947533],
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'bottom-right');

var locations = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [2.352222, 48.856613]
      },
      properties: {
        title: 'Paris, France',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [12.496365, 41.902782]
      },
      properties: {
        title: 'Rome, Italy',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [26.217991, 39.175549]
      },
      properties: {
        title: 'Lesvos, Greece',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [26.974663, 37.757929]
      },
      properties: {
        title: 'Samos, Greece',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [26.064655, 38.375813]
      },
      properties: {
        title: 'Chios, Greece',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [37.3825, 37.05944]
      },
      properties: {
        title: 'Gazantep, Turkey',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [37.3825, 37.05944]
      },
      properties: {
        title: 'Gazantep, Turkey',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [38.290599, 35.008917]
      },
      properties: {
        title: 'Avicenna, Syria',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [90.356331, 23.684994]
      },
      properties: {
        title: 'Bangladesh',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [35.355709, 2.772700]
      },
      properties: {
        title: 'Northern Kenya',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [32.290276, 1.373333]
      },
      properties: {
        title: 'Uganda',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [13.404954, 52.520008]
      },
      properties: {
        title: 'Berlin, Germany',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-121.838783, 39.728958]
      },
      properties: {
        title: 'Chico, California, USA',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-95.369804, 29.760427]
      },
      properties: {
        title: 'Houston, Texas, USA',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-66.105736, 18.465540]
      },
      properties: {
        title: 'San Juan, Puerto Rico',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-112.074036, 33.448376]
      },
      properties: {
        title: 'Phoenix, Arizona, USA',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-75.165222, 39.952583]
      },
      properties: {
        title: 'Philadelphia, Pennsylvania, USA',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-84.280731, 30.438255]
      },
      properties: {
        title: 'Tallahassee, Florida, USA',
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-79.383186, 43.653225]
      },
      properties: {
        title: 'Toronto, Canada',
      }
    },
  ]
};

var locationsWithPopup = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.714431, 38.440468]
      },
      properties: {
        title: 'Santa Rosa, California, USA',
        popupTitle: 'Blog title',
        popupDescription: 'Teaser text',
        url: '#'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-78.638176, 35.779591]
      },
      properties: {
        title: 'Raleigh, North Carolina, USA',
        popupTitle: 'Blog title',
        popupDescription: 'Teaser text',
        url: '#'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [23.727539, 37.983810]
      },
      properties: {
        title: 'Athens, Greece',
        popupTitle: 'Blog title',
        popupDescription: 'Teaser text',
        url: '#'
      }
    },
  ]
}


locations.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';
  el.setAttribute('title', marker.properties.title);

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .addTo(map);
});

locationsWithPopup.features.forEach(function(marker) {

  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker with-popup';
  el.setAttribute('title', marker.properties.title);

  // create a Popup to add to marker
  var popupHTML = "<p class='xsmall'><strong>" + marker.properties.popupTitle + "</strong></p><p class='xsmall'>" + marker.properties.popupDescription + "</p><p class='xsmall'><a target='_blank' href='" + marker.properties.url + "'>More →</a></p>"
  var popup = new mapboxgl.Popup({ offset: 10, className: "popup" })
    .setHTML(popupHTML);

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .setPopup(popup)
  .addTo(map);
});