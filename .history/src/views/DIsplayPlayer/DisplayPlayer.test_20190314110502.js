import React from 'react'
import {configure, shallow, mount}  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
//import AddPlayer from '../AddPlayer/AddPlayer'
import Comp from '../Comp.js';
import DisplayPlayer from './DisplayPlayer.js';

configure({adapter: new Adapter()});

describe("<DisplayPlayer />",()=>{
    it('description',()=>{
       const wrapper=mount(<DisplayPlayer />);
       expect(wrapper.find(<Comp></Comp>).length).toBe(1) ;
    })
})