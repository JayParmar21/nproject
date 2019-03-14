import {configure}  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({Adpter:})
describe("addplayer",()=>{
    it('description',()=>{
       expect(find(<AddPlayer />).toEqual(true)) 
    })
})