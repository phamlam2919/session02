import React, { Component } from 'react';
import Left from './Left';
import Right from './Right';
import Left1 from './Left1';
import Left2 from './Left2';
class Baitap3 extends Component {
    render() {
        return (
         <div>
  <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card">
            <div className="card-body p-4">
              <div className="row">
                <div className="col-lg-7">
                  <Left></Left>
                  <hr />
                 <Left1></Left1>
                <Left2></Left2>
                <Left2></Left2>
                <Left2></Left2>
                <Left2></Left2>
                                                
                </div>
                <div className="col-lg-5">
                 <Right></Right>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

        );
    }
}

export default Baitap3;