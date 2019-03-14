import {configure}  from 'enzyme'
import Adapter from 'enzyme-adapter'

describe("addplayer",()=>{
    it('description',()=>{
       expect(find(<AddPlayer />).toEqual(true)) 
    })
})