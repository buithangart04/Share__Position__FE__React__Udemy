import React, { useState, useEffect } from "react";
import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";
const User = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedUser, setLoadedUser] = useState();
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL+"/users/");
        setLoadedUser(responseData.users);
      } catch (err) {
      }
    };
    fetchUsers();
  }, [sendRequest]);
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner asOverlay />
        </div>
      )}
      {!isLoading && loadedUser && <UsersList items={loadedUser} />}
    </React.Fragment>
  );
};

export default User;
