import React , {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { updateLead, deleteLead } from '../../actions/leads';
import { Link,Redirect } from 'react-router-dom';
const mapStateToProps = (state) => ({
    lead_detail: state.leads.lead_detail
  });

export class DetailForm extends Component {
    
    // constructor(props){
    //     this.propTypes = {
    //         lead_detail: PropTypes.object.isRequired,
    //         updateLead: PropTypes.func.isRequired,
    //         deleteLead: PropTypes.func.isRequired}
    // }
    static propTypes = {
        lead_detail: PropTypes.object.isRequired,
        updateLead: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired
    }
    state = {
        name: "",
        email: "",
        message: "",
        adc: false
    };
  
  
    
    // name = this.props.lead_detail.name
    // email = this.props.lead_detail.email
    // message = this.props.lead_detail.message
  
  onChangeName = e =>this.setState({ name: e.target.value });
  onChangeEmail= e =>this.setState({ email: e.target.value });
  onChangeMessage = e =>this.setState({ message: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    // console.log(this.props.lead_detail.name)
    // const email =""
    // const message=""
    // const name=""
    const name =  this.state.name == "" ?  this.props.lead_detail.name :  this.state.name
    const email=  this.state.email == "" ?  this.props.lead_detail.email :  this.state.email
    const message = this.state.message == "" ?  this.props.lead_detail.message :  this.state.message
    // name = this
    //  email, message}=this.state;
    const id = this.props.lead_detail.id;
    const lead = {name,email,message};
    console.log(lead)
    this.props.updateLead(id, lead);
    this.state.adc = true

    
  }

    
        
    
    // componentDidCatch() {
    //     // const {name,email,message} =this.state;
        
    //         this.state.name= this.props.lead_detail.name,
    //         this.state.email= this.props.lead_detail.email,
    //         this.state.message= this.props.lead_detail.message
        
    // // //     this.state.name = `${this.props.lead_detail.message}`
    // // //     console.log(`${this.props.lead_detail.message}`)
    // // //     console.log(this.state.name)
    //     };

  render(){
      if(this.state.adc){
        return <Redirect to="/" />
      }

    // const name = `${this.props.lead_detail.email}`
    // const email =  `${this.props.lead_detail.email}`
    // const message= `${this.props.lead_detail.message}`
    
    // const email
    // const message
    // console.log(`${this.props.lead_detail.name}`)
    // this.componentDidMount()
    return(

        
      <div className="card card-body mt-4 mb-4">
          <h2>Update Lead</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                defaultValue={this.props.lead_detail.name}
                onChange={this.onChangeName}
                // value={name}
                
                
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={this.onChangeEmail}
                defaultValue={this.props.lead_detail.email}
                
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <input
                className="form-control"
                type="text"
                name="message"
                onChange={this.onChangeMessage}
                defaultValue={this.props.lead_detail.message}
                
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <Link to="/"><button className='btn btn-danger' onClick={this.props.deleteLead.bind(this, this.props.lead_detail.id)}>Delete</button></Link>
            </div>
          </form>
        </div>
        
    )
  };
}




export default connect(mapStateToProps,{deleteLead, updateLead})(DetailForm)