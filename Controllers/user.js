const users = [];

exports.addUser = (req, res) => {
  // Lưu giá trị vào mảng
  users.push(req.body);
  res.send({ users: users });
};
