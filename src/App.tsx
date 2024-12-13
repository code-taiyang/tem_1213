import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/common/Header";
import { CodingAssistant } from "./components/coding/CodingAssistant";
import { ActivityList } from "./pages/ActivityList";
import { Dashboard } from "./pages/Dashboard";
import { DatasetDetail } from "./pages/datasets/DatasetDetail";
import { DatasetList } from "./pages/datasets/DatasetList";
import { LiteraturePage } from "./pages/LiteraturePage";
import { WritingPage } from "./pages/WritingPage";
import { SettingsLayout } from "./pages/settings/SettingsLayout";
import { ProfileSettings } from "./pages/settings/ProfileSettings";
import { NotificationSettings } from "./pages/settings/NotificationSettings";
import { PrivacySettings } from "./pages/settings/PrivacySettings";
import { APISettings } from "./pages/settings/APISettings";
import { AppearanceSettings } from "./pages/settings/AppearanceSettings";
import { LanguageSettings } from "./pages/settings/LanguageSettings";
import { StorageSettings } from "./pages/settings/StorageSettings";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/writing/:id" element={<WritingPage />} />
        <Route
          path="*"
          element={
            <div className="flex h-screen bg-gray-50">
              <Sidebar />
              <div className="flex-1 flex flex-col min-w-0">
                <Header />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/activities" element={<ActivityList />} />
                  <Route path="/resources/datasets" element={<DatasetList />} />
                  <Route
                    path="/resources/datasets/:id"
                    element={<DatasetDetail />}
                  />
                  <Route path="/literature" element={<LiteraturePage />} />
                  <Route path="/tools/coding" element={<CodingAssistant />} />
                  <Route path="/settings" element={<SettingsLayout />}>
                    <Route path="profile" element={<ProfileSettings />} />
                    <Route
                      path="notifications"
                      element={<NotificationSettings />}
                    />
                    <Route path="privacy" element={<PrivacySettings />} />
                    <Route path="api" element={<APISettings />} />
                    <Route path="appearance" element={<AppearanceSettings />} />
                    <Route path="language" element={<LanguageSettings />} />
                    <Route path="storage" element={<StorageSettings />} />
                  </Route>
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
