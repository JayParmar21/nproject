import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AddPlayer from './AddPlayer';
import Comp from '../Comp'

var ShallowRenderer = require('react-test-renderer/shallow'); // ES5 with npm
const TestRenderer = require('react-test-renderer'); // ES5 with npm
configure({ adapter: new Adapter() }) //enzyme is connected


describe("testing component", () => {

    it('find comp in addplayer', ()=>{
        const renderer = new ShallowRenderer();
        renderer.render(<AddPlayer />);
        const result = renderer.getRenderOutput();

        expect(result.type).toBe('div');
        expect(result.props.children).toEqual(<Comp></Comp>);
    })

    it('finds Comp', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<Comp />);
        const result = renderer.getRenderOutput();

        expect(result.type).toBe('div');
        expect(result.props.children).toEqual([
            <p>Student data</p>,
            <h1>hello</h1>,
            <p className="my">Hello</p>
        ]);
    })
})
    // it('check content' , () => {
    // const testRenderer = TestRenderer.create(<Cmp />);
    // const testInstance = testRenderer.root;
    // //console.log("instance::",testInstance)
    // expect(testInstance.findByProps({className: "my"}).children).toEqual(['Hello']);
    // expect(testInstance.findByType('h1').children).toEqual(['hello']);
    // })

    // it('Counter wrapper has given class' , () => {
    // const wrapper = shallow(<Counter/>)
    // //expect(wrapper.find('div').hasClass('subclass')).toBe(true)
    // expect(wrapper.find('button').length).toBe(1)
    // })
    // });
