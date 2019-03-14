import React from 'react'
import {configure, shallow}  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AddPlayer from '../AddPlayer/'
import DisplayPlayer from './DisplayPlayer';

configure({adpter: new Adapter()});

describe("button test",()=>{
    it('description',()=>{
       const wrapper=shallow(<DisplayPlayer />);
       expect(wrapper.find(<AddPlayer />)).toHaveLength(2) ;
    })
})