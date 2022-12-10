import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    };
    

    componentDidUpdate(prevProps){
        const {error, alert, message}= this.props;
    if(error !==prevProps.error){
        if(error.msg.name) alert.error(`name ${error.msg.name}`)
        if(error.msg.username) alert.error(` ${error.msg.username}`)
        if(error.msg.email) alert.error(`email ${error.msg.email}`)
        if(error.msg.message) alert.error(`message ${error.msg.message}`)
        if(error.msg.non_field_errors) alert.error(` ${error.msg.non_field_errors}`)
        // if(error.msg.detail) alert.error(`message ${error.msg.detail}`)
        
    }
    
    if(message !== prevProps.message){
        if (message.deleteLead) alert.success(message.deleteLead)
        if (message.addLead) alert.success(message.addLead)
        if (message.passwordNotMatch) alert.error(message.passwordNotMatch)
        
    }
    }


  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
