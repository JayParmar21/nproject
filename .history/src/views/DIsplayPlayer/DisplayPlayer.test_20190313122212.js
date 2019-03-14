import {configure}  from 'enzyme'
import Adapter from ''

describe("addplayer",()=>{
    it('description',()=>{
       expect(find(<AddPlayer />).toEqual(true)) 
    })
})