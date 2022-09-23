import React, {useState, useRef} from 'react';
import {render} from 'react-dom';
import MapGL, {Source, Layer} from 'react-map-gl';

import {clusterLayer, clusterCountLayer, unclusteredPointLayer} from './layers';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaGFsaW1kIiwiYSI6ImNsMjkzc2EzaDBkamIza284ajh1MGg0cWMifQ.a14k7G2eDTmNVvPM-8mL9w'; // Set your mapbox token here

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 40.67,
    longitude: -103.59,
    zoom: 2,
    bearing: 0,
    pitch: 0
  });
  const mapRef = useRef(null);

  const onClick = event => {
    const feature = event.features[0];
    const clusterId = feature.properties.cluster_id;

    const mapboxSource = mapRef.current.getMap().getSource('earthquakes');

    mapboxSource.getClusterExpansionZoom(clusterId, (err, zoom) => {
      if (err) {
        return;
      }

      setViewport({
        ...viewport,
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
        zoom,
        transitionDuration: 500
      });
    });
  };

  return (
    <>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/halimd/cl88fadi7000d15nizio6t7mg"
        onViewportChange={setViewport}
        mapboxApiAccessToken='pk.eyJ1IjoiaGFsaW1kIiwiYSI6ImNsMjkzc2EzaDBkamIza284ajh1MGg0cWMifQ.a14k7G2eDTmNVvPM-8mL9w'
        interactiveLayerIds={[clusterLayer.id]}
        onClick={onClick}
        ref={mapRef}
      >
        <Source
          id="earthquakes"
          type="geojson"
          data="https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={50}
        >
          <Layer {...clusterLayer} />
          <Layer {...clusterCountLayer} />
          <Layer {...unclusteredPointLayer} />
        </Source>
      </MapGL>
    </>
  );
}

export function renderToDom(container) {
  render(<Map />, container);
}