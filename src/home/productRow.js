import React from 'react'
import Axios from 'axios';
import '../scss/productRow.scss'
export default class ProductRow extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list:[]
    }
    this.getData=this.getData.bind(this);
  }
  componentDidMount(){
    this.getData(this.props.string)
  }
  getData(string){
    Axios.get('https://api1.34580.com/sz/Home/DefaultHomeV2Request?sourcetype=9&NowVersion=1').then( res => {
      switch(string){
        case 'mslist':
          this.setState({
            list: res.data.Data.FloorInfo.ConfigHomeFloors[3].ProductItems
          })
          break;
        case 'zpzclist':
          this.setState({
            list: res.data.Data.FloorInfo.ConfigHomeFloors[9].ProductItems
          })
          break;
        case 'bphdlist':
          this.setState({
            list: res.data.Data.FloorInfo.ConfigHomeFloors[11].ProductItems
          })
          break;
        case 'rphblclist':
          this.setState({
            list: res.data.Data.FloorInfo.ConfigHomeFloors[13].ProductItems
          })
          break;
        case 'schxlist':
          this.setState({
            list: res.data.Data.FloorInfo.ConfigHomeFloors[15].ProductItems
          })
          break;
        case 'lylclist':
          this.setState({
            list: res.data.Data.FloorInfo.ConfigHomeFloors[17].ProductItems
          })
          break;
        case 'lszqlist':
          this.setState({
            list: res.data.Data.FloorInfo.ConfigHomeFloors[19].ProductItems
          })
          break;
        case 'jslclist':
          this.setState({
            list: res.data.Data.FloorInfo.ConfigHomeFloors[21].ProductItems
          })
          break;
      }  
    })
  }
  render(){
    return <div className='product-wrap'>
      <ul>
        {
          this.state.list.map( item => {
            return <li>
              <img src={"http://picpro-sz.34580.com/sz/ImageUrl/" + item.PictureId + "/160.jpeg"} />
              <div className='productName' >{item.ProductName}</div>
              <div className="activity-label">
                <span></span>
              </div>
              <div className='productPrice'>
                <div>
                  <em>￥{item.PeriodMoney}</em>
                  <span>{item.Unit}</span>
                </div>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </div>

            </li>
          })
        }
        
      </ul>
    </div>
  }
}