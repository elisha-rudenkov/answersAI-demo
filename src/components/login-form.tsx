import { useState } from "react";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/colors";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, googleProvider } from "../firebase";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup 
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Authentication failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError("");
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Google sign-in failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="text-center mb-2">
        <h1 className="text-2xl font-bold text-white">AnswersAI</h1>
      </div>
      <Card className="border-0 shadow-lg rounded-xl overflow-hidden" style={{ backgroundColor: colors.secondaryBg }}>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-white">{isSignUp ? "Sign Up" : "Login"}</CardTitle>
          <CardDescription style={{ color: "#E0E0E0" }}>
            {isSignUp 
              ? "Enter your details below to create an account" 
              : "Enter your email below to login to your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleEmailSignIn}>
            <div className="flex flex-col gap-5">
              {error && (
                <div className="text-sm font-medium py-2 px-3 bg-red-900/30 border border-red-800 rounded-lg text-red-200">
                  {error}
                </div>
              )}
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white text-sm">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 focus:ring-1 focus:ring-accent1/50"
                  style={{ 
                    backgroundColor: colors.tertiaryBg, 
                    color: "white",
                    padding: "10px 12px",
                    height: "42px"
                  }}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-white text-sm">Password</Label>
                  {!isSignUp && (
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm hover:text-accent1 transition-colors"
                      style={{ color: "#E0E0E0" }}
                    >
                      Forgot your password?
                    </a>
                  )}
                </div>
                <Input 
                  id="password" 
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-0 focus:ring-1 focus:ring-accent1/50"
                  style={{ 
                    backgroundColor: colors.tertiaryBg, 
                    color: "white",
                    padding: "10px 12px",
                    height: "42px"
                  }}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full mt-2 font-medium transition-all hover:brightness-110 active:scale-[0.98]" 
                disabled={loading}
                style={{ 
                  backgroundColor: colors.accent1, 
                  color: colors.greenishBg,
                  padding: "10px 12px",
                  height: "42px"
                }}
              >
                {loading 
                  ? "Processing..." 
                  : isSignUp 
                    ? "Create Account" 
                    : "Login"
                }
              </Button>
              <Button 
                variant="outline" 
                className="w-full transition-all hover:brightness-110 active:scale-[0.98]"
                type="button"
                onClick={handleGoogleSignIn}
                disabled={loading}
                style={{ 
                  borderColor: colors.accent2, 
                  color: colors.accent1,
                  backgroundColor: "transparent",
                  padding: "10px 12px",
                  height: "42px"
                }}
              >
                {loading ? "Processing..." : "Login with Google"}
              </Button>
            </div>
            <div className="mt-6 text-center text-sm" style={{ color: "#E0E0E0" }}>
              {isSignUp ? "Already have an account? " : "Don't have an account? "}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="underline underline-offset-4 hover:text-accent1 transition-colors"
                style={{ color: colors.accent1 }}
              >
                {isSignUp ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 