const { User } = require("../../../dist")
const { Types } = require("mongoose");

module.exports.getUsers = async (_, args, parent) => {
    const { limit = 20, skip = 10, sort = { createdAt: -1 }} = args;
    const users = await User.find({ user: parent.id }, null, {
      skip,
      limit,
      sort,
    }).exec();
  
    return {
      nodes: users,
      count: await User.countDocuments({ user: parent.id }),
    };
};