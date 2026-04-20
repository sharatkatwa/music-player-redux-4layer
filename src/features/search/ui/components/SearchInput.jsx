import {  Search } from 'lucide-react'
import SearchContainer from './SearchContainer'
import useSearch from '../../state/useSearch'


const SearchInput = () => {

    const {findSearch,searchValue,searchSongs,playSearchedSong} = useSearch()
   
    
  return (<>
      <div className='relative w-100 border border-gray-500/50 rounded-full font-semibold flex items-center px-4'>
        <Search size={22}  className='text-gray-500' />
            <input autoComplete='none' onChange={findSearch} name='search' type="text" placeholder='What do you want to play?' className='w-full outline-none  px-4 py-2' />
        {searchValue && <SearchContainer searchSongs={searchSongs} playSearchedSong={playSearchedSong} />}
        </div>
  </>
        
  )
}

export default SearchInput