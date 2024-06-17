import { createRoot } from 'react-dom/client';
import { FC } from 'react';

// Use this component for any provider wrappers
const App: FC = () => <MainPage />;

// Put main content here
const MainPage = () => {
	return (
		<></>
	);
};

createRoot(document.getElementById('root')!).render(<App />);
