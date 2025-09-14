import React from "react";
import { Button } from "./ui/button";

interface LoginScreenProps {
  onLogin: () => void;
  onGuestMode: () => void;
}

export function LoginScreen({ onLogin, onGuestMode }: LoginScreenProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Study Buddy Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  console.error('Logo failed to load, using fallback');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <span className="text-xl font-semibold text-foreground">Study Buddy</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-semibold text-foreground">
            Your AI Study Partner
          </h1>
          
          <p className="text-muted-foreground text-lg">
            Transform your notes into interactive study materials with AI-powered summaries and quizzes
          </p>

          {/* Logo */}
          <div className="flex justify-center py-8">
            <div className="w-64 h-48 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Studdy Buddy Logo" 
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  console.error('Logo failed to load');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>

          {/* Sign In Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={onLogin}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>
            
            <Button 
              onClick={onGuestMode}
              variant="outline" 
              className="w-full border-border text-foreground hover:bg-secondary py-3"
            >
              Continue as Guest
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}