import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/users";
import { fetchAddresses } from "../actions/addresses";
import "./styles.sass";
import UsersList from "../components/usersList";
import UserAddresses from "../../components/userAddresses";

class CustomerDetailsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCustomerId: null
    };
  }
  componentDidMount() {
    console.log("fetching users list");
    this.props.fetchUsersAction();
  }
  onClickCustomer = id => {
    this.setState(
      prevstate => {
        return {
          selectedCustomerId: prevstate.selectedCustomerId ? null : id
        };
      },
      () => {
        this.props.fetchAddressesAction(id);
      }
    );
  };

  getCustomerName = () => {
    if (!this.props.users) {
      return "";
    }
    let name = "";
    this.props.users.userList.forEach(user => {
      if (user.id === this.state.selectedCustomerId) {
        name = user.name;
      }
    });
    return name;
  };

  render() {
    if (this.props.users.loading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="customer-details-app">
        <div
          style={{ height: "47px", lineHeight: "40px" }}
          className="customer-details-header bg-primary text-white pl-2"
        >
          <strong> Customer App</strong>
        </div>
        <div className="container">
          <div className="row">
            {this.state.selectedCustomerId ? (
              <UserAddresses
                {...this.props}
                key={this.state.selectedCustomerId}
                selectedCustomerId={this.state.selectedCustomerId}
                customerName={this.getCustomerName()}
              />
            ) : (
              <UsersList
                {...this.props}
                onClickCustomer={this.onClickCustomer}
              />
            )}
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
