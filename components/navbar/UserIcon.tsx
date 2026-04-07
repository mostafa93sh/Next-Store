import { auth, currentUser } from "@clerk/nextjs/server";
import { LuUser } from "react-icons/lu";
async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt="profile-image"
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }
  return <LuUser className="w-6 h-6 rounded-full bg-primary text-white" />;
}
export default UserIcon;
