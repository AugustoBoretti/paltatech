import React from "react";
import Message from "../customComponents/Message/Message";

export const NotificationContext = React.createContext();
const { Provider, Consumer } = NotificationContext;

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = React.useState([]);

  const pushNotification = (newNotification) => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      {
        ...newNotification,
      },
    ]);
  };

  return (
    <Provider
      value={{
        pushNotification,
      }}
    >
      {children}
      {notifications.map((notification, key) => (
        <Message key={key} {...notification} />
      ))}
    </Provider>
  );
};

export default {
  NotificationProvider,
  NotificationConsumer: Consumer,
  NotificationContext,
};
