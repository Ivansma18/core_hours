import React from 'react';
import './App.css';
import { AppLayout } from './layouts/AppLayout';
import { Dashboard } from './components/Dashboard';

const App: React.FC =() => {
  return (
    <AppLayout>
      <Dashboard />
    </AppLayout>
  );
}

export default App;
