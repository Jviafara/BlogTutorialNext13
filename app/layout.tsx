import MyProfilePic from './components/MyProfilePic';
import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
    title: "Jesús's Blog",
    description: 'Created by Jesús Viafara!',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="dark:bg-slate-800">
                <Navbar />
                <MyProfilePic />
                {children}
            </body>
        </html>
    );
}
