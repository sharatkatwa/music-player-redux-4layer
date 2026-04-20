import { AudioWaveform, } from 'lucide-react'
import React from 'react'
import SearchInput from '../../features/search/ui/components/SearchInput'

const Navbar = () => {
  return (
    <div className=' w-full flex items-center justify-between px-10 h-15'>

        <div className='flex items-center gap-2'>
            <AudioWaveform size={24} className='text-green'/>
            <p className='font-bold text-xl'>Gotify</p>
        </div>
        <SearchInput />
        <div className='flex items-center gap-2 font-semibold'>
            Sharat
            <div className='h-8 w-8 rounded-full bg-green text-black flex items-center justify-center font-bold text-xl'>S</div>
        </div>
    </div>
  )
}

export default Navbar