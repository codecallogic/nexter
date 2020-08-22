import React, { Component } from 'react';

class Test extends Component {
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
                <input type="text" className="formosi-form-school" list="datalist"/>
                <datalist id="datalist">
                    <option value="UCS"></option>
                    <option value="Hult"></option>                
                </datalist>
            </div>
            </div>
        )
    }
}
export default Test