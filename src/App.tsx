import './App.css';
import { AppSidebar } from './components/global/app-sidebar';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <h1>Hello World</h1>
      </main>
    </SidebarProvider>
  );
}

export default App;
