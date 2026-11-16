import toast from "react-hot-toast";

import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { AddUserModal } from "../users/AddUserModal";
import { useAuth } from "@/context/AuthContext";
import { UserTable } from "../users/user-table";
import { useFetchService } from "../hooks/useService";
import { userService } from "@/service/userService";

export default function UsersPage() {
  const { loading, data, refetch } = useFetchService({
    fetchFunction: () =>
      userService.getUsers({
        onFailure: (message) => toast.error(message),
      }),
  });

  // Ensure we always pass an array to UserTable regardless of response shape
  const usersList = Array.isArray((data as any)?.data)
    ? (data as any).data
    : Array.isArray(data)
    ? (data as any)
    : [];

  const { user } = useAuth();

  return (
    <div className="h-full w-full p-6 space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
          Users
        </h1>

        <div className="flex gap-3">
          {user?.isAdmin ? <AddUserModal refetch={refetch} /> : null}

          <Button variant="outline" onClick={refetch} disabled={loading}>
            {loading ? <Loader className="animate-spin" /> : "Refresh"}
          </Button>
        </div>
      </header>

      <section>
        <UserTable refetch={refetch} loading={loading} users={usersList} />
      </section>
    </div>
  );
}
