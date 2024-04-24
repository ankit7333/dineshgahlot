import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PhotosProvider } from './contexts/PhotosContext'
import Home from './pages/Home'
function App() {
  return (
    <>
      <PhotosProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
          </Routes>
        </BrowserRouter>
      </PhotosProvider>
    </>
  );
}

export default App;
