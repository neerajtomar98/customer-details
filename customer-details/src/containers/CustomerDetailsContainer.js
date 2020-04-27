import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/users";
import { fetchAddresses } from "../actions/addresses";

import UsersList from "../components/usersList";
class CustomerDetailsContainer extends React.Component {
  componentDidMount() {
    console.log("fetching users list");
    this.props.fetchUsersAction();
  }
  render() {
    if (this.props.users.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container-fluid">
        <div className="customer-details-content">
          <div className="row">
            <UsersList {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users,
  addresses: state.addresses
});

const mapDispatchToProps = dispatch => ({
  fetchUsersAction: () => {
    dispatch(fetchUsers());
  },
  fetchAddressesAction: userId => {
    dispatch(fetchAddresses(userId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerDetailsContainer);
