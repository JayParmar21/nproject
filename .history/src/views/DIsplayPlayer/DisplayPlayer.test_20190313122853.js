import {configure}  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adpter: new Adapter()});

describe(,()=>{
    it('description',()=>{
       expect(find(<AddPlayer />).toEqual(true)) 
    })
})