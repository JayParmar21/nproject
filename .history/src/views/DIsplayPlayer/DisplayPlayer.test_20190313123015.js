import {configure}  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from './DisplayPlayer'

configure({adpter: new Adapter()});

describe("button test",()=>{
    it('description',()=>{
        const wrapper=shallo
       expect(find(<Button />).toEqual(3)) 
    })
})