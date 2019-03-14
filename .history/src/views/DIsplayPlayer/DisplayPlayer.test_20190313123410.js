import {configure, shallow}  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from './DisplayPlayer'

configure({adpter: new Adapter()});

describe("button test",()=>{
    it('description',()=>{
       const wrapper=shallow(<Button />)
       expect(wrapper.find(<Button />)).toHaveLength(3) ;
    })
})