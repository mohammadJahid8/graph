import './App.css';
import { AppSidebar } from './components/global/app-sidebar';
import ChartComponent from './components/global/chart';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />

        <ChartComponent />
      </main>
    </SidebarProvider>
  );
}

export default App;
