var initState={
  keyword:'',
  firstbannerlist:[],
  smallMenulist:[],
  SellPoints:[],
  teselist:[],
  fxhhlist:[],
  bzwzlist:[],
  likelist:[]
}

var reducer=(state=initState,action)=>{
    var newState={...state};
    if(action.type==='GETDATA'){
      newState.SellPoints=action.SellPoints
      newState.teselist=action.teselist
      newState.fxhhlist=action.fxhhlist
      newState.bzwzlist=action.bzwzlist
      console.log( newState.fxhhlist)
    }
    if(action.type==='GETLIKELIST'){
      newState.likelist=action.likelist
    }
    if(action.type==='GETKEYWORD'){
      newState.keyword=action.keyword
    }
    if(action.type==='GETBANNER'){
      console.log(action.firstbannerlist)
      newState.firstbannerlist=action.firstbannerlist
    }
    if(action.type==='GETSMALLMENU'){
      newState.smallMenulist=action.smallMenulist
    }
    return newState;
}

export default reducer;