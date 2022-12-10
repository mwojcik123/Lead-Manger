import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead, detailLead } from '../../actions/leads';
import { Redirect, Link } from 'react-router-dom';

// import { withRouter } from 'react-router-dom';

export class Leads extends Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
  }
  static propTypes = {
    leads: PropTypes.array.isRequired,
    // lead_detail: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired,
    detailLead: PropTypes.func.isRequired

  };
  
  // routeChange() {
  //   let path = `/detail`;
  //   this.props.history.push(path);
  // }

  componentDidMount() {
    this.props.getLeads();
  }
  myFunction = () => {

    document.getElementById("po").innerHTML = ("<table table table-striped >\n<tr><th colspan=\"7\" class=\"month\">March 2022</th></tr>\n<tr><th class=\"mon\">Mon</th><th class=\"tue\">Tue</th><th class=\"wed\">Wed</th><th class=\"thu\">Thu</th><th class=\"fri\">Fri</th><th class=\"sat\">Sat</th><th class=\"sun\">Sun</th></tr>\n<tr> <td></td><td><span class='date'>1</span><ul>  </ul></td><td><span class='date'>2</span><ul>  </ul></td><td><span class='date'>3</span><ul>  </ul></td><td><span class='date'>4</span><ul>  </ul></td><td><span class='date'>5</span><ul>  </ul></td><td><span class='date'>6</span><ul>  </ul></td> </tr>\n<tr> <td><span class='date'>7</span><ul>  </ul></td><td><span class='date'>8</span><ul>  </ul></td><td><span class='date'>9</span><ul>  </ul></td><td><span class='date'>10</span><ul>  </ul></td><td><span class='date'>11</span><ul>  </ul></td><td><span class='date'>12</span><ul>  </ul></td><td><span class='date'>13</span><ul>  </ul></td> </tr>\n<tr> <td><span class='date'>14</span><ul>  </ul></td><td><span class='date'>15</span><ul>  </ul></td><td><span class='date'>16</span><ul>  </ul></td><td><span class='date'>17</span><ul>  </ul></td><td><span class='date'>18</span><ul>  </ul></td><td><span class='date'>19</span><ul>  </ul></td><td><span class='date'>20</span><ul>  </ul></td> </tr>\n<tr> <td><span class='date'>21</span><ul>  </ul></td><td><span class='date'>22</span><ul>  </ul></td><td><span class='date'>23</span><ul>  </ul></td><td><span class='date'>24</span><ul>  </ul></td><td><span class='date'>25</span><ul>  </ul></td><td><span class='date'>26</span><ul>  </ul></td><td><span class='date'>27</span><ul>  </ul></td> </tr>\n<tr> <td><span class='date'>28</span><ul>  </ul></td><td><span class='date'>29</span><ul>  </ul></td><td><span class='date'>30</span><ul>  </ul></td><td><span class='date'>31</span><ul>  </ul></td><td></td><td></td><td></td> </tr>\n");

  }

  render() {
    
    return (
      <Fragment>
        <h2>Leads</h2>
        
        <table className="table table-striped">

          <thead>
            <tr>
              <th>IDdd</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map( lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                
                <td><button className='btn btn-primary btn-sm' onClick={this.props.deleteLead.bind(this, lead.id)}>delete</button><Link to="/detail"><button className='btn btn-info btn-sm' onClick={this.props.detailLead.bind(this, lead.id)}>update</button></Link></td>
              </tr>
              
            ))}
          </tbody>
        </table>
        <div id="po"></div>
        <button onClick={this.myFunction}>Try it</button>
  
          
         
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  leads: state.leads.leads,
  lead_detail: state.leads.lead_detail
});

export default connect(mapStateToProps,{getLeads, deleteLead, detailLead})(Leads);