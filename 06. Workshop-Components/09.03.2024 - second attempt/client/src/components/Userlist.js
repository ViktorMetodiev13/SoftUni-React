import { useState } from "react";

import * as userService from "../services/userService";
import { User } from "./User";
import { UserDetails } from "./UserDetails";
import { UserCreate } from "./UserCreate";
import { UserDelete } from "./UserDelete";
import { Spinner } from "./Spinner";

export const UserList = ({
  users,
  onUserCreateSubmit,
  onDelete,
  onUserUpdate,
}) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [deletedUserId, setDeletedUserId] = useState(null);
  // const [updateUserMenu, setUpdateUserMenu] = useState(true);
  const [showDeleteUserMenu, setShowDeleteUserMenu] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);

  const onInfoClick = async (userId) => {
    const user = await userService.getOne(userId);

    setSelectedUser(user);
  };

  const onClose = () => {
    setSelectedUser(null);
    setShowAddUser(false);
    setShowDeleteUserMenu(false);
  };

  const onUserAddClick = () => {
    setShowAddUser(true);
  };

  const onUserCreateSubmitHandler = (e) => {
    onUserCreateSubmit(e);
    setShowAddUser(false);
  };

  const onUserDeleteClick = (userId) => {
    setDeletedUserId(userId);
    setShowDeleteUserMenu(true);
  };

  const onUserDeleteSubmit = () => {
    onDelete(deletedUserId);
    onClose();
  };

  // const onUserUpdateClick = () => {
  //   setUpdateUserMenu(true);
  // }

  let count = 0;

  const getCount = async () => {
    const response = fetch("http://localhost:3005/api/users");
    const result = await response.json();

    count = result.count;
  };

  return (
    <>
      {/* {count === 0 && <Spinner />} */}
      {selectedUser && <UserDetails {...selectedUser} onClose={onClose} />}
      {showAddUser && (
        <UserCreate
          onClose={onClose}
          onUserCreateSubmit={onUserCreateSubmitHandler}
        />
      )}
      {showDeleteUserMenu && (
        <UserDelete onClose={onClose} onUserDeleteSubmit={onUserDeleteSubmit} />
      )}


      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>
                First name
                <svg
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Last name
                <svg
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Email
                <svg
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Phone
                <svg
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>
                Created
                <svg
                  className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-down"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
                  ></path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <User
                {...u}
                key={u._id}
                onInfoClick={onInfoClick}
                onUserDeleteClick={onUserDeleteClick}
              />
            ))}
          </tbody>
        </table>
      </div>

      <button className="btn-add btn" onClick={onUserAddClick}>
        Add new user
      </button>
    </>
  );
};
