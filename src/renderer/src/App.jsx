import { Outlet, Route, Routes } from 'react-router-dom'
import AsideMenu from './components/UI/AsideMenu/AsideMenu'
import Footer from './components/UI/Footer/Footer'
import Header from './components/UI/Header/Header'
import ReportGenerator from './components/tools/ReportGenerator/ReportGenerator'
import ToolBox from './components/ToolBox/ToolBox'

const App = () => {
  return (
    <>
      <Header />
      <AsideMenu />
      <Footer />
      <Routes>
        <Route path="/report-generator" element={<ReportGenerator />} />
        <Route path="/" element={<ToolBox />} />
      </Routes>
      <Outlet />
    </>
  )
}

export default App
