import React from 'react'
import {configure, shallow}  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
//import AddPlayer from '../AddPlayer/AddPlayer'
import Comp from '../Comp
import DisplayPlayer from './DisplayPlayer';

configure({adapter: new Adapter()});

describe("<DisplayPlayer />",()=>{
    it('description',()=>{
       const wrapper=shallow(<DisplayPlayer />);
       expect(wrapper.find(<Comp />).length).toBe(1) ;
    })
})