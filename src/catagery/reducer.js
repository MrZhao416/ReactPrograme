var initState={
    list:[],
    keyword:"",
    tjlist:[]
}

var reducer=(state=initState,action)=>{
    var newState={...state};
    if(action.type==='ADDLIST'){
        newState.list=action.list
    }
    if(action.type==='ADDTJLIST'){
        newState.tjlist=action.tjlist
    }
    if(action.type==='GETKEYWORD'){
        newState.keyword=action.keyword
    }
    return newState;
}

export default reducer;