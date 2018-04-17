import React from 'react'

class ModalForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dishName : this.props.dishName
        };
    }

    componentDidMount() {
        var dishName = this.props.dishName
        this.setState({
            dishName: dishName
        })
    }

    render() {
        return (
            <div id="editModal" className="modal fade" role="dialog">
                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Edit {this.props.dishName}</h4>
                        </div>
                        <div className="modal-body">
                            <input type="text" placeholder="Enter Dishname" /> <br />
                            <input type="text" placeholder="Enter Ingridients (separated by ,)" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalForm;