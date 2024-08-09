import { useLocation } from "wouter";

export const useNavigate = () => {
  const [, navigate] = useLocation();

  return navigate;
};
