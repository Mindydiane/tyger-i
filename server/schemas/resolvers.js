const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      me:async (parent, args, context) => {
        if (context.user) {
          const userInfo = await User.findOne({_id: context.user._id})
          .select('-__v -password')
          .populate('savedBooks')

          return userInfo 
        }
        
        throw new AuthenticationError('Not logged in')
    },
  }
}
  
  module.exports = resolvers;