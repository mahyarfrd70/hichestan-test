import React , {useState, useEffect , useRef} from 'react';
import {Checkbox, Button} from "antd"
import Card from "./components/Card"
import api from './helpers/api';
import Icon from './components/Icon';
import "./App.scss"


const getData = (options ,page)=>{
  const params = options ? {...options , check_count: true} : {check_count:true}
  return api.get(`/catalogs/search/${(page-1)*12}/12`, params )
    .then((res)=>{
      return res
    }).catch((err)=>{
      throw err.response
    })
}
function App() {
  const [data , setData] = useState([])
  const [hasMore , setHasMore] = useState(true)
  const [loading , setLoading] = useState(true)
  const [page , setPage] = useState(1)
  const [showFilter , setShowFilter] = useState(false)
  const [filterValues , setFilterValues] = useState(null)

  const list = useRef(null)

  useEffect(() => {
    const node = list.current
    node.addEventListener('scroll', handleScrollFetch);
    return () => node.removeEventListener('scroll', handleScrollFetch);
  },[]);

  useEffect(() => {
    if(!loading) return
    getData(filterValues , page).then(res=>{
      const newData = [...data ,...res.data.data]
      const hasMore = newData.length < res.data.meta.total_count
      setData(newData)
      setHasMore(hasMore)
      setPage(prev => prev+1)
      setLoading(false)
    }).catch(err => {
      console.log(err)
    })
  }, [loading]);

  function handleScrollFetch(e){
    if (window.innerHeight + list.current.scrollTop - 53 !== list.current.scrollHeight) return;
    
    if(hasMore){
        setLoading(true)
    } 
  }

  const filterClick = (e)=>{
    list.current.scrollTop = 0
    getData(filterValues, 1).then(res=>{
      const hasMore = res.data.data.length < res.data.meta.total_count
      setData(res.data.data)
      setHasMore(hasMore)
      setPage(2)
      setLoading(false)
      setShowFilter(false)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <React.Fragment>
      <div className="filter-box-btn">
        <span onClick={()=>setShowFilter(true)}>

        <Icon name="filter" size="32"/>
        </span>
      </div>
    <div className="App" ref={list}>
      {data.map(item=>(
        <Card 
          create={item.create_timestamp}
          district={item.district_name} 
          imgUrl={item.rooms_img} 
          imageNumber={item.image_count}
          yearlyAmount={item.mortgage_amount}
          monthlyAmount={item.monthly_rent}
          meter={item.unit_area_extent}
          roomCount={item.room_qty}/>
      ))}
      {loading && <div>...loading</div>}
    </div>
    {showFilter && (
        <div className="filter-box">
          <div className="header-title">
            <span onClick={()=>setShowFilter(false)}>
              <Icon name="close" size="14"/>
            </span>
            <h4>فیلترها</h4>
          </div>
          <div className="filter-form">
            <Checkbox name="has_picture" checked={(filterValues && filterValues["has_picture"]) || false} onChange={(e)=>{console.log(e);setFilterValues(prev =>( {...prev , [e.target.name]: e.target.checked}))}}>فقط عکس دار</Checkbox>
          </div>
          <div className="filter-btn">
            <Button block onClick={filterClick}>فیلتر کن</Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default App;
