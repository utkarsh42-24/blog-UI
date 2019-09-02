import React, { Component } from 'react';
import UserDataService from '../service/UserDataService';

class ListUsersComponent extends Component {

    // constructor(props) {
    //     super(props)
    //     this.refreshCourses = this.refreshCourses.bind(this)
    // }

    // componentDidMount() {
    //     this.refreshCourses();
    // }

    // refreshCourses() {
    //     CourseDataService.retrieveAllCourses(INSTRUCTOR)//HARDCODED
    //         .then(
    //             response => {
    //                 console.log(response);
    //             }
    //         )
    // }

    constructor(props) {
        super(props)
        this.state = {             // 1. To display courses, we need to make them available to the component.
            users: [],             //  We add courses to the state of the component and initialize it in the constructor.
            message: null
        }
        this.refreshUsers = this.refreshUsers.bind(this);
    }

    componentDidMount(){
        this.refreshUsers();
    }

    refreshUsers(){
        UserDataService.retrieveAllUsers()
            .then(
                response => {
                    console.log(response);
                    this.setState({ users: response.data })   // 2. When the response comes back with data, we update the state.
                }
            )
    }


    render() {         // 3. We have data in the state. How do we display it? We need to update the render method.                                
        return (
            <div className="container">
                <h3>All Users</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>UserId</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>                                       
                            {                                         // In JSX, we use {} to execute JavaScript code.
                                this.state.users.map(
                                    user =>
                                        <tr key={user.userID}>       
                                            <td>{user.userID}</td>
                                            <td>{user.name}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default ListUsersComponent;