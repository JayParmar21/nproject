const INITIAL_STATE={
    player:[{id:1,firstName:'virat',lastName:'sharma',score:100},
    {id:2,firstName:'rahul',lastName:'patel',score:20},
    {id:3,firstName:'vikas',lastName:'khanna',score:20},
    {id:4,firstName:'naimish',lastName:'sharma',score:80},
    {id:5,firstName:'omkar',lastName:'patel',score:40},],
    addplayer:[]
};
export const FetchData='FetchData';
export const AddData='AddData';
export const EditData='EditData';
export const DeleteData='DeleteData'

export default (state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case 'FetchData':{
            
            let playerdetail=[...state.player]
            let n;
            playerdetail.sort(function (a, b) {
                if (a.score === b.score)
                    n=0
                else if(a.score < b.score)
                    n=-1
                else 
                    n=1
                    
                if(n===0)
                    n=a.lastName.localeCompare(b.lastName);
                return n
            });
           
            return Object.assign({},state,{player:playerdetail})
        }
        case 'AddData':{
        
            const player=state.player.concat(action.data)
            let n;
            player.sort(function (a, b) {
                if (a.score === b.score)
                    n=0
                else if(a.score < b.score)
                    n=-1
                else 
                    n=1
                    
                if(n===0)
                    n=a.lastName.localeCompare(b.lastName);
                return n
            });
            return Object.assign({},state,{player:player})
        }
        case 'EditData':{
            debugger;
            const eid=action.data.id
            let i=0
            let index
            let playerdetail=state.player
            playerdetail.map((player)=>{
                if (eid===player.id)
                {
                    index=i;
                }
                i=i+1;
                return true
            })

            playerdetail[index]={action.data}
            console.log("p..",playerdetail)
            const playerdetail1={...playerdetail}
            console.log("p1..",playerdetail1)
            let n;
            playerdetail1.sort((a, b)=> {
                if (a.score === b.score)
                    n=0
                else if(a.score < b.score)
                    n=-1
                else 
                    n=1
                    
                if(n===0)
                    {
                        n=a.lastName.localeCompare(b.lastName);
                     
                    }
                return n
            });
            console.log("sorted p1..",playerdetail1)
            return Object.assign({},state,{player:playerdetail1})
        }
        case 'DeleteData':{
            let i=0
            let index
            let playerdetail=[...state.player]
            playerdetail.map((player)=>{
                if (action.id===player.id)
                {
                    index=i;
                }
                i=i+1;
                return true
            })
            playerdetail.splice(index,1)
            return Object.assign({},state,{player:playerdetail})
        }
        default:
            return state
    }
} 
