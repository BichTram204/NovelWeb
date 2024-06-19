import { useAuth } from '@hooks';
import { routing } from '@utils';
import React, { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GuestGuard = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const check = useCallback(() => {
    if (isAuthenticated) {
      navigate(routing.DEFAULT, { replace: true });
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    check();
  }, [check]);

  return <>{children}</>;
};

export default GuestGuard;
