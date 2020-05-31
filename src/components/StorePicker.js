import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store-selector">
      {/* comment line */}
        <h2> Please Enter a store</h2>
        <input type="text" required placeholder="Store Name ➡️"/>
      </form>
    )
  }
}

export default StorePicker;
