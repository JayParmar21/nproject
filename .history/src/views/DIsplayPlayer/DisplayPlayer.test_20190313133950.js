import React from 'react'
import {configure, shallow}  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Button from './DisplayPlayer'
import DisplayPlayer from './DisplayPlayer';

configure({adpter: new Adapter()});

describe("button test",()=>{
    it('description',()=>{
       const wrapper=shallow(<DisplayPlayer />);
      //w
       expect(wrapper.find(<Button />)).toHaveLength(2) ;
    })
})