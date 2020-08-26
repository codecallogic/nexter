import React, { Component } from 'react';
import places from '../services/places'

class Test extends Component {

    constructor() {
        super()
        this.state = {
            search: null,
            schools: [],
        }
    }

    schools = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        let timeout = null;

        clearTimeout(timeout);

        timeout = setTimeout( async () => {
            let search = await places.places(this.state)
            
            this.setState({
                schools: search
            })
        }, 600)
    }
    
    render () {

        return (
            <div>
            {/* <div className="formosi-gallery">
                <figure className="formosi-gallery-item formosi-gallery-item-1">
                    <img src="https://i.imgur.com/0ppT7c1.png" alt="Gallery image 1" className="formosi-gallery-image"/>
                </figure>
                <figure className="formosi-gallery-item formosi-gallery-item-2">
                    <img src="https://i.imgur.com/gTZW3U8.png" alt="Gallery image 2" className="formosi-gallery-image"/>
                </figure>
                <figure className="formosi-gallery-item formosi-gallery-item-3">
                    <img src="https://i.imgur.com/3r3WkJC.jpg" alt="Gallery image 3" className="formosi-gallery-image"/>
                </figure>
                <figure className="formosi-gallery-item formosi-gallery-item-4">
                    <img src="https://i.imgur.com/v4mNRyr.png" alt="Gallery image 4" className="formosi-gallery-image"/>
                </figure>                
            </div> */}
            <div className="formosi-form">
                <input type="text" className="formosi-form-school" list="datalist" name="search" onChange={this.schools} value={this.state.input} autoComplete="off" placeholder="Enter School" autoFocus/>
                <datalist id="datalist">
                    {this.state.schools !== null && this.state.schools.map( (s, i) =>                       
                        <option key={i} className="option" value={s.name}></option>
                    )}  
                </datalist>
            </div>
            {/* <div className="fformosi-custom-select">
                <input type="text" className="formosi-custom-select-input" name="search" onChange={this.schools} value={this.state.input} autoComplete="off" placeholder="Enter School" autoFocus/>
                <svg>
                    <use xlinkHref="/images/sprite.svg#icon-chevron-thin-down"></use>
                </svg>
                <ul className="formosi-custom-select-options">
                    {this.state.schools !== null && this.state.schools.map( (s, i) => !("photos" in s)   ?                    
                        <li key={i} className="formosi-custom-select-option"><img src="" alt="" className="formosi-custom-select-image"/><span className="formosi-custom-select-text">{s.name}</span></li>
                        :                        
                        <li key={i} className="formosi-custom-select-option"><img src="" alt="" className="formosi-custom-select-image"/><span className="formosi-custom-select-text">{s.name}</span></li>

                    )}  
                </ul>
            </div> */}
            </div>
        )
    }
}

export default Test