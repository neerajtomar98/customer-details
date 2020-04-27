export function fetchUsers() {
  return (dispatch, getState) => {
    const request = fetch(
      "https://my.api.mockaroo.com/customerinfo.json?key=41a5e2e0"
    );
    request
      .then(data => data.json())
      .then(data => {
        dispatch({ type: "USERLIST_SUCCESS", payload: data });
      });
  };
}
