import Agent from "@/components/Agent"
import { getCurrentUser } from "@/lib/actions/auth.actions"

const page = async() => {

  const user = await getCurrentUser();
  return (
    <>
    <h3>Interview Genration</h3>
    <Agent userName={user?.name} userId={user?.id} t
    ype="generate"/>
    </>
  )
}

export default page