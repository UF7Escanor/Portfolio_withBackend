import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import toast from "react-hot-toast";
import { authService } from "../service/authService";

interface UserInfo {
  id: string;
  username?: string;
  email?: string;
  isAdmin?: boolean;
}

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  user: UserInfo | null;
  login: (username: string, password: string) => Promise<any>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserInfo | null>(null);

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    const response = await authService.login({
      creds: {
        username,
        password,
      },
    });

    if (response.success) {
      toast.success(response.message);
      // We rely on httpOnly cookie for auth; store a lightweight flag to persist UI state
      try {
        localStorage.setItem("isAuthenticated", "true");
      } catch (e) {}
      setAuthenticated(true);
      // store user info if present
      if (response.data) {
        setUser(response.data as UserInfo);
        try {
          localStorage.setItem("userInfo", JSON.stringify(response.data));
        } catch (e) {}
      }
      return true;
    }

    toast.error(response.message);
    return false;
  };

  const logout = async () => {
    await authService.logout();
    setAuthenticated(false);
    setUser(null);
    try {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("userInfo");
    } catch (e) {
    }
  };

  useEffect(() => {
    let mounted = true;
    (async () => {
      // verify session via backend cookie
      const resp = await authService.getProfile();
      if (!mounted) return;
      if (resp.success) {
        setAuthenticated(true);
        // set user info from profile if returned; if backend profile does not include isAdmin,
        // restore isAdmin from previously stored login response in localStorage
        if (resp.data) {
          const profileData = resp.data as UserInfo;
          try {
            const stored = localStorage.getItem("userInfo");
            if (stored) {
              const parsed = JSON.parse(stored) as UserInfo;
              // merge isAdmin from parsed if missing in profile
              if (parsed?.isAdmin && !profileData.isAdmin)
                profileData.isAdmin = parsed.isAdmin;
            }
          } catch (e) {}
          setUser(profileData);
          try {
            localStorage.setItem("userInfo", JSON.stringify(profileData));
          } catch (e) {}
        } else {
          // no profile data returned; try to hydrate from localStorage (login response)
          try {
            const stored = localStorage.getItem("userInfo");
            if (stored) setUser(JSON.parse(stored) as UserInfo);
          } catch (e) {}
        }
      } else {
        setAuthenticated(false);
        try {
          const stored = localStorage.getItem("userInfo");
          if (stored) setUser(JSON.parse(stored) as UserInfo);
        } catch (e) {}
      }
      setLoading(false);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const value: AuthContextType = {
    isAuthenticated,
    loading,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
