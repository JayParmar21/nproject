import React from 'react'
import Enzyme  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Comp from '../Comp.js';
import AddPlayer from '../AddPlayer/AddPlayer';

configure({adapter: new Adapter()});

describe("<AddPlayer />",()=>{
    it('description',()=>{
       const wrapper=shallow(<AddPlayer />);
       expect(wrapper).toContainReact(<Comp />) ;
    })
})