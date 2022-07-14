import { Component, ReactNode } from "react";
import './Space.css'
let genericImage = require('../../assets/space.jpeg')

interface SpaceProps {
    spaceId: string,
    name: string,
    location: string,
    photoURL?: string,
    reserveSpace: (spaceId: string) => void
}

export class Space extends Component<SpaceProps> {
    private renderImage() {
        if (this.props.photoURL) {
            return <img src={this.props.photoURL} alt='Space'/>
        }
        else {
            return <img src={genericImage} alt='Space'/>
        }
    }

    render(): ReactNode {
        return <div className="spaceComponent">
            {this.renderImage()}
            <label className="name">{this.props.name}</label><br/>
            <label className="SpaceId">{this.props.spaceId}</label><br/>
            <label className="location">{this.props.location}</label><br/>
            <button onClick={() => this.props.reserveSpace(this.props.spaceId)}>Reserve</button>
        </div>
    }
}