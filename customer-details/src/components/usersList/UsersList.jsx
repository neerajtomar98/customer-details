import React from "react";
import UserAddresses from "../../components/userAddresses";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCustomerId: null
    };
  }

  onClickCustomer = id => event => {
    event.stopPropagation();
    console.log("clicked on id", id);
    this.setState(
      prevstate => {
        return {
          selectedCustomerId: prevstate.selectedCustomerId === id ? null : id
        };
      },
      () => {
        this.props.fetchAddressesAction(id);
      }
    );
  };

  getUserList = () => {
    let list = [];
    if (this.props.users && this.props.users.userList === undefined) {
      return null;
    }
    this.props.users.userList.forEach(user => {
      list.push(
        <li
          className="list-group-item pt-3 mt-2"
          style={{ cursor: "pointer" }}
          key={user.id}
          onClick={this.onClickCustomer(user.id)}
        >
          <div className="col-4">
            <label>Customer Id:</label> &nbsp; {user.id}
          </div>
          <div className="col-8 center">
            <div className="col">
              <h6>
                <label>Name:</label> &nbsp; {user.name}
              </h6>
            </div>

            <div className="col">
              <label>Age:</label> &nbsp; {user.age}
            </div>
            <div className="col">
              <label>Gender:</label> &nbsp; {user.gender}
            </div>
          </div>

          {this.state.selectedCustomerId &&
          this.state.selectedCustomerId === user.id ? (
            <UserAddresses
              {...this.props}
              key={this.state.selectedCustomerId}
              selectedCustomerId={this.state.selectedCustomerId}
            />
          ) : null}
        </li>
      );
    });
    return <ul className="list-group">{list}</ul>;
  };

  render() {
    return (
      <div className="col-12 mt-5 ">
        <h4 className="mb-3 text-center">Customer Details</h4>
        {this.getUserList()}
      </div>
    );
  }
}

export default UsersList;
