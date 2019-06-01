import axios from 'axios'

export default{
  getData(){
    return (dispatch)=>{
       axios.get("https://api1.34580.com/sz/Home/DefaultHomeV2Request?sourcetype=9&NowVersion=1").then( res => {
            console.log(res.data.Data.FloorInfo.ConfigHomeFloors[1].PicAdvItems)
       dispatch({
                SellPoints: res.data.Data.HomeTabInfos[0].SellPoints,
                teselist: res.data.Data.FloorInfo.ConfigHomeFloors[0].PicAdvItems,
                fxhhlist: res.data.Data.FloorInfo.ConfigHomeFloors[1].PicAdvItems,
                bzwzlist: res.data.Data.FloorInfo.ConfigHomeFloors[7].PicAdvItems,
                type:'GETDATA'
            })

        })
    }
    
  },
  getKeyWord(){
    return (dispatch)=>{
      axios.get("https://api1.34580.com/sz/productSearch/defaultKeyword?sourcetype=9").then((res)=>{
            // console.log(res.data)
            dispatch({
                type:'GETKEYWORD',
                keyword:res.data.Data.keyword
            })
        });
    }
  
  },
  getBanner(){
    return (dispatch)=>{
       axios.get("https://api1.34580.com/sz/Home/AdvertisementPhotoshootRequest?sourcetype=9&json=%7B%22TypeCode%22:1011,%22PlatForm%22:1500%7D").then( res => {
            console.log(res.data.Data)
            dispatch({
              type:'GETBANNER',
                firstbannerlist:res.data.Data,
            })
        });
    }
   
  },
  getSmallMenu(){
    return (dispatch)=>{
        axios.get("https://api1.34580.com/sz/Home/ShortcutIconRequest?sourcetype=9").then( res => {
            // console.log(res.data.Data.ShortcutIcons);
            dispatch( {
              type:'GETSMALLMENU',
                smallMenulist: res.data.Data.ShortcutIcons
            })
            // console.log(this.state.smallMenulist)
        })
    }
  
        //smallMenu
        
  },
  getLikeList(){
      return (dispatch)=>{
          axios.get("https://api1.34580.com/sz/floors/recommendFloor?sourcetype=9&PageIndex=0").then( res => {
              dispatch( {
                type:'GETLIKELIST',
                likelist: res.data.Data.SourceData
              })
          })
      }
  }
}