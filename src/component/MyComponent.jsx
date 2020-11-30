import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import cssObj from '@/css/my.scss'

export default function MyComponent(props) {

    return <span className={cssObj.title} style={{ color: 'red' }}>{props.val}
        <p className='just'>Another line</p>
        <button onClick={() => {
            console.log('Clicked!' + this)
        }}>Click</button>
    </span>
}

export class DeviceProfile extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        var cols = ['Device name', 'Serial Number']
        return <div className="container">
            <div className="jumbotron">
                <h1>Bootstrap jumbotron</h1>
                <p>Resizable and responsive</p>
            </div>
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        {cols.map((item) => <th key={item}>{item}</th>)}
                    </tr>
                </tbody>
            </table>
        </div>
    }

}