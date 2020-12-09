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
        return <div className="container">
            <span className="btn btn-sm btn-info" onClick={() => {
                alert('Hi!')
            }}>Hit it!</span><br />
            <img src="https://how2j.cn/example.gif" className="img-rounded"></img>
            <img src="https://how2j.cn/example.gif" className="img-thumbnail"></img>
            {toList}
        </div>
    }

    componentDidMount() {
        axios.get('/api/device/list').then(res => {
            this.setState({
                toList: <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <td colSpan='4'>
                                <div className="jumbotron">
                                    <h1>Bootstrap jumbotron</h1>
                                    <p>Resizable and responsive</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Screenshot</td>{res.data.content.map((item) => <td><img className={cssObj.device_screenshot} src={item.imageRelPath}></img></td>)}
                        </tr>
                        <tr>
                            <td>Name</td>{res.data.content.map((item) => <td>{item.name}</td>)}
                        </tr>
                        <tr>
                            <td>Device ID</td>{res.data.content.map((item) => <td>{item.deviceId}</td>)}
                        </tr>
                        <tr>
                            <td>Display metrics</td>{res.data.content.map((item) => <td>{item.screenSize}</td>)}
                        </tr>
                        <tr>
                            <td>Status</td>{res.data.content.map((item) => <td>{item.status}</td>)}
                        </tr>
                        <tr>
                            <td>Is testing</td>{res.data.content.map((item) => <td>{item.testing.toString()}</td>)}
                        </tr>
                        <tr>
                            <td>OS version code</td>{res.data.content.map((item) => <td>{item.osSDKInt}</td>)}
                        </tr>
                    </tbody>
                </table>
            })
        })
    }

}