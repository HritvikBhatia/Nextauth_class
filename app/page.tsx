//we can do this but agin it is client side rendring 
/* 
      "use client"
      import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react'


      export default function App() {


        return <div>
          <SessionProvider>
            <Home/>
          </SessionProvider>
        </div>
      }

      const Home = () => {
        const session = useSession();
        return <>
          <div>{session.status === "authenticated" ? <button onClick={() => signOut()}>Logout</button> : <button onClick={() => signIn()}>Sign In</button>}</div>
          <br />
          {JSON.stringify(session)}
        </>
      }
*/

//getServerSession 
import { getServerSession } from "next-auth";

export default async function App() {
  const session = await getServerSession()
  return <>
    <br />
    {JSON.stringify(session)}
  </>
}