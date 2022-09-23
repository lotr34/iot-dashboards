  import icon from '../assets/c.png'
  
  export const devicesClusterLayer = {
    id: 'clusters',
    type: 'circle',
    source: 'devices',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': ['step', ['get', 'point_count'], '#eb2d2d', 100, '#f1f075', 750, '#f28cb1'],
      'circle-radius': ['step', ['get', 'point_count'], 12, 100, 30, 750, 40]
    }
  };
  
  export const devicesClusterCountLayer = {
    id: 'cluster-count',
    type: 'symbol',
    source: 'devices',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12
    }
  };
  
  export const devicesUnclusteredPointLayer = {
    id: 'unclustered-point',
    type: 'symbol',
    source: 'devices',
    filter: ['!', ['has', 'point_count']],
    layout: {
      'symbol-placement': 'point',
      'icon-image': 'marker',
      'icon-size': 2,
      'icon-anchor': 'center',
      'icon-allow-overlap': true,
    }
  };

  export const devices = {
    'features': [
      {
        'type': 'Features',
        'geometry': {
          'type': 'Point',
          'coordinates': [28.8646, 41.0685]
        },
        'properties': {
          'title': 'Mapbox',
          'description': 'Washington, D.C.'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [28.9646, 41.1685]
        },
        'properties': {
          'title': 'Mapbox',
          'description': 'San Francisco, California'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [28.9746, 40.8685]
        },
        'properties': {
          'title': 'Mapbox',
          'description': 'San Francisco, California'
        }
      }
    ]
  };

// https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson
  export const gateways = {
    'features': [
      {
        'type': 'Features',
        'geometry': {
          'type': 'Point',
          'coordinates': [27.8646, 42.0685]
        },
        'properties': {
          'title': 'Mapbox',
          'description': 'Washington, D.C.'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [27.9646, 42.1685]
        },
        'properties': {
          'title': 'Mapbox',
          'description': 'San Francisco, California'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [27.9746, 42.8685]
        },
        'properties': {
          'title': 'Mapbox',
          'description': 'San Francisco, California'
        }
      }
    ]
  };


  export const gatewaysClusterLayer = {
    id: 'clusters2',
    type: 'circle',
    source: 'gateways',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
      'circle-radius': ['step', ['get', 'point_count'], 12, 100, 30, 750, 40]
    }
  };
  
  export const gatewaysClusterCountLayer = {
    id: 'cluster-count2',
    type: 'symbol',
    source: 'gateways',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
      'text-size': 12
    }
  };
  
  export const gatewaysUnclusteredPointLayer = {
    id: 'unclustered-point2',
    type: 'circle',
    source: 'gateways',
    filter: ['!', ['has', 'point_count']],
    paint: {
      'circle-color': '#11b4da',
      'circle-radius': 4,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#fff'
    }
  };