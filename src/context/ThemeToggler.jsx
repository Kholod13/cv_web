import { useTheme } from '../context/ThemeContext';

export default function ThemeToggler() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="p-2 border rounded">
            Switch to {theme === 'dark' ? 'light' : 'dark'} theme
        </button>
    );
}
