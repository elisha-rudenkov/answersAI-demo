import { LoginForm } from "../components/auth/login-form";
import { colors } from "../lib/colors";

export default function Login() {
  return (
    <div 
      className="flex min-h-screen w-full items-center justify-center p-6 md:p-10" 
      style={{ 
        backgroundColor: colors.mainBg,
        backgroundImage: `radial-gradient(circle at 15% 15%, rgba(89, 111, 36, 0.08) 0%, transparent 40%), 
                          radial-gradient(circle at 85% 85%, rgba(218, 253, 127, 0.05) 0%, transparent 40%)`,
        backgroundSize: "cover"
      }}
    >
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
} 