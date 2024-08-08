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
                thumbnail: 'https://templates.simplified.co/thumb/444e5ae4-776c-4318-8a4d-566072d3083f.jpg',
                video: 'https://youtu.be/wv3sW_u6Whk?si=YQZPYr1Ywtg-_wDo'
            }),
            new Lesson({
                name: 'Algebra Basics',
                order: 2,
                time: '30 minutes',
                thumbnail: 'https://templates.simplified.co/thumb/444e5ae4-776c-4318-8a4d-566072d3083f.jpg',
                video: 'https://youtu.be/K4TOrB7at0Y?si=1zdpZzBN_onOIdEY'
            }),
            new Lesson({
                name: 'Geometry Fundamentals',
                order: 3,
                time: '40 minutes',
                thumbnail: 'https://templates.simplified.co/thumb/444e5ae4-776c-4318-8a4d-566072d3083f.jpg',
                video: 'https://youtu.be/wv3sW_u6Whk?si=YQZPYr1Ywtg-_wDo'
            })
        ];

        const lessonsCourse2 = [
            new Lesson({
                name: 'Introduction to Programming',
                order: 1,
                time: '50 minutes',
                thumbnail: 'https://templates.simplified.co/usetldr/1022255/thumb/5a108056-a070-44ee-a123-1afd489077e0.jpg',
                video: 'https://youtu.be/wv3sW_u6Whk?si=YQZPYr1Ywtg-_wDo'
            }),
            new Lesson({
                name: 'Data Structures',
                order: 2,
                time: '60 minutes',
                thumbnail: 'https://templates.simplified.co/usetldr/1022255/thumb/5a108056-a070-44ee-a123-1afd489077e0.jpg',
                video: 'https://youtu.be/K4TOrB7at0Y?si=1zdpZzBN_onOIdEY'
            }),
            new Lesson({
                name: 'Algorithms Basics',
                order: 3,
                time: '50 minutes',
                thumbnail: 'https://templates.simplified.co/usetldr/1022255/thumb/5a108056-a070-44ee-a123-1afd489077e0.jpg',
                video: 'https://youtu.be/wv3sW_u6Whk?si=YQZPYr1Ywtg-_wDo'
            })
        ];

        const lessonsCourse3 = [
            new Lesson({
                name: 'History of Art',
                order: 1,
                time: '35 minutes',
                thumbnail: 'https://myrepublica.nagariknetwork.com/uploads/media/2019/January/art-appreciate.jpg',
                video: 'https://youtu.be/wv3sW_u6Whk?si=YQZPYr1Ywtg-_wDo'
            }),
            new Lesson({
                name: 'Modern Art',
                order: 2,
                time: '45 minutes',
                thumbnail: 'https://myrepublica.nagariknetwork.com/uploads/media/2019/January/art-appreciate.jpg',
                video: 'https://youtu.be/K4TOrB7at0Y?si=1zdpZzBN_onOIdEY'
            }),
            new Lesson({
                name: 'Abstract Art',
                order: 3,
                time: '30 minutes',
                thumbnail: 'https://myrepublica.nagariknetwork.com/uploads/media/2019/January/art-appreciate.jpg',
                video: 'https://youtu.be/wv3sW_u6Whk?si=YQZPYr1Ywtg-_wDo'
            })
        ];

        await Promise.all(lessonsCourse1.map(lesson => lesson.save()));
        await Promise.all(lessonsCourse2.map(lesson => lesson.save()));
        await Promise.all(lessonsCourse3.map(lesson => lesson.save()));

        const courses = [
            new Course({
                name: 'Basic Mathematics',
                time: '2 hours',
                thumbnail: 'https://templates.simplified.co/thumb/444e5ae4-776c-4318-8a4d-566072d3083f.jpg',
                lessons: lessonsCourse1.map(lesson => lesson._id)
            }),
            new Course({
                name: 'Computer Science 101',
                time: '3 hours',
                thumbnail: 'https://templates.simplified.co/usetldr/1022255/thumb/5a108056-a070-44ee-a123-1afd489077e0.jpg',
                lessons: lessonsCourse2.map(lesson => lesson._id)
            }),
            new Course({
                name: 'Art Appreciation',
                time: '2.5 hours',
                thumbnail: 'https://myrepublica.nagariknetwork.com/uploads/media/2019/January/art-appreciate.jpg',
                lessons: lessonsCourse3.map(lesson => lesson._id)
            })
        ];

        await Promise.all(courses.map(course => course.save()));

        const users = [
            new User({
                name: 'Alice Smith',
                username: 'alice123',
                password: 'alicepassword',
                email: 'alice@example.com',
                history: [courses[0]._id, courses[2]._id]
            }),
            new User({
                name: 'Bob Johnson',
                username: 'bobj',
                password: 'bobsecure',
                email: 'bob@example.com',
                history: [courses[1]._id]
            }),
            new User({
                name: 'Charlie Brown',
                username: 'charlieb',
                password: 'charliepassword',
                email: 'charlie@example.com',
                history: [courses[2]._id, courses[1]._id]
            }),
            new User({
                name: 'Diana Prince',
                username: 'dianap',
                password: 'wonderwoman',
                email: 'diana@example.com',
                history: [courses[0]._id]
            }),
            new User({
                name: 'Ethan Hunt',
                username: 'ethanh',
                password: 'missionimpossible',
                email: 'ethan@example.com',
                history: [courses[0]._id, courses[1]._id, courses[2]._id]
            })
        ];

        await Promise.all(users.map(user => user.save()));

        console.log('Database populated with more sample data');
    } catch (err) {
        console.error('Error populating database', err);
    }
};