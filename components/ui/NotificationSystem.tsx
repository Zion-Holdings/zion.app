import { useState, useEffect, createContext, useContext, ReactNode } from 'react'
  type: 'success' | 'error' | 'warning' | 'info' | 'loading'
  addNotification: (notification: Omit