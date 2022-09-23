import React, { useEffect, useState, useRef } from 'react'
import { useGlobalContext } from '../context';
import ReactApexChart from 'react-apexcharts';
import Map, {Source, Layer} from 'react-map-gl';
//import mapboxgl from 'mapbox-gl';
//import MapRender from '../components/MapRenderer'
import { FiMonitor, FiSearch, FiBell } from "react-icons/fi";
import { TbRouter } from "react-icons/tb";
import { HiChip } from "react-icons/hi";

import { devicesClusterLayer, devicesClusterCountLayer, devicesUnclusteredPointLayer, devices, gateways, gatewaysClusterLayer, gatewaysClusterCountLayer, gatewaysUnclusteredPointLayer } from './layers';

const Homepage = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext({});

  // Gateways' Donut Chart
  const seriesGws = [45, 22]  //[$active, $inactive]
  const optionsGws = {
    chart: {
      type: 'donut',
      foreColor: '#797979'
    },
    plotOptions: {
      pie: {
        startAngle: -270,
        endAngle: 90,
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 95,
            },
            value: {
              show: true,
              fontSize: '28px',
              offsetY: -5,
              fontWeight: 600,
            },
            total: {
              show: true,
              label: 'Gateways',
              fontSize: '14px',
              fontWeight: 600,

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
    colors: ['#4caf50', '#eb2d2d'],
    grid: {
      padding: {
        top: 0,
        bottom: 15,
        right: 0,
        left: 0,
      }
    }
  }

  //Devices' Donut Chart
  const seriesDevs = [1241, 321]  //[$active, $inactive]
  const optionsDevs = {
    chart: {
      type: 'donut',
      foreColor: '#797979'
    },
    plotOptions: {
      pie: {
        startAngle: -270,
        endAngle: 90,
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 95,
            },
            value: {
              show: true,
              fontSize: '28px',
              offsetY: -5,
              fontWeight: 600,
            },
            total: {
              show: true,
              label: 'Devices',
              fontSize: '14px',
              fontWeight: 600,

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
    colors: ['#4caf50', '#eb2d2d'],
    grid: {
      padding: {
        top: 0,
        bottom: 15,
        right: 0,
        left: 0,
      }
    }
  }

  // Map Configs
  const mapRef = useRef(null);
  const [view, setViewport] = useState({
    latitude: 41.0685,
    longitude: 28.8646,
    zoom: 7,
    bearing: 0,
    pitch: 40
  })

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


  // Checkboxes actions starts here


  return (
    <div className={`${isSidebarOpen ? 'ml-72' : ' ml-20'} mt-6`}>
      <div>
        <h5 className='flex justify-end mr-8'>Devices / Gateways / All</h5>
      </div>
      <div className='contents md:flex'>
        <div className='w-full flex items-center justify-around md:w-[33%] h-56 border-[2px] border-[#e51c21] rounded-l-2xl'>
          <ReactApexChart options={optionsGws} series={seriesGws} type="donut" height={180} width={180} />
          <ReactApexChart options={optionsDevs} series={seriesDevs} type="donut" height={180} width={180} />
        </div>
        <div className='w-full md:w-[63%] h-56 border-[2px] border-[#e51c21] rounded-r-2xl md:ml-4'>
        <Map
          initialViewState={view}
          {...settings}
          mapStyle="mapbox://styles/halimd/cl88fadi7000d15nizio6t7mg"
          mapboxAccessToken="pk.eyJ1IjoiaGFsaW1kIiwiYSI6ImNsMjkzc2EzaDBkamIza284ajh1MGg0cWMifQ.a14k7G2eDTmNVvPM-8mL9w"
          onViewportChange={setViewport}
          interactiveLayerIds={[devicesClusterLayer.id]}
          ref={mapRef}
        >
          <Source
          id="devices"
          type="geojson"
          data={devices}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={30}
        >
          <Layer {...devicesClusterLayer} />
          <Layer {...devicesClusterCountLayer} />
          <Layer {...devicesUnclusteredPointLayer} />
        </Source>
        <Source
          id="gateways"
          type="geojson"
          data={gateways}
          cluster={true}
          clusterMaxZoom={14}
          clusterRadius={30}
        >
          <Layer {...gatewaysClusterLayer} />
          <Layer {...gatewaysClusterCountLayer} />
          <Layer {...gatewaysUnclusteredPointLayer} />
        </Source>
        </Map>
        </div>
      </div>

      <div className='p-4 flex justify-between'>
        <button className=' bg-red-600 py-1 px-5 text-white font-semibold rounded-md'>New Device</button>
        <select className='w-[11rem] bg-[#e0e0e0] rounded-lg  border border-black'>
          <option selected>Secim yap</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
        <select className='w-[11rem] bg-[#e0e0e0] rounded-lg  border border-black'>
          <option selected>Secim yap</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
        <select className='w-[11rem] bg-[#e0e0e0] rounded-lg  border border-black'>
          <option selected>Secim yap</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
        </select>
        <div className='flex items-center w-[18rem] mr-8'>
          <input type='text' placeholder='Seach bar' className='w-full h-full bg-[#e0e0e0] rounded-lg  border border-black' />
          <FiSearch className='text-xl absolute right-12' />
        </div>
      </div>


      <div className="overflow-x-auto relative overflow-y-scroll scrollbar-hide h-[20rem] rounded-tl-3xl">
        <table className="w-[98%] text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-[#eb2d2d] sticky top-0">
            <tr>
              <th scope="col" className="py-3 px-6 border-r-2 border-white w-16">
                <input type='checkbox' id='select-all' />
              </th>
              <th scope="col" className="py-3 px-6 border-r-2 border-white">
                deveui
              </th>
              <th scope="col" className="py-3 px-6 border-r-2 border-white">
                device name
              </th>
              <th scope="col" className="py-3 px-6 border-r-2 border-white">
                last seen at
              </th>
              <th scope="col" className="py-3 px-6 border-r-2 border-white">
                description
              </th>
              <th scope="col" className="py-3 px-6">
                tools
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input type='checkbox' />
              </th>
              <td className="py-4 px-6">
                485236954125
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6">
                08.07.2022 - 09:19:00
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6 flex">
                <FiMonitor className="w-5 h-5" />
                <FiBell className="w-5 h-5" />
                <HiChip className="w-5 h-5" />
                <TbRouter className="w-5 h-5" />
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input type='checkbox' />
              </th>
              <td className="py-4 px-6">
                485236954125
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6">
                08.07.2022 - 09:19:00
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6 flex">
                <FiMonitor className="w-5 h-5" />
                <FiBell className="w-5 h-5" />
                <HiChip className="w-5 h-5" />
                <TbRouter className="w-5 h-5" />
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input type='checkbox' />
              </th>
              <td className="py-4 px-6">
                485236954125
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6">
                08.07.2022 - 09:19:00
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6 flex">
                <FiMonitor className="w-5 h-5" />
                <FiBell className="w-5 h-5" />
                <HiChip className="w-5 h-5" />
                <TbRouter className="w-5 h-5" />
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input type='checkbox' />
              </th>
              <td className="py-4 px-6">
                485236954125
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6">
                08.07.2022 - 09:19:00
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6 flex">
                <FiMonitor className="w-5 h-5" />
                <FiBell className="w-5 h-5" />
                <HiChip className="w-5 h-5" />
                <TbRouter className="w-5 h-5" />
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input type='checkbox' />
              </th>
              <td className="py-4 px-6">
                485236954125
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6">
                08.07.2022 - 09:19:00
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6 flex">
                <FiMonitor className="w-5 h-5" />
                <FiBell className="w-5 h-5" />
                <HiChip className="w-5 h-5" />
                <TbRouter className="w-5 h-5" />
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input type='checkbox' />
              </th>
              <td className="py-4 px-6">
                485236954125
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6">
                08.07.2022 - 09:19:00
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6 flex">
                <FiMonitor className="w-5 h-5" />
                <FiBell className="w-5 h-5" />
                <HiChip className="w-5 h-5" />
                <TbRouter className="w-5 h-5" />
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input type='checkbox' />
              </th>
              <td className="py-4 px-6">
                485236954125
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6">
                08.07.2022 - 09:19:00
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6 flex">
                <FiMonitor className="w-5 h-5" />
                <FiBell className="w-5 h-5" />
                <HiChip className="w-5 h-5" />
                <TbRouter className="w-5 h-5" />
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input type='checkbox' />
              </th>
              <td className="py-4 px-6">
                485236954125
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6">
                08.07.2022 - 09:19:00
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6 flex">
                <FiMonitor className="w-5 h-5" />
                <FiBell className="w-5 h-5" />
                <HiChip className="w-5 h-5" />
                <TbRouter className="w-5 h-5" />
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <input type='checkbox' />
              </th>
              <td className="py-4 px-6">
                485236954125
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6">
                08.07.2022 - 09:19:00
              </td>
              <td className="py-4 px-6">
                enerji-izleme
              </td>
              <td className="py-4 px-6 flex">
                <FiMonitor className="w-5 h-5" />
                <FiBell className="w-5 h-5" />
                <HiChip className="w-5 h-5" />
                <TbRouter className="w-5 h-5" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

  )
}

export default Homepage