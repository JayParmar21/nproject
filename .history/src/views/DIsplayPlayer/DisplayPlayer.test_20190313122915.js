import {configure}  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adpter: new Adapter()});

describe("button test",()=>{
    it('description',()=>{
       expect(find(<Button />).toEqual(3)) 
    })
})