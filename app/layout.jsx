import "@/styles/globals.css"
// import "@components/Provider"
import Nav from "@/components/Nav"

export const metadata = {
    title: "TheRealPromps",
    description: "Discover"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="eng">
            <body>
                <div className="main">
                    <div className="gradient" />
                    <main className="app">
                        <Nav/>
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}

export default RootLayout;
