import { Navigate, useParams } from "react-router-dom";
import { UserDetails } from "../users/UserDetails";

import toast from "react-hot-toast";
import { UserDetailsSkeleton } from "../skeleton/UserDetailsSkeleton";
import { useFetchService } from "../hooks/useService";
import { userService } from "@/service/userService";

export default function UserDetailsPage() {
  const { id } = useParams();

  // We fetch the authenticated user's profile as the backend exposes /api/v1/users/profile
  const { data, loading, refetch } = useFetchService({
    fetchFunction: () =>
      userService.getProfile({
        onFailure: (err) => toast.error(err),
      }),
  });

  return (
    <div className="h-full w-full p-6 space-y-6">
      {loading ? (
        <UserDetailsSkeleton />
      ) : !loading && data?.data ? (
        <UserDetails refetch={refetch} user={data.data} />
      ) : null}
    </div>
  );
}
