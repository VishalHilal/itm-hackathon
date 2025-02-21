import { Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import authServices from "./services/authServices";
import { userContext } from "./context/userContext";
import ServicesPage from "./_root/servicesPage/ServicesPage";
import ContactPage from "./_root/contact/ContactPage";
import AboutPage from "./_root/about/AboutPage";
import LoginPage from "./_auth/loginPage/LoginPage";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import AuthPage from "./_auth/authPage/AuthPage";
import CreateProfile from "./_root/createProfile/CreateProfile";
import HomePage from "./_root/homePage/HomePage";
import ChatPage from "./_root/chatPage/ChatPage";
import NewsPage from "./_root/newsPage/NewsPage";
import ProfilePage from "./_root/profilePage/ProfilePage";

function App() {
  const { addUser } = useContext(userContext);
  const getCurrentUser = async () => {
    try {
      const user = await authServices.getCurrentUser();
      console.log("Fetching user...");
      if (user) {
        addUser(user);
        console.log(user);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/create-profile" element={<CreateProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
