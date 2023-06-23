
import Search from './components/Search'

function App() {
  const handleSearchChange=(searchData:string)=>{
    console.log(searchData)
  }
  //data fetch
 
  return (
    <>
    <div className="px-[10%] py-2 rounded-lg">

      <Search handleSearchChange={handleSearchChange}/>
    </div>
    </>
  )
}

export default App
