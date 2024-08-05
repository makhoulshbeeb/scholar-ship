import { Course } from "../models/course.model.js";

export const getCourses = async (req, res) => {
  const courses = await Course.find();

  res.send(courses);
};

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
  const { name, thumbnail, order, lessons} = req.body;

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