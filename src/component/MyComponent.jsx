import React from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import cssObj from '@/css/my.scss'
import axios from 'axios'

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
        this.state = {
            toList: []
        }
    }

    render() {
        const { toList } = this.state;
        var cols = ['Device name', 'Serial Number']
        return <div className="container">
            <span className="btn btn-sm btn-info" onClick={() => {
                alert('Hi!')
            }}>Hit it!</span><br />
            <img src="https://how2j.cn/example.gif" className="img-rounded"></img>
            <img src="https://how2j.cn/example.gif" className="img-thumbnail"></img>
            <div className="jumbotron">
                <h1>Bootstrap jumbotron</h1>
                <p>Resizable and responsive</p>
            </div>
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        {cols.map((item) => <th key={item}>{item}</th>)}
                    </tr>
                    <tr>
                        {cols.map((item) => <td key={item}>{item}</td>)}
                    </tr>
                </tbody>
            </table>
            {toList}
        </div>
    }

    componentDidMount() {
        axios.get('http://minint-shbrova.fareast.corp.microsoft.com:8886/device_portal/api/device/list').then(res => {
            this.setState({
                toList: <table className="table table-striped table-bordered"><tbody>{res.data.content.map((item) => <tr><td>{item.name}</td><td>{item.deviceId}</td><td>{item.osSDKInt}</td></tr>)}</tbody></table>
             })
        })
    }

}