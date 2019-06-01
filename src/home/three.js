import React from 'react'
import '../scss/three.scss'
import axios from "axios"

 class Three extends React.Component{
  constructor(props){
    super(props)
    this.state={   
      list:[], 
    }
    console.log(props)
    this.getData=this.getData.bind(this)
  }

  componentDidMount(){
    this.getData(this.props.string)
  }
  getData(string){
    axios.get('https://api1.34580.com/sz/Home/DefaultHomeV2Request?sourcetype=9&NowVersion=1').then( res => {
      switch(string){
        case 'fxhhlist':
          this.setState({
            list:res.data.Data.FloorInfo.ConfigHomeFloors[1].PicAdvItems,
          })
          break;
        case 'dzwzlist':
          this.setState({
            list:res.data.Data.FloorInfo.ConfigHomeFloors[5].PicAdvItems,
          })
          break;
        case 'bzwzlist':
          this.setState({
            list:res.data.Data.FloorInfo.ConfigHomeFloors[7].PicAdvItems,
          })
          break;
        case 'zpzclist':
           this.setState({
            list:res.data.Data.FloorInfo.ConfigHomeFloors[23].PicAdvItems,
          })
          break;
      }
    })
  }
  render(){

      
    return <div id='three'>
      <div>
        {
          this.state.list.map(item => {
            return <img src={item.BackGroundImg} />
          })
        }
      </div>
      
    </div>
  }
}


export default Three