import React, { Component } from 'react';
import { connect } from 'react-redux'
import actionCreate from './actionCreator'
import Catageries from './catageries'
import Catagerytjfl from './catagerytjfl'

import { HashRouter as Router, Route, Link, NavLink, Switch ,Redirect} from 'react-router-dom'
class Catagary extends Component {
    constructor(props) {
        super(props);
        this.goSearch = this.goSearch.bind(this);
    }
    componentDidMount() {
        this.props.getList();
        this.props.getKeyword();
    }
    goSearch() {
        this.props.history.push('/search')
    }

    render() {
        let list = this.props.catagery.list
        let keyword = this.props.catagery.keyword;
        console.log(this.props);
        return <div id="catagery">
            <div className="catagery_search">
                <div onClick={this.goSearch}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <span>{keyword}</span>
                </div>
            </div>
            <div className="leftWrap">
                <ul className="leftNav">
                    <li>
                        <NavLink to={'/catagery/tjfl'} activeClassName="activeStyle">推荐分类</NavLink>
                    </li>
                    {
                        list.map((item) => {
                            return <li key={item.Id}>
                                <NavLink to={'/catagery/' + item.Id} key={item.Id} activeClassName="activeStyle">{item.Name}</NavLink>
                            </li>
                        })
                    }

                </ul>
            </div>

            <div className="rightView">
                <Switch>
                    <Redirect from="/catagery" to="/catagery/tjfl" exact/>
                    <Route path="/catagery/tjfl" component={Catagerytjfl}  />
                    <Route path="/catagery/:id?" component={Catageries} />
                </Switch>

            </div>
        </div>
    }
}

var mapState = (state) => state;
var mapAction = (dispatch) => {
    return {
        getList() {
            dispatch(actionCreate.getData());
        },
        getKeyword(){
            dispatch(actionCreate.getKeyword());
        }
    }
}
export default connect(mapState, mapAction)(Catagary);
