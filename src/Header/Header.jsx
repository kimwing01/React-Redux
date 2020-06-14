import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { user } = this.props;
        const verticalNav = {
            height : "100vh",
            background : "linear-gradient(to bottom right, #FF7F50,  #9932CC)"
        };
        const linkUser = {
            background : "darkgrey",
            color: "#ffffff",
            display: "block",
            padding: "0px 20px 0px 20px",
            textDecoration: "none"
        };
        const link = {
            background : "transparent",
            color: "#ffffff",
            display: "block",
            padding: "15px 20px",
            textDecoration: "none"
        };
        return (
            <div style={verticalNav}>
                <a href="" style={linkUser}><h3 style={{marginTop: 10, display: "inline-block"}}><span className="glyphicon glyphicon-user"></span>&nbsp; {user.firstName} {user.lastName}</h3></a>
                <a href="" style={link}><span className="glyphicon glyphicon-th"></span>&nbsp;&nbsp;DASHBORD</a>
                <a href="" style={link}><span className="glyphicon glyphicon-unchecked"></span>&nbsp;&nbsp;CARDS</a>
                <a href="" style={link}><span className="glyphicon glyphicon-stats"></span>&nbsp;&nbsp;CHARTS</a>
                <a href="" style={link}><span className="glyphicon glyphicon-th-large"></span>&nbsp;&nbsp;WIDGETS</a>
                <a href="" style={link}><span className="glyphicon glyphicon-tasks"></span>&nbsp;&nbsp;COMPONENTS
                    <span className="glyphicon glyphicon-menu-right" style={{float:"right"}}></span></a>
                <a href="" style={link}><span className="glyphicon glyphicon-tasks"></span>&nbsp;&nbsp;Contents
                    <span className="glyphicon glyphicon-menu-right" style={{float:"right"}}></span></a>
                <a href="" style={link}><span className="glyphicon glyphicon-bookmark"></span>&nbsp;&nbsp;TYPOGRAPHY</a>
                <a href="" style={link}><span className="glyphicon glyphicon-th-list"></span>&nbsp;&nbsp;TABLES</a>
                <Link to="/login" style={link}><span className="glyphicon glyphicon-log-out"></span>&nbsp;&nbsp;Logout</Link>
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
    getUsers: userActions.getAll
};

const connectedHeader = connect(mapState, actionCreators)(Header);
export { connectedHeader as Header };