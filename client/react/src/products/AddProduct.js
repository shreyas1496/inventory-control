import React from 'react';

export class AddProduct extends React.Component {
    constructor(props) {
        super(props);
    }
    handleSubmit() {
         
    }
    render() {
        return (
            <div id="productaddform" class="modal fade" role="dialog">
                <div class="modal-dialog">

                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Modal Header</h4>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label class="sr-only" for="email">Email address:</label>
                                <input type="email" class="form-control" id="email"></input>
                            </div>
                            <div class="form-group">
                                <label class="sr-only" for="pwd">Password:</label>
                                <input type="password" class="form-control" id="pwd"></input>
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox"></input> Remember me</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" onClick={this.handleSubmit}>Save</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AddProduct;
