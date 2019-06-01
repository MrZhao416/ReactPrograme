import React,{ Component } from 'react';
import {connect} from 'react-redux'
import actionCreate from './actionCreator'
import store from '../store/store';
import axios from 'axios'
import Banner from './swipper'
import Three from './three'
import "../scss/home.scss"
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css" 
import ProductRow from './productRow'
class Home extends Component {
    constructor(props) {
        super(props) 
    }
    componentDidMount(){
       this.props.getData();
       this.props.getKeyWord();
       this.props.getBanner();
       this.props.getSmallMenu();
       this.props.getLikeList();
    }
    componentDidUpdate() {
        if(!myfirstSwiper){
            var myfirstSwiper = new Swiper('#first-swiper', {
                loop: true, // 循环模式选项
                pagination: {
                    el: '.first-pagination',
                },
                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false
                }
            });
        }else{
            return;
        }
        if(!smallMenuSwiper){
            var smallMenuSwiper = new Swiper('#small-menu', {
                loop: true, // 循环模式选项
                autoplay: false,
                // pagination: {
                //     el: '.small-menu-pagination',
                // },
            })
        }else{
            return;
        }  
    }
    render() {
        let firstbannerlist=this.props.home.firstbannerlist;
        let smallMenulist=this.props.home.smallMenulist;
        let SellPoints=this.props.home.SellPoints;
        let teselist=this.props.home.teselist;
        let fxhhlist=this.props.home.fxhhlist;
        let keyword=this.props.home.keyword;
        let bzwzlist=this.props.home.bzwzlist;
        let likelist=this.props.home.likelist;
        return (
            <div id='home'>
                <div className='search'>
                    <div className='searchleft'>
                        <span>苏州市</span>
                        <i className="iconfont icon-jiantou"></i>
                    </div> 
                    <div className='searchright'>
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <span>{keyword}</span>
                    </div>                  
                </div>
                <div className='firstbanner'>
                    <div className="swiper-container first-swiper" id="first-swiper">
                        <div className="swiper-wrapper">{
                            firstbannerlist.map(item => {
                                return <div key='item.Id' className="swiper-slide"><img src={item.PicUrl} /></div>
                            })
                        }
                        </div>
                        <div className="swiper-pagination first-pagination"></div>
                    </div>
                </div>
                <div className="sellPoints">
                    {
                        SellPoints.map( item => {
                            return <p>
                                <img src={item.PicUrl} />
                                {item.Description}
                            </p>

                        })
                    }
                </div>
                {/* <div className='firstwhite'></div> */}
                
                <img className="photo" src="http://pic2.34580.cn/group1/M00/A5/89/wKgNYlzw8WCATpfLAApZGJ2mukw291.gif"></img>
                <div className="smallMenu">
                    <div className="swiper-container small-menu" id='small-menu'>
                        <div className="swiper-wrapper small-menu-wrapper">
                            <div  className="swiper-slide small-menu-slide">
                                {
                                    smallMenulist.slice(0,9).map(item => {
                                        return <div>
                                            <img src={item.URL} />
                                            <span>{item.Name}</span>
                                        </div>
                                    })
                                }
                            </div>
                            <div className="swiper-slide small-menu-slide">
                                {
                                   smallMenulist.slice(9,19).map(item => {
                                        return <div>
                                            <img src={item.URL} />
                                            <span>{item.Name}</span>
                                        </div>
                                    })
                                }
                            </div>
                        
                        </div>
                        <div className="swiper-pagination small-menu-pagination"></div>
                    </div>
                </div>
                <img className="photo" src="http://static.34580.cn/cn/xinyonghuzhuanqu/shouye1116.png" />
                <div className="tese" >
                    <div>
                        {
                           teselist.map( item => {
                                return <img src={item.BackGroundImg} />
                            })
                        }
                    </div>
                </div>
                <Three string='fxhhlist' />
                <img className="lunbophoto" src="http://pic2.34580.cn/group1/M00/A5/83/wKgNYlzw6S2AXtFRAAH1F3xc20014.jpeg" />
                <ProductRow string='mslist'/>
                <Banner string='mcpclist'/>
                <Three string="dzwzlist"/>
                <Banner string='sglclist'/>
                <Three string="bzwzlist"/>
                <Banner string='rqlclist'/>
                <ProductRow string='zpzclist'/>
                <Banner string='bphdlist' />
                <ProductRow string='bphdlist'/>
                <Banner string='rphblclist'/>
                <ProductRow string='rphblclist'/>
                <Banner string='schxlist'/>
                <ProductRow string='schxlist'/>
                <Banner string='lylclist'/>
                <ProductRow string='lylclist'/>
                <Banner string='lszqlist'/>
                <ProductRow string='lszqlist'/>
                <Banner string='jslclist'/>
                <ProductRow string='jslclist'/>
                <Banner string='wycxlist'/>        
                <Three string='zpzclist' />
                <Banner string='yybjlist'/>

                {/* <Three /> */}
                <div className='disgussLike'>
                    <h3>猜你喜欢</h3>
                    <ul>
                        {
                            likelist.map( item => {
                                return <li>
                                    <img src={"http://picpro-sz.34580.com/sz/ImageUrl/" + item.PictureIds.split(",")[0] + "/500.jpeg"} />
                                    <div className='title'>{item.ProductName}</div>
                                    <div className='activity-label' style={{opacity:item.ActivityLabel?1:0}}>{item.ActivityLabel}</div>
                                    <div className='pricediv'>
                                        <span className='price'>￥{item.UnitPeriodMoney}</span>
                                        <p style={{opacity:item.MaxUnitPeriodMoney?1:0}} >
                                            <span  className='maxprice'>￥{item.MaxUnitPeriodMoney}</span>
                                            <span  className='max'>Max</span>
                                        </p>
                                        <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                    </div>
                                </li>
                                })
                        }
                    </ul>
                </div>
                
            </div>
            
        )
    }
}

var mapState=(state)=>state;
var mapAction=(dispatch)=>{
    return {
        getData(){
            dispatch(actionCreate.getData())
        },
        getKeyWord(){
            dispatch(actionCreate.getKeyWord())
        },
        getBanner(){
            dispatch(actionCreate.getBanner())
        },
        getSmallMenu(){
            dispatch(actionCreate.getSmallMenu())
        },
        getLikeList(){
            dispatch(actionCreate.getLikeList())
        }
    }
}
export default connect(mapState,mapAction)(Home);
