import React from "react";

class UsersList extends React.Component {
  renderListHeader = () => {
    let headers = ["Customer Id", "Name", "Age", "Gender"];

    let headerList = [];
    headers.forEach((element, index) => {
      headerList.push(
        <div className="col" key={"headitem" + index}>
          <h6>{element}</h6>
        </div>
      );
    });
    return (
      <li className="list-group-item pt-3 mt-2" key={"header"}>
        {headerList}
      </li>
    );
  };

  getUserList = () => {
    let list = [];
    if (this.props.users && this.props.users.userList === undefined) {
      return null;
    }
    // list.push(this.renderListHeader());
    this.props.users.userList.forEach(user => {
      list.push(
        <li
          className="list-group-item pt-3 mt-2"
          style={{ cursor: "pointer", fontSize: "14px" }}
          key={user.id}
          onClick={() => this.props.onClickCustomer(user.id)}
        >
          <div className="col">{user.id}</div>
          <div className="col">{user.name}</div>
          <div className="col">&nbsp; {user.age}</div>
          <div className="col">{user.gender}</div>
        </li>
      );
    });
    return <ul className=" list-group ">{list}</ul>;
  };

  render() {
    return (
      <div className="col-12 mt-5 ">
        {this.renderListHeader()}
        <div style={{ maxHeight: "75vh", overflowY: "auto" }}>
          {this.getUserList()}
        </div>
      </div>
    );
  }
}

export default UsersList;
