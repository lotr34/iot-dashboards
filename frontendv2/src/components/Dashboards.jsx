import React from 'react'
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

import background from '../assets/1.png'
import acilDurum from '../assets/acildurum.png'
import aydinlatma from '../assets/aydinlatma.png'
import enerjiIzleme from '../assets/enerji_izleme.png'
import hareketSensoru from '../assets/hareket_sensoru.png'
import isiNem from '../assets/isinem.png'
import sayacOkuma from '../assets/sayac_okuma.png'
import sulama from '../assets/sulama.png'


const Dashboards = () => {
  const { openSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <>
    <div className='h-[100%] w-[85%] absolute top-0 right-0'>
    <img alt='bg-image' src={background} className='h-[100%]' />
    </div>
    <div className={`${isSidebarOpen ? 'ml-72': 'ml ml-16'} mt-6`}>
      <ul className={`${isSidebarOpen ? 'gap-x-4': 'gap-x-24'} grid grid-cols-3 list-none pt-8 h-[90vh] overflow-y-scroll scrollbar-hide`}>
        <li className='h-[12rem]'>
          <Link to='/' className='relative block overflow-hidden no-underline'>
            <div className='w-[65%]'>
              <div className='relative flex items-center p-4 bg-[#58595b] hover:bg-[#e51c21]'>
                <div>
                  <h3 className='text-[20px] m-0 text-white w-[7em] h-[65px] font-semibold'>Acil Durum Butonu</h3>
                </div>
              </div>
            </div>
          </Link>
          <img src={acilDurum} className='relative bottom-[160px] left-[150px] h-[230px] w-auto' />
        </li>
        <li className='h-[12rem]'>
          <Link to='/' className='relative block overflow-hidden no-underline'>
            <div className='w-[65%]'>
              <div className='relative flex items-center p-4 bg-[#58595b] hover:bg-[#e51c21]'>
                <div>
                  <h3 className='text-[20px] m-0 text-white w-[7em] h-[65px] font-semibold'>Aydınlatma Modülü</h3>
                </div>
              </div>
            </div>
          </Link>
          <img src={aydinlatma} className='relative bottom-[150px] left-[150px] h-[180px] w-auto' />
        </li>
        <li className='h-[12rem]'>
          <Link to='/' className='relative block overflow-hidden no-underline'>
            <div className='w-[65%]'>
              <div className='relative flex items-center p-4 bg-[#58595b] hover:bg-[#e51c21]'>
                <div>
                  <h3 className='text-[20px] m-0 text-white w-[7em] h-[65px] font-semibold'>Enerji İzleme Modülü</h3>
                </div>
              </div>
            </div>
          </Link>
          <img src={enerjiIzleme} className='relative bottom-[190px] left-[140px] h-[230px] w-auto' />
        </li>
        <li className='h-[12rem]'>
          <Link to='/' className='relative block overflow-hidden no-underline'>
            <div className='w-[65%]'>
              <div className='relative flex items-center p-4 bg-[#58595b] hover:bg-[#e51c21]'>
                <div>
                  <h3 className='text-[20px] m-0 text-white w-[9em] h-[65px] font-semibold'>Hareket Algılama Modülü</h3>
                </div>
              </div>
            </div>
          </Link>
          <img src={hareketSensoru} className='relative bottom-[160px] left-[150px] h-[230px] w-auto' />
        </li>
        <li className='h-[12rem]'>
          <Link to='/' className='relative block overflow-hidden no-underline'>
            <div className='w-[65%]'>
              <div className='relative flex items-center p-4 bg-[#58595b] hover:bg-[#e51c21]'>
                <div>
                  <h3 className='text-[20px] m-0 text-white w-[7em] h-[65px] font-semibold'>Isı ve Nem Modülü</h3>
                </div>
              </div>
            </div>
          </Link>
          <img src={isiNem} className='relative bottom-[175px] left-[150px] h-[230px] w-auto' />
        </li>
        <li className='h-[12rem]'>
          <Link to='/' className='relative block overflow-hidden no-underline'>
            <div className='w-[65%]'>
              <div className='relative flex items-center p-4 bg-[#58595b] hover:bg-[#e51c21]'>
                <div>
                  <h3 className='text-[20px] m-0 text-white w-[7em] h-[65px] font-semibold'>Su Sayacı Okuma</h3>
                </div>
              </div>
            </div>
          </Link>
          <img src={sayacOkuma} className='relative bottom-[170px] left-[120px] h-[220px] w-auto' />
        </li>
        <li className='h-[12rem]'>
          <Link to='/' className='relative block overflow-hidden no-underline'>
            <div className='w-[65%]'>
              <div className='relative flex items-center p-4 bg-[#58595b] hover:bg-[#e51c21]'>
                <div>
                  <h3 className='text-[20px] m-0 text-white w-[7em] h-[65px] font-semibold'>Akıllı Sulama</h3>
                </div>
              </div>
            </div>
          </Link>
          <img src={sulama} className='relative bottom-[150px] left-[140px] h-[190px] w-auto' />
        </li>
      </ul>
    </div>
    </>
  )
}

export default Dashboards