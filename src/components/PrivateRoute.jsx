import React, { useContext } from "react";
import { AuthContext } from "../contextAPi/AuthProvider";
import { Navigate } from "react-router-dom";
import { Comment } from "react-loader-spinner";
export default function PrivateRoute({ children }) {
  const { loading, user } = useContext(AuthContext);
  console.log("user private", user);
  if (user) {
    return children;
  }
  if (loading) {
    return (
      <div className="flex justify-center ">
        <Comment
          visible={true}
          height="200"
          width="200"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#fff"
          backgroundColor="#F4442E"
        />
      </div>
    );
  }
  return <Navigate to="/login"></Navigate>;
}
