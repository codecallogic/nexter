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

    schools = async (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        let search = await places.places(this.state)

        // console.log(search.results.name)

        let list = search.results.slice().sort();
        let nonDuplicates = [];

        // console.log(list.length)
        
        for(let i = 0; i < list.length -1; i++){
            // console.log(list[i].name)
            if(list[i + 1].place_id !== list[i].place_id){
                nonDuplicates.push(list[i])
            }
        }

        // console.log(nonDuplicats.length)

        // for(let i = 0; i < nonDuplicates.length -1; i++){
        //     console.log(nonDuplicates[i].name)
        // }
        
        this.setState({
            schools: nonDuplicates
        })


        // console.log(this.state.schools)
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
                <input type="text" className="formosi-form-school" list="datalist" name="search" onChange={this.schools} value={this.state.input} autoComplete="off" placeholder="Enter School"/>
                <datalist id="datalist">
                    {this.state.schools !== null && this.state.schools.map( (s, i) =>                       
                        <option key={i} value={s.name}></option>
                    )}  
                </datalist>
            </div>
            </div>
        )
    }
}

export default Test