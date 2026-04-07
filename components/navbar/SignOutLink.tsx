import { toast } from "sonner";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

function SignOutLink() {
  // const toast = useToast()

  const handleLogout = () => {
    toast("Signed out successfully", {
      description: "You have been signed out.",
      style: {
        backgroundColor: "whitesmoke",
      },
    });
  };

  return (
    <SignOutButton>
      {/* <button onClick={handleLogout} className="text-left w-full">
      </button> */}
      Sign Out
    </SignOutButton>
  );
}
export default SignOutLink;
