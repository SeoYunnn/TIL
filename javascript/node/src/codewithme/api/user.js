import express from "express";

const router = express.Router();

let users = [
  {
    id: '1',
    name: '유재영',
    grade: 'Silver',
  },
];

const findUserById = (id) => {
  return users.filter(
    (user) => user.id === id
  );
}

const deleteUserById = (id) => {
  return users.filter(
    (user) => user.id !== id
  );
};

router.post('/', (req, res) => {
  const user = req.body;
  users.push(user);
});

router.get('/', (req, res) => {
  res.send(users);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const user = findUserById(id);

  res.send(user);
});

router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const grade = req.body.grade;

  const user = findUserById(id);
  user.grade = grade;

  res.send(user);
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  users = deleteUserById(id);

  res.send(users);
})

export default router;