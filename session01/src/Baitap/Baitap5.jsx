import React, { Component } from 'react';
import ManagerUser from './ManagerUser';
class Baitap5 extends Component {
    render() {
        return (
          <div>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-uppercase mb-0">MANAGER USER</h5>
          </div>
          <div className="table-responsive">
            <table className="table no-wrap user-table mb-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="border-0 text-uppercase font-medium pl-4"
                  />
                  <th
                    scope="col"
                    className="border-0 text-uppercase font-medium"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="border-0 text-uppercase font-medium"
                  >
                    Age
                  </th>
                  <th
                    scope="col"
                    className="border-0 text-uppercase font-medium"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="border-0 text-uppercase font-medium"
                  >
                    Dateofbirth
                  </th>
                  <th
                    scope="col"
                    className="border-0 text-uppercase font-medium"
                  >
                    Manage
                  </th>
                  <th
                    scope="col"
                    className="border-0 text-uppercase font-medium"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                                            <ManagerUser></ManagerUser>
                                            <ManagerUser></ManagerUser>
                                            <ManagerUser></ManagerUser>
                                            <ManagerUser></ManagerUser>
                                            <ManagerUser></ManagerUser>
                                            <ManagerUser></ManagerUser>
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        );
    }
}

export default Baitap5;