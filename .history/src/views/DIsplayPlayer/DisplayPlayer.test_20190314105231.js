import React from 'react'
import {configure, shallow}  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
//import AddPlayer from '../AddPlayer/AddPlayer'
import Comp from '../Comp.js'
import {expect} from ''
import DisplayPlayer from './DisplayPlayer.js';

configure({adapter: new Adapter()});

describe("<DisplayPlayer />",()=>{
    it('description',()=>{
       const wrapper=shallow(<DisplayPlayer />);
       expect(wrapper.find(<Comp></Comp>)).toHaveLength(1) ;
    })
})