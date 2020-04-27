export function fetchAddresses(id) {
  return (dispatch, getState) => {
    const request = fetch(
      `https://my.api.mockaroo.com/${id}/addresses?key=41a5e2e0`
    );
    request
      .then(data => data.json())
      .then(data => {
        dispatch({ type: "ADDRESSES_SUCCESS", payload: data });
      });
  };
}
