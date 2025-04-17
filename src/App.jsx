import Header from './components/Header';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto">
      <Header />
      <ProjectList />
      <Footer />
    </div>
  );
}