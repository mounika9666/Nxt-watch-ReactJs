import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  addVideo: () => {},
  changeTab: () => {},
  activeTab: '',
  toggleTheme: () => {},
  removeSaveVideos: () => {},
})

export default ThemeAndVideoContext
