import Swiper from 'swiper'
import "swiper/dist/css/swiper.css" 
import React from 'react'
import axios from 'axios'
import "../scss/swipper.scss"
export default class Banner extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list:[],
      // url: "https://api1.34580.com/sz/Home/DefaultHomeV2Request?sourcetype=9&NowVersion=1"
    };
    this.getData=this.getData.bind(this);
  }
  componentDidMount(){
    // axios.get(this.state.url).then((res) => {
    //   console.log(res.data)
    //   this.setState({
    //     list: res.data.Data.FloorInfo.ConfigHomeFloors[4].AdvInfo.AdvItems
    //   })
    // })
    this.getData(this.props.string)
    console.log(this.state.list)
  }
  getData(string){
    axios.get('https://api1.34580.com/sz/Home/DefaultHomeV2Request?sourcetype=9&NowVersion=1').then( res => {
      switch(string){
        case 'yybjlist':
          this.setState({
            list:res.data.Data.FloorInfo.ConfigHomeFloors[24].AdvInfo.AdvItems
          })
          console.log(this.state.list)
          break;
        case 'cxdplist':
          this.setState({
            list:res.data.Data.FloorInfo.ConfigHomeFloors[24].AdvInfo.AdvItems
          })
          break;
        case 'mcpclist':
          this.setState({
            list:res.data.Data.FloorInfo.ConfigHomeFloors[4].AdvInfo.AdvItems
          })
          break;
        case 'sglclist':
          this.setState({
            list:res.data.Data.FloorInfo.ConfigHomeFloors[6].AdvInfo.AdvItems
          })
          break;
        case 'rqlclist':
          this.setState({
            list:res.data.Data.FloorInfo.ConfigHomeFloors[8].AdvInfo.AdvItems
          })
          break;
        case 'bphdlist':
          this.setState({
            list:res.data.Data.FloorInfo.ConfigHomeFloors[10].AdvInfo.AdvItems
          })
          break;
        case 'rphblclist':
          this.setState({
            list:res.data.Data.FloorInfo.ConfigHomeFloors[12].AdvInfo.AdvItems
          })
          break;
        case 'schxlist':
          this.setState({
            list:res.data.Data.FloorInfo.ConfigHomeFloors[14].AdvInfo.AdvItems
          })
          break;
        case 'lylclist':
          this.setState({
            list:res.data.Data.FloorInfo.ConfigHomeFloors[16].AdvInfo.AdvItems
          })
          break;
        case 'lszqlist':
          this.setState({
            list:res.data.Data.FloorInfo.ConfigHomeFloors[18].AdvInfo.AdvItems
          })
          break;
        case 'jslclist':
          this.setState({
            list:res.data.Data.FloorInfo.ConfigHomeFloors[20].AdvInfo.AdvItems
          })
          break;
        case 'wycxlist':
          this.setState({
            list:res.data.Data.FloorInfo.ConfigHomeFloors[22].AdvInfo.AdvItems
          })
          break;
      }
    })
  }
  componentDidUpdate(){
    var mySwiper = new Swiper('.swiper-container', {
      //direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay:{
        delay:5000,
        disableOnInteraction:false
      }
    })        
  }
  render(){
    return <div id='swiper'>
        <div className="swiper-container">
          <div className="swiper-wrapper">{
            this.state.list.map(item => {
              return <div className="swiper-slide"><img src={item.PicUrl} /></div>
            })
          }
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
  }
}