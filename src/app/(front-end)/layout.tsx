import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function FrontEndLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='min-h-screen bg-background'>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
