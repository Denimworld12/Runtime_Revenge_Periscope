import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PremiumLeftNavbar from './components/premiumnavbar';
import FitnessApp from './components/bussiness/hero'
import Navbar from './components/bussiness/navbarr';
import Footer from './components/bussiness/footer'
import Dashboard from './components/homepage/Dashboard';
import FoodNutritionAnalyzer from './components/bussiness/FoodNutritionAnalyzer';
import MealPlanGenerator from './components/bussiness/diet';
import WorkoutPlanGenerator from './components/bussiness/workoutplan';
import Tracking from './components/bussiness/tracking';
import FitnessCommunityHub from './components/community/CommunityHub';
import FitnessPaymentPage from './components/payment/Pay';
import FitnessChatbot from './components/chatbot/Chatbot';
import { LiveMovementDetection } from './components/bussiness/opencv';
import { WorkoutPlanCard } from './components/bussiness/workout';
import { WorkoutRecommendations } from './components/bussiness/workoutrecommendation';
import { DietPlanCard } from './components/bussiness/dietplan';
import { DietRecommendation } from './components/bussiness/dietrecommendation';
import VoiceChat from './components/chatbot/voice';
import GoogleTranslate from './components/LanguageSwitcher';

// Create a Layout component to handle the sidebar + content structure
const DashboardLayout = ({ children }) => {
  return (
    <PremiumLeftNavbar>
      <div className="absolute top-4 right-4"> {/* Position dropdown in the dashboard */}
        <GoogleTranslate />
      </div>
      {children}
    </PremiumLeftNavbar>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <FitnessApp />
            <Footer />
          </>
        } />

        {/* Dashboard Pages with Layout */}
        <Route path="/dashboard" element={
          <DashboardLayout>
            <Dashboard />

          </DashboardLayout>
        } />
        <Route path="/food-nutrition" element={
          <DashboardLayout>
            <FoodNutritionAnalyzer />
          </DashboardLayout>
        } />

        <Route path="/meal-plan" element={
          <DashboardLayout>
            <MealPlanGenerator />
            <DietPlanCard />
            <DietRecommendation />
          </DashboardLayout>
        } />
        <Route path="/video-analysis" element={
          <DashboardLayout>
            <VoiceChat />
          </DashboardLayout>
        } />

        <Route path="/community" element={
          <DashboardLayout>
            <FitnessCommunityHub />
          </DashboardLayout>
        } />

        <Route path="/payment" element={
          <DashboardLayout>
            <FitnessPaymentPage />
          </DashboardLayout>
        } />

        <Route path="/workouts" element={
          <DashboardLayout>
            <WorkoutPlanGenerator />
            <WorkoutPlanCard />
            <WorkoutRecommendations />
          </DashboardLayout>
        } />

        <Route path="/tracking" element={
          <DashboardLayout>
            <Tracking />
          </DashboardLayout>
        } />



        {/* Settings and Notifications can use the same layout */}
        <Route path="/settings" element={
          <DashboardLayout>
            <div>Settings Page Content</div>
          </DashboardLayout>
        } />

        <Route path="/notifications" element={
          <DashboardLayout>
            <div>Notifications Page Content</div>
          </DashboardLayout>
        } />

        {/* Logout route - redirects to home */}
        <Route path="/logout" element={
          <DashboardLayout>
            <div>Logging out...</div>
          </DashboardLayout>
        } />

      </Routes>
      <FitnessChatbot />
    </Router>
  );
}

export default App;