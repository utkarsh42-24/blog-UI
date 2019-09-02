import React, { Component } from 'react';
import ListUsersComponent from './ListUsersComponent';
class AdminApp extends Component {
    render() {
        return (<>
            <h1>Blogging : Admin Application</h1>
            <ListUsersComponent/>
          </>
      )
    }
}

export default AdminApp;