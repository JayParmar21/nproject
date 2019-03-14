import React from 'react'
import {configure, shallow}  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
//import AddPlayer from '../AddPlayer/AddPlayer'
import DisplayPlayer from './DisplayPlayer';

configure({adpter: new Adapter()});

describe("<DisplayPlayer />",()=>{
    it('description',()=>{
       const wrapper=shallow(<DisplayPlayer />);
       expect(wrapper.find(<AddPlayer />)).to.have.lengthOf(3)(1) ;
    })
})