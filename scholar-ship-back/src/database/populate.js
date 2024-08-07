import { Course } from "../models/course.model.js";
import { Lesson } from "../models/lesson.model.js";
import { User } from "../models/user.model.js";


export const populateDatabase = async () => {
    try {
        await User.deleteMany({});
        await Lesson.deleteMany({});
        await Course.deleteMany({});

        const lessonsCourse1 = [
            new Lesson({
                name: 'Introduction to Mathematics',
                order: 1,
                time: '45 minutes',
                thumbnail: 'intro_math.jpg'
            }),
            new Lesson({
                name: 'Algebra Basics',
                order: 2,
                time: '30 minutes',
                thumbnail: 'algebra_basics.jpg'
            }),
            new Lesson({
                name: 'Geometry Fundamentals',
                order: 3,
                time: '40 minutes',
                thumbnail: 'geometry_fundamentals.jpg'
            })
        ];

        const lessonsCourse2 = [
            new Lesson({
                name: 'Introduction to Programming',
                order: 1,
                time: '50 minutes',
                thumbnail: 'intro_programming.jpg'
            }),
            new Lesson({
                name: 'Data Structures',
                order: 2,
                time: '60 minutes',
                thumbnail: 'data_structures.jpg'
            }),
            new Lesson({
                name: 'Algorithms Basics',
                order: 3,
                time: '50 minutes',
                thumbnail: 'algorithms_basics.jpg'
            })
        ];

        const lessonsCourse3 = [
            new Lesson({
                name: 'History of Art',
                order: 1,
                time: '35 minutes',
                thumbnail: 'history_art.jpg'
            }),
            new Lesson({
                name: 'Modern Art',
                order: 2,
                time: '45 minutes',
                thumbnail: 'modern_art.jpg'
            }),
            new Lesson({
                name: 'Abstract Art',
                order: 3,
                time: '30 minutes',
                thumbnail: 'abstract_art.jpg'
            })
        ];

        await Promise.all(lessonsCourse1.map(lesson => lesson.save()));
        await Promise.all(lessonsCourse2.map(lesson => lesson.save()));
        await Promise.all(lessonsCourse3.map(lesson => lesson.save()));

        const courses = [
            new Course({
                name: 'Basic Mathematics',
                time: '2 hours',
                thumbnail: 'math_course.jpg',
                lessons: lessonsCourse1.map(lesson => lesson._id)
            }),
            new Course({
                name: 'Computer Science 101',
                time: '3 hours',
                thumbnail: 'cs_course.jpg',
                lessons: lessonsCourse2.map(lesson => lesson._id)
            }),
            new Course({
                name: 'Art Appreciation',
                time: '2.5 hours',
                thumbnail: 'art_course.jpg',
                lessons: lessonsCourse3.map(lesson => lesson._id)
            })
        ];

        await Promise.all(courses.map(course => course.save()));

        const users = [
            new User({
                name: 'Alice Smith',
                username: 'alice123',
                password: 'alicepassword',
                age: 28,
                history: [courses[0]._id, courses[2]._id]
            }),
            new User({
                name: 'Bob Johnson',
                username: 'bobj',
                password: 'bobsecure',
                age: 35,
                history: [courses[1]._id]
            }),
            new User({
                name: 'Charlie Brown',
                username: 'charlieb',
                password: 'charliepassword',
                age: 22,
                history: [courses[2]._id, courses[1]._id]
            }),
            new User({
                name: 'Diana Prince',
                username: 'dianap',
                password: 'wonderwoman',
                age: 30,
                history: [courses[0]._id]
            }),
            new User({
                name: 'Ethan Hunt',
                username: 'ethanh',
                password: 'missionimpossible',
                age: 40,
                history: [courses[0]._id, courses[1]._id, courses[2]._id]
            })
        ];

        await Promise.all(users.map(user => user.save()));

        console.log('Database populated with more sample data');
    } catch (err) {
        console.error('Error populating database', err);
    }
};