import Navbar from "../components/shared/Navbar";

export default function ResoucesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Navbar />
            {children}
            <Navbar />
        </div>
    );
}
