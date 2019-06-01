import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import actionCreate from './actionCreator'
import Catageries from './catageries'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
class Catagaries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            currentID: -1
        }
        this.getData = this.getData.bind(this);
    }
    componentDidMount() {
        this.getData(this.props.match.params.id)
    }
    getData(id) {
        if (this.state.currentID !== id) {
            axios.get("https://api1.34580.com/wx/Products/SubCategoryRequest?sourcetype=9&Id=" + id).then((res) => {
                this.setState({
                    list: res.data.Data.SubCategories,
                    currentID: id
                })
            })
        }
    }

    componentDidUpdate() {
        var id = this.props.match.params.id;
        this.getData(id)

    }
    render() {
        return <div>
            {
                this.state.list.map((item) => {
                    return <div key={item.id}>
                        <h2>
                            <span className="title">{item.MetaKeywords}</span>
                            <span>
                                <span>全部</span>
                                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                            </span>
                        </h2>
                        <div>
                            {
                                item.SmallCategories.map((item) => {
                                    return <div className="imgCon" key={item.Id+"132311"}>
                                        <img src={"http://picpro-sz.34580.com/wx/ImageUrl/"+item.PictureId+"/160.jpeg"}/>
                                        <span>{item.Name}</span>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                })
            }
        </div>
    }
}


export default Catagaries;
