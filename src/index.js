console.log("a new webpack project, welcome")

import React from 'react'
import ReactDOM from 'react-dom'

import MyComponent from '@/component/MyComponent'
// create a virtual Dom element

var link = React.createElement('a', { href: 'http://www.baidu.com' }, 'baidu')
var redSpan = React.createElement('span', { style: { color: 'red' } }, 'Click this: ', link)

var list = ['a', 'b', 'c'].map(item => <span className="list_item" style={{ color: 'red' }} key={item}><h1><input type='checkbox' />{item}</h1><hr /></span>)

// all attr of props var are read-only
// the name of a component must be capitalized
function Hello(props) {
    return <div>this is hello module, the dog name is {props.name}, and it's in {props.where} now</div>
}

var dog = {
    name: 'girl',
    where: 'poland'
}
// ES6展开运算符
var bigDog = {
    size: "big",
    ...dog
}

var jsxElement =
    <div>
        this is a jsx element, {redSpan},{list}
        <Hello {...dog} />
        <MyComponent val='abc' />
    </div>



ReactDOM.render(jsxElement, document.getElementById('app'))