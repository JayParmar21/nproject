import React from 'react'
import { shallow,  }  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AddPlayer from '../AddPlayer/AddPlayer';
import Comp from '../Comp'

configure({adapter: new Adapter()});

describe("<AddPlayer />",()=>{
    it('description',()=>{
       const wrapper=shallow(<AddPlayer />);
       expect(wrapper.find(<Comp></Comp>)).toHavelength(1);
    })
})