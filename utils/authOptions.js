import GoogleProvider from 'next-auth/providers/google';
import db from '@/config/db';
import User from '@/models/User';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    // invoke on successful sign in
    async signIn({ profile }) {
      // connect to db
      await db();
      // check if user exists
      const user = await User.findOne({ email: profile.email });
      // if not, add user to db
      if (!user) {
        // truncate user name if too long
        const username = profile.name.slice(0, 20);
        // add user to db
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      // return true to allow sign in
      return true;
    },
    // modify the session object
    async session({ session }) {
      // get user from db
      const user = await User.findOne({ email: session.user.email });
      // assign user id to session
      session.user.id = user._id.toString();
      // return session
      return session;
    },
  },
};
