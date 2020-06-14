import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { Header } from '../Header';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        const container = {
            position : "absolute",
            background : "#ffffff",
            margin : "auto",
            padding : "10px 20px",
            width : "77%",
            top : "2%",
            bottom : "2%",
            left : "20%",
            right : 0,
            borderRadius : "5px"
        };
        const tag ={
            border : "1px solid lavender",
            background: "lavender",
            fontSize: "15px",
            padding: "5px",
            marginBottom: "5px",
            borderRadius: "5px"
        }
        const btnAdd ={
            border : "1px solid transparent",
            background: "#32CD32",
            color: "#ffffff",
            fontSize: "16px",
            padding: "8px",
            marginBottom: "5px",
            borderRadius: "5px",
            float: "right"
        }
        return (
            <div style={{display:"inline-block",width:"20%"}}>
                <Header></Header>
                <div style={container}>
                <h1>Tables <span style={tag}>Home/Tables</span>
                    <Link to="/adduser"><span style={btnAdd}><span className="glyphicon glyphicon-plus"></span>&nbsp;Add User</span></Link>
                </h1>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <table style={{textAlign:"center", tableLayout:"fixed"}} className="table table-striped table-bordered base-style">
                        <thead>
                            <tr>
                                <th style={{textAlign:"center"}}>User Name</th>
                                <th style={{textAlign:"center"}}>Email</th>
                                <th style={{textAlign:"center", width: "30%"}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {users.items.map((user, index) =>
                            <tr key={user.id}>
                                <td>{user.firstName + ' ' + user.lastName}</td>
                                <td>{user.email}</td>
                                <td>
                                { user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span><a onClick={this.handleDeleteUser(user.id)}><span className="glyphicon glyphicon-remove"></span>&nbsp;Delete</a></span>
                                }</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                }
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };