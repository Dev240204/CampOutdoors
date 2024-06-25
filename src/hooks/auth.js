import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../services/auth";
import { useUserStore } from "../store";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

export const useLogin = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const setUser = useUserStore((state) => state.setUser);

    return useMutation({
        mutationFn: login,
        mutationKey: ["login"],
        onSuccess: (data) => {
            setUser({
                data:{
                    username: data.data.payload.username,
                    email: data.data.payload.email,
                },
                token:data.data.token
            });
            queryClient.invalidateQueries({
                queryKey: ["auth"],
            });
            navigate("/");
        },
        onError: (error) => {
            console.log(error);
        }
    })
}

export const useLogout = () => {
    const clearUser = useUserStore((state) => state.clearUser);
    const clearToken = useUserStore((state) => state.clearToken);
    const navigate = useNavigate();
    
    return () => {
        clearToken();
        clearUser();
        navigate("/login");
    }
}

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const user = useUserStore((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user && user.token) {
          setIsAuthenticated(true);
        } else {
            navigate("/login");
        }
      }, [user]);
    
      return { isAuthenticated };
}