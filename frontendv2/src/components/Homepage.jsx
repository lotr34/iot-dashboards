import React, { useEffect, useState, useRef } from 'react'
import { useGlobalContext } from '../context';
import ReactApexChart from 'react-apexcharts';
import mapboxgl from 'mapbox-gl'
import Map from 'react-map-gl';


const Homepage = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext({});

  // Gateways' Donut Chart
  const seriesGws = [45, 22]  //[$active, $inactive]
  const optionsGws = {
    chart: {
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -270,
        endAngle: 90,
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              show: true
            },
            value: {
              show: true,
              fontSize: '12px',
            },
            total: {
              show: true,
              label: 'Gateways',
              fontSize: '14px',
            }
          }
        }
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom',
        }
      }
    }],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    labels: ['Active', 'Inactive'],
    colors: ['#4caf50', '#c93b3b'],
  }

  //Devices' Donut Chart
  const seriesDevs = [1241, 321]  //[$active, $inactive]
  const optionsDevs = {
    chart: {
      type: 'donut',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              show: true
            },
            value: {
              show: true,
              fontSize: '12px',
            },
            total: {
              show: true,
              label: 'Devices',
              fontSize: '14px',
            }
          }
        }
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom',
        }
      }
    }],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    labels: ['Active', 'Inactive'],
    colors: ['#4caf50', '#c93b3b'],
  }

  // Map Configs
  const initialViewState = {
    latitude: 41.0685,
    longitude: 28.8646,
    zoom: 11,
    bearing: 0,
    pitch: 0
  };


  const [settings, setSettings] = useState({
    scrollZoom: true,
    boxZoom: true,
    dragRotate: true,
    dragPan: true,
    keyboard: true,
    doubleClickZoom: true,
    touchZoomRotate: true,
    touchPitch: true,
    minZoom: 0,
    maxZoom: 20,
    minPitch: 0,
    maxPitch: 85
  });


  return (
    <div className={`${isSidebarOpen ? 'ml-72' : ' ml-20'} mt-6`}>
      <div>
        <h5 className='flex justify-end mr-8'>Devices / Gateways / All</h5>
      </div>
      <div className='contents md:flex'>
        <div className='w-full flex items-center justify-around md:w-[33%] h-52 border-[2px] border-[#e51c21] rounded-l-2xl'>
          <ReactApexChart options={optionsGws} series={seriesGws} type="donut" height={180} width={180} />
          <ReactApexChart options={optionsDevs} series={seriesDevs} type="donut" height={180} width={180} />
        </div>
        <div className='w-full md:w-[63%] h-52 border-[2px] border-[#e51c21] rounded-r-2xl md:ml-4'>
        <Map
          initialViewState={initialViewState}
          {...settings}
          mapStyle="mapbox://styles/halimd/cl88fadi7000d15nizio6t7mg"
          mapboxAccessToken="pk.eyJ1IjoiaGFsaW1kIiwiYSI6ImNsMjkzc2EzaDBkamIza284ajh1MGg0cWMifQ.a14k7G2eDTmNVvPM-8mL9w"
        />
        </div>
      </div>
    </div>
    
  )
}

export default Homepage