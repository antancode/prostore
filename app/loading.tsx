import Image from "next/image";
import loader from '@/assets/loader.gif';
const LoadingPage = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}>
            <Image src={loader} alt="loader" width={48} height={48} />

        </div>
    )
};
export default LoadingPage;
