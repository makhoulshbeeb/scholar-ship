import { Course } from "../models/course.model.js";

export const getCourses = async (req, res) => {
  const courses = await Course.find();

  res.json(courses);
};

export const getCourseById = async (req, res) => {
  const {id} = req.params;
  const course = await Course.findById(id);

  res.json([course]);
};

export const getCoursesBySearch = async (req, res) => {
  const { search } = req.params;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(search);

  const results = await Course.find({ name: searchRgx});

  res.send(results);
}

export const createCourse = async (req, res) => {
  try {
    const { name, time, thumbnail, lessons } = req.body;

    const course = await Course.create({
      name,
      time,
      thumbnail,
      lessons
    });

    res.send({
      course,
    });
  } catch (e) {
    res.status(500).send({
      message: e.message,
    });
  }
};
export const editCourse = async (req, res) => {
  const id = req.params.id;
  const { name, thumbnail, order, lessons } = req.body;

  const course = await Course.findById(id);

  course.name = name ?? course.name;
  course.thumbnail = thumbnail ?? course.thumbnail;
  course.order = order ?? course.order;
  course.lessons = lessons ?? course.lessons

  await course.save();

  res.send(course);
};

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Course.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).send({
        messorder: "Course not found",
      });
    }

    res.send(deleted);
  } catch (e) {
    res.status(500).send({
      messorder: "Something went wrong",
    });
  }
};