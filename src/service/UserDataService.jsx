import axios from 'axios';

const USER_ID = '1';
const API_URL = 'http://localhost:8080/api'
const USER_API_URL = `${API_URL}/user`

class UserDataService {
    retrieveAllUsers(){
        return axios.get(`${USER_API_URL}/get/all`);
    }
}
export default new UserDataService();

// import axios from 'axios'

// const INSTRUCTOR = 'in28minutes'
// const COURSE_API_URL = 'http://localhost:8080'
// const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

// class CourseDataService {

//     retrieveAllCourses(name) {
//         return axios.get(`${INSTRUCTOR_API_URL}/courses`);
//     }
// }

// export default new CourseDataService()