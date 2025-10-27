import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "vik@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email
        const password = credentials?.password
        const user = {
          id: "1",
          email: "xyz@gmail.com",
          password: "123546",
        }

        if(user){
          return user
        }else{
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };