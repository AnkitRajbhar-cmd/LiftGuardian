import React, { useState } from 'react';
import { Bell, CheckCircle, XCircle, AlertTriangle, X, Eye } from 'lucide-react';

interface Notification {
  id: number;
  type: 'good' | 'bad' | 'risky' | 'system';
  message: string;
  time: string;
  read: boolean;
}

const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'bad',
      message: 'Poor posture detected - Your head is too far forward',
      time: '2 minutes ago',
      read: false
    },
    {
      id: 2,
      type: 'system',
      message: 'Your weekly posture report is now available',
      time: '1 hour ago',
      read: false
    },
    {
      id: 3,
      type: 'good',
      message: 'Great job! You maintained good posture for 2 hours',
      time: '3 hours ago',
      read: true
    },
    {
      id: 4,
      type: 'risky',
      message: 'Warning: Prolonged sitting detected. Time for a break!',
      time: 'Yesterday',
      read: true
    }
  ]);
  
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };
  
  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };
  
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };
  
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'good':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'bad':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'risky':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      default:
        return <Bell className="h-5 w-5 text-blue-500" />;
    }
  };
  
  const getNotificationBackground = (type: string, read: boolean) => {
    if (read) return 'bg-gray-50';
    
    switch (type) {
      case 'good':
        return 'bg-green-50';
      case 'bad':
        return 'bg-red-50';
      case 'risky':
        return 'bg-yellow-50';
      default:
        return 'bg-blue-50';
    }
  };
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  return (
    <div className="bg-white shadow rounded-lg p-5">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <Bell className="h-5 w-5 text-indigo-500 mr-2" />
          <h2 className="text-lg font-semibold text-gray-800">Notifications</h2>
          {unreadCount > 0 && (
            <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              {unreadCount} new
            </span>
          )}
        </div>
        
        <button 
          onClick={markAllAsRead}
          className="text-xs text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
        >
          Mark all as read
        </button>
      </div>
      
      <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
        {notifications.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <Bell className="h-8 w-8 mx-auto mb-2 text-gray-300" />
            <p>No notifications</p>
          </div>
        ) : (
          notifications.map(notification => (
            <div 
              key={notification.id} 
              className={`${getNotificationBackground(notification.type, notification.read)} 
                rounded-md p-3 transition-all duration-200 relative
                ${notification.read ? 'opacity-75' : 'opacity-100'}
              `}
            >
              <div className="flex">
                <div className="flex-shrink-0 mr-3 mt-0.5">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm ${notification.read ? 'text-gray-600' : 'text-gray-900 font-medium'}`}>
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                </div>
                <div className="ml-3 flex items-start space-x-1.5">
                  {!notification.read && (
                    <button 
                      onClick={() => markAsRead(notification.id)}
                      className="text-indigo-500 hover:text-indigo-700 transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  )}
                  <button 
                    onClick={() => deleteNotification(notification.id)}
                    className="text-gray-400 hover:text-gray-700 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
        <span className="text-xs text-gray-500">
          Showing {notifications.length} notifications
        </span>
        <button className="text-xs text-indigo-600 font-medium">
          View all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationCenter;