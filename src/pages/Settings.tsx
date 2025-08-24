import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Bell,
  Shield,
  User,
  Globe,
  Palette,
  Eye,
  EyeOff,
  Save,
  X,
  CheckCircle,
  AlertTriangle,
  Info,
  Lock,
  Key,
  Smartphone,
  Mail,
  Database,
  Download,
  Upload
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [settings, setSettings] = useState({
    general: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@ziontechgroup.com",
      phone: "+1 302 464 0950",
      language: "English",
      timezone: "America/New_York"
    },
    security: {
      twoFactorEnabled: true,
      emailNotifications: true,
      smsNotifications: false,
      loginAlerts: true
    },
    notifications: {
      emailMarketing: false,
      productUpdates: true,
      securityAlerts: true,
      weeklyReports: false,
      monthlyReports: true
    },
    appearance: {
      theme: "dark",
      fontSize: "medium",
      compactMode: false,
      showAnimations: true
    }
  });

  const [tempSettings, setTempSettings] = useState(settings);

  const handleSave = () => {
    setSettings(tempSettings);
    // Show success message
  };

  const handleCancel = () => {
    setTempSettings(settings);
  };

  const handleInputChange = (section: string, field: string, value: any) => {
    setTempSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const tabs = [
    { id: 'general', label: 'General', icon: <User className="h-4 w-4" /> },
    { id: 'security', label: 'Security', icon: <Shield className="h-4 w-4" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="h-4 w-4" /> },
    { id: 'appearance', label: 'Appearance', icon: <Palette className="h-4 w-4" /> }
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "pt", name: "Português" }
  ];

  const timezones = [
    { value: "America/New_York", label: "Eastern Time (ET)" },
    { value: "America/Chicago", label: "Central Time (CT)" },
    { value: "America/Denver", label: "Mountain Time (MT)" },
    { value: "America/Los_Angeles", label: "Pacific Time (PT)" },
    { value: "Europe/London", label: "Greenwich Mean Time (GMT)" },
    { value: "Europe/Paris", label: "Central European Time (CET)" }
  ];

  const themes = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" }
  ];

  const fontSizes = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
            <p className="text-zion-slate-light">Manage your account preferences and security settings</p>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <Button variant="outline" onClick={handleCancel} className="border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan hover:text-white">
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button 
              onClick={handleSave}
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                          : 'text-zion-slate-light hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {tab.icon}
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* General Settings */}
            {activeTab === 'general' && (
              <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
                <CardHeader>
                  <CardTitle className="text-white">General Information</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Update your personal information and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-zion-slate-light text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        value={tempSettings.general.firstName}
                        onChange={(e) => handleInputChange('general', 'firstName', e.target.value)}
                        className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-zion-slate-light text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        value={tempSettings.general.lastName}
                        onChange={(e) => handleInputChange('general', 'lastName', e.target.value)}
                        className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-zion-slate-light text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        value={tempSettings.general.email}
                        onChange={(e) => handleInputChange('general', 'email', e.target.value)}
                        className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-zion-slate-light text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        value={tempSettings.general.phone}
                        onChange={(e) => handleInputChange('general', 'phone', e.target.value)}
                        className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-zion-slate-light text-sm font-medium mb-2">Language</label>
                      <select
                        value={tempSettings.general.language}
                        onChange={(e) => handleInputChange('general', 'language', e.target.value)}
                        className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                      >
                        {languages.map((lang) => (
                          <option key={lang.code} value={lang.name}>{lang.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-zion-slate-light text-sm font-medium mb-2">Timezone</label>
                      <select
                        value={tempSettings.general.timezone}
                        onChange={(e) => handleInputChange('general', 'timezone', e.target.value)}
                        className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                      >
                        {timezones.map((tz) => (
                          <option key={tz.value} value={tz.value}>{tz.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
                  <CardHeader>
                    <CardTitle className="text-white">Password</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      Update your password to keep your account secure
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-zion-slate-light text-sm font-medium mb-2">Current Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none pr-12"
                            placeholder="Enter current password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-zion-slate-light text-sm font-medium mb-2">New Password</label>
                        <div className="relative">
                          <input
                            type={showNewPassword ? "text" : "password"}
                            className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none pr-12"
                            placeholder="Enter new password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white"
                          >
                            {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-zion-slate-light text-sm font-medium mb-2">Confirm New Password</label>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none pr-12"
                            placeholder="Confirm new password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white"
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
                  <CardHeader>
                    <CardTitle className="text-white">Two-Factor Authentication</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      Add an extra layer of security to your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-zion-cyan/10">
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-zion-cyan" />
                        <div>
                          <h4 className="text-white font-medium">SMS Authentication</h4>
                          <p className="text-zion-slate-light text-sm">Receive codes via text message</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={tempSettings.security.twoFactorEnabled}
                          onChange={(e) => handleInputChange('security', 'twoFactorEnabled', e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zion-cyan"></div>
                      </label>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
                  <CardHeader>
                    <CardTitle className="text-white">Login Alerts</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      Get notified about suspicious login attempts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-zion-cyan/10">
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-zion-cyan" />
                          <span className="text-white">Email notifications</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={tempSettings.security.emailNotifications}
                            onChange={(e) => handleInputChange('security', 'emailNotifications', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zion-cyan"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-zion-cyan/10">
                        <div className="flex items-center gap-3">
                          <Smartphone className="h-5 w-5 text-zion-cyan" />
                          <span className="text-white">SMS notifications</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={tempSettings.security.smsNotifications}
                            onChange={(e) => handleInputChange('security', 'smsNotifications', e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zion-cyan"></div>
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
                <CardHeader>
                  <CardTitle className="text-white">Notification Preferences</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Choose what notifications you want to receive
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(tempSettings.notifications).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-zion-cyan/10">
                        <div className="flex items-center gap-3">
                          <Bell className="h-5 w-5 text-zion-cyan" />
                          <span className="text-white capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={(e) => handleInputChange('notifications', key, e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zion-cyan"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Appearance Settings */}
            {activeTab === 'appearance' && (
              <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
                <CardHeader>
                  <CardTitle className="text-white">Appearance</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Customize how the application looks and feels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-zion-slate-light text-sm font-medium mb-2">Theme</label>
                      <select
                        value={tempSettings.appearance.theme}
                        onChange={(e) => handleInputChange('appearance', 'theme', e.target.value)}
                        className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                      >
                        {themes.map((theme) => (
                          <option key={theme.value} value={theme.value}>{theme.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-zion-slate-light text-sm font-medium mb-2">Font Size</label>
                      <select
                        value={tempSettings.appearance.fontSize}
                        onChange={(e) => handleInputChange('appearance', 'fontSize', e.target.value)}
                        className="w-full p-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none"
                      >
                        {fontSizes.map((size) => (
                          <option key={size.value} value={size.value}>{size.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-zion-cyan/10">
                          <div className="flex items-center gap-3">
                            <Palette className="h-5 w-5 text-zion-cyan" />
                            <span className="text-white">Compact Mode</span>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={tempSettings.appearance.compactMode}
                              onChange={(e) => handleInputChange('appearance', 'compactMode', e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zion-cyan"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-zion-cyan/10">
                          <div className="flex items-center gap-3">
                            <Palette className="h-5 w-5 text-zion-cyan" />
                            <span className="text-white">Show Animations</span>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={tempSettings.appearance.showAnimations}
                              onChange={(e) => handleInputChange('appearance', 'showAnimations', e.target.checked)}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zion-cyan"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;