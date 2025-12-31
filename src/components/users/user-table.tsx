import type { User } from "@/types/user";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MoreHorizontal,
  Mail,
  Phone,
  Edit,
  Trash2,
  Eye,
  Loader,
} from "lucide-react";

import { Link } from "react-router-dom";
import { EditUserModal } from "./EditUserModal";
import { DeleteUserModal } from "./DeleteUserModal";

type Props = {
  users: User[];
  loading: boolean;
  refetch: () => void;
};

export function UserTable({ users = [], loading, refetch }: Props) {
  const getInitials = (user: any) => {
    // Prefer explicit name fields, fall back to username
    const firstname = user?.name?.firstname;
    const lastname = user?.name?.lastname;
    if (firstname && lastname)
      return `${firstname.charAt(0)}${lastname.charAt(0)}`.toUpperCase();
    const uname = user?.username ?? "";
    if (uname) return uname.slice(0, 2).toUpperCase();
    return "U";
  };

  const formatPhone = (phone?: string) => {
    if (!phone) return "N/A";
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
        6
      )}`;
    }
    return phone;
  };

  if (!loading && users.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="rounded-full bg-muted p-3 mb-4">
          <Eye className="h-6 w-6 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold">No users found</h3>
        <p className="text-sm text-muted-foreground">
          There are no registered users to display.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded border">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>ID</TableHead>
            <TableHead className="w-[80px]">User</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading && (
            <TableRow>
              <TableCell colSpan={100} className="text-center py-4">
                <Loader className="mx-auto h-5 w-5 animate-spin text-muted-foreground" />
              </TableCell>
            </TableRow>
          )}

          {!loading &&
            users.map((user: any) => (
              <TableRow key={user.id ?? user._id} className="hover:bg-green-50">
                <TableCell>
                  <Badge variant="outline" className="font-mono text-xs">
                    {user.id ?? user._id}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={`https://api.dicebear.com/7.x/initials/svg?seed=${
                        (user.username ?? user.name?.firstname ?? "") +
                        (user.username ?? user.name?.lastname ?? "")
                      }`}
                    />
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {getInitials(user)}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="font-semibold">
                      {user.name?.firstname || user.username}{" "}
                      {user.name?.lastname || ""}
                    </div>
                    {user.username && (
                      <div className="text-sm text-muted-foreground">
                        @{user.username}
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-3 w-3 text-muted-foreground" />
                      <span className="truncate max-w-[200px]">
                        {user.email ?? "N/A"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-3 w-3" />
                      <span>{formatPhone(user.phone)}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-40 flex flex-col items-start space-y-1 p-2"
                      align="end"
                    >
                      <Link to={`/admin/users/${user.id}`} className="w-full">
                        <Button
                          variant="ghost"
                          className="h-8 w-full justify-start p-2"
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View details
                        </Button>
                      </Link>

                      <EditUserModal user={user} refetch={refetch}>
                        <Button
                          variant="ghost"
                          className="h-8 w-full justify-start p-2"
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                      </EditUserModal>

                      <DeleteUserModal user={user} refetch={refetch}>
                        <Button
                          variant="ghost"
                          className="h-8 w-full justify-start p-2"
                        >
                          <Trash2 color="red" className="mr-2 h-4 w-4" />
                          Delete
                        </Button>
                      </DeleteUserModal>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
