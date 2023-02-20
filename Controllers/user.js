const users = [];

exports.addUser = (req, res, next) => {
  const userName = req.body.userName;
  if (userName === "") {
    return res.status(400);
  }
  // Lưu giá trị vào mảng
  users.push(userName);
  res.status(200).json("Successfully add user!");
};

exports.getUser = (req, res, next) => {
  res.status(200).json({ users: users });
};
