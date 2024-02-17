import "@/styles/globals.css"
// import "@components/Provider"
import Nav from "@/components/Nav"
import Provider from "@/components/Provider";

export const metadata = {
    title: "TheRealPromps",
    description: "Discover"
}

const RootLayout = ({ children }) => {
    return ( 
        <html lang="eng">
            <body>
                <Provider>
                <div className="main">
                    <div className="gradient" />
                    <main className="app">
                        <Nav/>
                        {children}
                    </main>
                </div>
                </Provider>
            </body>
        </html>
    );
}

export default RootLayout;
