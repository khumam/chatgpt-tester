import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Chat from '../pages/chat';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/chat',
    element: <Chat />
  }
]);

export default router;
