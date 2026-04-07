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
      <Link href={`/`} onClick={handleLogout} className="text-left w-full">
        Sign Out
      </Link>
    </SignOutButton>
  );
}
export default SignOutLink;
