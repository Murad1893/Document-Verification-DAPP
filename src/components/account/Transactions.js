import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../../redux/actions/user';

@connect((store) => {
  return {
    user: store.user,
    transactions: store.user.transactions
  };
})

export default class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getTransactions({account: this.props.user.details.account}));
  }

  render() {
    return (
      <div className="container">
      <div className="row">
       
        
          
          <td className="col-sm-1 no"  bgcolor="grey" ><font color="white">Number</font></td>
          <td className="col-sm-7 no"  bgcolor="grey" ><font color="white">Transaction Hash</font></td>
          <td className="col-sm-2 no"  bgcolor="grey" ><font color="white">Gas Used</font></td>
          <td className="col-sm-2 no"  bgcolor="grey" ><font color="white">Gas Limit</font></td>
          
          
         
          </div>
        {this.props.transactions.map((transaction, index)=>{
          return (<div className="row" key={index}>
            
            <td className="col-sm-1 no1" >{transaction.number}</td>
            <td className="col-sm-7 no1">{transaction.hash}</td>
            <td className="col-sm-2 no1">{transaction.gasUsed}</td>
            <td className="col-sm-2 no1">{transaction.gasLimit}</td>
          </div>);
        })}
        {!this.props.transactions.length && (<div className="row">
          <div className="col-12">No Transactions ...</div>
        </div>)}
        
        
        </div>
    );
  }

};
