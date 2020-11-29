console.log("a new webpack project, welcome")

import React from 'react'
import ReactDOM from 'react-dom'

// create a virtual Dom element

var link=React.createElement('a',{href:'http://www.baidu.com'},'baidu')

ReactDOM.render(link,document.getElementById('app'))