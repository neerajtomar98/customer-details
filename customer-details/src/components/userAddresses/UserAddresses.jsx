import React from "react";
const createAddressList = (addressObject, index) => {
  return (
    <li className="list-group-item border-0" key={addressObject.id}>
      <div className="col-12">
        <label>Address {index + 1} :&nbsp;</label> {addressObject.address}
        <hr />
      </div>
    </li>
  );
};

const UserAddresses = props => {
  if (props.addresses.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="col-12 ">
      <div className="mt-5 mb-1 mt-2">
        <a href="/">Back</a>
      </div>
      <label className="mt-5">
        <strong>
          Addresses for {props.customerName ? props.customerName : "Customer"}
          &nbsp; :
        </strong>
      </label>
      <ul className="list-group">
        {props.addresses.addresses.map(createAddressList)}
      </ul>
    </div>
  );
};

export default UserAddresses;
