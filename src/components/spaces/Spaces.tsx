import { Component, ReactNode } from "react";
import { DataService } from "../../services/DataService";
import { Space } from "../../model/Model";
import {Space as SpaceComponent} from './Space'
import {ConfirmModalComponent} from './ConfirmModalComponent'
import { Link } from "react-router-dom";

interface SpacesState {
 spaces: Space[]
 showModal: boolean,
 modalContent: string
}

interface SpacesProps {
    dataService: DataService
}

export class Spaces extends Component<SpacesProps, SpacesState> {
    constructor(props: SpacesProps) {
        super(props)
        this.state = {
            spaces: [],
            showModal: false,
            modalContent: ''
        }
        this.reserveSpace = this.reserveSpace.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

     async componentDidMount() {
        const spaces = await this.props.dataService.getSpaces()
        console.log(spaces)
        this.setState({
            spaces: spaces
        })
     }

     private async reserveSpace(spaceId: string) {
        const reservationResult = await this.props.dataService.reserveSpace(spaceId)
        if (reservationResult) {
            this.setState({
                showModal: true,
                modalContent: `You reserved the space with ID ${spaceId} and got reservation number ${reservationResult}`
            })
        }
        else {
            this.setState({
                showModal: true,
                modalContent: `You can't reserve the space with space ID ${spaceId}`
            })
        }
     }

     private renderSpaces() {
        const rows: any[] = []
        for (const space of this.state.spaces) {
            rows.push(
                <SpaceComponent location={space.location} name={space.name} spaceId={space.spaceId} photoURL={space.photoURL} reserveSpace={this.reserveSpace}/>
            )
        }
        return rows
     }

     private closeModal() {
        this.setState({
            showModal: false,
            modalContent: ''
        })
     }

     render() {
         return (
         <div>
            <h2>Welcome to the Spaces page!</h2>
            <Link to="/create-space">Create space</Link>
            <br/>
            {this.renderSpaces()}
            <ConfirmModalComponent close={this.closeModal} content={this.state.modalContent} show={this.state.showModal}/>
         </div>
         )}
}