import React from "react";
import UserItem from "./UserItem";
import "./styles.css";
import Spinner from "../../common/Spinner";

const Users = ({ users, fltrImgDarkClass, skip, loading }) => {
  return (
    <div>
      {loading && <Spinner />}
      {!loading && (
        <div className="userList-wrap">
          {users.map((user, id) => (
            <UserItem
              user={user}
              key={id}
              fltrImgDarkClass={fltrImgDarkClass}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
