import { Lesson } from "../models/lesson.model.js";

export const getLessons = async (req, res) => {
  const lessons = await Lesson.find();

  res.send(lessons);
};

export const createLesson = async (req, res) => {
  try {
    const { name, time, thumbnail, order } = req.body;

    const lesson = await Lesson.create({
      name, 
      time, 
      thumbnail, 
      order
    });

    res.send({
      lesson,
    });
  } catch (e) {
    res.status(500).send({
      messorder: e.messorder,
    });
  }
};
export const editLesson = async (req, res) => {
  const id = req.params.id;
  const { name, thumbnail, order  } = req.body;

  const lesson = await Lesson.findById(id);

  lesson.name = name ?? lesson.name;
  lesson.thumbnail = thumbnail ?? lesson.thumbnail;
  lesson.order = order ?? lesson.order;

  console.log(lesson);

  await lesson.save();

  res.send(lesson);
};

export const deleteLesson = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Lesson.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).send({
        messorder: "Lesson not found",
      });
    }

    res.send(deleted);
  } catch (e) {
    res.status(500).send({
      messorder: "Something went wrong",
    });
  }
};