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
                }
            )
    }


    render() {
        return (
            <div className="container">
                <h3>All Courses</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>UserId</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>DemoUser1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default ListUsersComponent;