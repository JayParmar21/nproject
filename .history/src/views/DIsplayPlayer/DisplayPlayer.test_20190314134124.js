import React from 'react'
import { shallow, configure }  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AddPlayer from '../AddPlayer/AddPlayer';
import Comp from '../Comp'

var ShallowRenderer = require('react-test-renderer/shallow'); // ES5 with npm
const TestRenderer = require('react-test-renderer'); // ES5 with npm
configure({adapter: new Adapter()});

describe("<AddPlayer />",()=>{
    it('description',()=>{
       const wrapper=shallow(<AddPlayer />);
       expect(wrapper.find(<Comp></Comp>)).toHavelength(1);
    })
})